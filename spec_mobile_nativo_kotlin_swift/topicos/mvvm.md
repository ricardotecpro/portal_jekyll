---
layout: default
title: MVVM
---

📱 Módulo 4: Guia Completo do Cliente Android com Jetpack Compose
Objetivo: Construir um cliente Android nativo, moderno e robusto, seguindo a arquitetura recomendada pelo Google (MVVM com Repositório) e utilizando as melhores práticas com Jetpack Compose, ViewModel e Material 3.

🛠️ Ferramentas Necessárias
Android Studio: A IDE oficial para desenvolvimento Android (versão "Hedgehog" ou mais recente).

Android SDK: Instalado via Android Studio.

Emulador Android (AVD) ou um dispositivo físico.

📂 Passo 1: Criação do Projeto
No Android Studio, vá em File > New > New Project....

Selecione o template Empty Activity (com o logo do Compose).

Configure o projeto:

Name: listadetarefas-android

Package name: br.com.curso.listadetarefas.android

Minimum SDK: API 26: Android 8.0 (Oreo) (Necessário para os ícones adaptativos padrão).

Clique em Finish.

🌳 Estrutura Inicial de Pastas
O Android Studio gerará a estrutura do projeto. Nosso código-fonte estará em:

listadetarefas-android/
└── app/
    └── src/
        └── main/
            └── java/
                └── br/com/curso/listadetarefas/android/
                    └── MainActivity.kt

⚙️ Passo 2: Configuração do Projeto e Dependências
Antes de codificar, vamos preparar nosso ambiente com as permissões e bibliotecas necessárias.

Permissões de Rede: Abra o arquivo app/src/main/AndroidManifest.xml para permitir que o app acesse a internet.

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <!-- Permissão para acessar a internet -->
    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Listadetarefasandroid"
        android:usesCleartextTraffic="true">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:theme="@style/Theme.Listadetarefasandroid">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>

Adicionar Dependências: Substitua o conteúdo do seu arquivo app/build.gradle.kts pelo código abaixo. Ele contém as bibliotecas para Compose, ViewModel, Retrofit e Coroutines.

plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("org.jetbrains.kotlin.plugin.compose")
}

android {
    namespace = "br.com.curso.listadetarefas.android"
    compileSdk = 34

    defaultConfig {
        applicationId = "br.com.curso.listadetarefas.android"
        minSdk = 26
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildFeatures {
        compose = true
    }
    // ... (demais configurações)
}

dependencies {
    // Core e Activity
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.activity:activity-compose:1.8.2")

    // Jetpack Compose (BoM gerencia as versões)
    val composeBom = platform("androidx.compose:compose-bom:2024.02.01")
    implementation(composeBom)
    implementation("androidx.compose.material3:material3")
    implementation("androidx.compose.ui:ui-tooling-preview")
    debugImplementation("androidx.compose.ui:ui-tooling")

    // ViewModel e State Management
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.7.0")
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.7.0")

    // Networking
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    implementation("com.squareup.retrofit2:converter-gson:2.9.0")
    implementation("com.squareup.okhttp3:logging-interceptor:4.12.0")
}

🏛️ Passo 3: Definindo a Arquitetura MVVM
Vamos organizar nosso código seguindo o padrão MVVM (Model-View-ViewModel) com uma camada de Repositório, que promove a separação de responsabilidades e facilita testes.

📊 Diagrama de Arquitetura
classDiagram
    direction LR
    MainActivity --|> TarefaViewModel : observa
    TarefaViewModel --|> TarefaRepository : solicita dados
    TarefaRepository --|> TarefaApiService : busca dados da rede
    TarefaApiService --|> RetrofitClient : realiza a chamada HTTP

    class MainActivity {
     <<View>>
     + Composable TarefaApp()
    }
    class TarefaViewModel {
     <<ViewModel>>
     + StateFlow~TarefaUiState~ uiState
     + carregarTarefas()
    }
    class TarefaRepository {
     <<Repository>>
     + getTarefas()
    }
    class TarefaApiService {
     <<Interface>>
     + getTarefas()
    }
    class RetrofitClient {
     <<Object>>
    }

💾 Passo 4: Construindo a Camada de Dados (Data Layer)
Esta camada é responsável por buscar e gerenciar os dados, seja de uma API ou de um banco de dados local.

Crie os pacotes:

data.model para nossas classes de dados (POJOs/data classes).

data.network para o código relacionado ao Retrofit.

data.repository para a classe que abstrai a fonte de dados.

Estrutura de Pastas da Camada de Dados:

java/br/com/curso/listadetarefas/android/
└── data/
    ├── model/
    │   └── Tarefa.kt
    ├── network/
    │   ├── RetrofitClient.kt
    │   └── TarefaApiService.kt
    └── repository/
        └── TarefaRepository.kt

Crie os arquivos:

data/model/Tarefa.kt

package br.com.curso.listadetarefas.android.data.model

data class Tarefa(
    val id: Long?,
    var descricao: String?,
    var concluida: Boolean
)

data/network/TarefaApiService.kt

package br.com.curso.listadetarefas.android.data.network
// ... (código da interface TarefaApiService)

data/network/RetrofitClient.kt

package br.com.curso.listadetarefas.android.data.network

object RetrofitClient {
    // CORREÇÃO: Usando 10.0.2.2 para o emulador acessar o localhost da máquina.
    private const val BASE_URL = "http://10.0.2.2:8080/api/"
    // ... (código do objeto RetrofitClient)
}

data/repository/TarefaRepository.kt (Nova Classe)

Motivação: O Repositório desacopla o ViewModel da fonte de dados. O ViewModel não precisa saber se os dados vêm de uma API ou de um cache; ele apenas pede os dados ao Repositório.

package br.com.curso.listadetarefas.android.data.repository

import br.com.curso.listadetarefas.android.data.model.Tarefa
import br.com.curso.listadetarefas.android.data.network.RetrofitClient

class TarefaRepository {
    private val apiService = RetrofitClient.instance

    suspend fun getTarefas(): List<Tarefa> = apiService.getTarefas()
    suspend fun addTarefa(tarefa: Tarefa): Tarefa = apiService.addTarefa(tarefa)
    suspend fun updateTarefa(id: Long, tarefa: Tarefa): Tarefa = apiService.updateTarefa(id, tarefa)
    suspend fun deleteTarefa(id: Long) = apiService.deleteTarefa(id)
}

🎨 Passo 5: Construindo a Camada de UI (UI Layer)
Esta camada contém tudo relacionado à interface do usuário: estado, lógica de apresentação e os componentes visuais.

Crie os pacotes:

ui.theme para os arquivos de tema (Color.kt, Type.kt, Theme.kt).

ui.viewmodel para a nossa classe TarefaViewModel.

Estrutura de Pastas da Camada de UI:

java/br/com/curso/listadetarefas/android/
└── ui/
    ├── theme/
    │   ├── Color.kt
    │   ├── Theme.kt
    │   └── Type.kt
    └── viewmodel/
        └── TarefaViewModel.kt

Crie os arquivos:

ui/theme/Theme.kt

Use o código corrigido que já criamos, garantindo que o nome da função seja listadetarefasAndroidTheme.

ui/viewmodel/TarefaViewModel.kt (Refatorado)

Melhoria: O ViewModel agora depende do TarefaRepository, não mais do RetrofitClient diretamente. Isso o torna mais limpo e fácil de testar (podemos "mockar" o repositório em testes unitários).

package br.com.curso.listadetarefas.android.ui.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import br.com.curso.listadetarefas.android.data.model.Tarefa
import br.com.curso.listadetarefas.android.data.repository.TarefaRepository
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch

// ... (código da data class TarefaUiState)

class TarefaViewModel : ViewModel() {
    private val repository = TarefaRepository()
    // ... (código do _uiState e uiState)

    init { carregarTarefas() }

    fun carregarTarefas() {
        // ... (lógica de carregamento usando repository.getTarefas())
    }
    // ... (demais métodos usando o repository)
}

🖼️ Passo 6: Montando a View e a Interação do Usuário
Finalmente, vamos conectar nossa lógica de UI e ViewModel na MainActivity.

Substitua o código da MainActivity.kt:

Melhoria: O código abaixo já inclui a implementação do PullToRefresh do Material 3 e segue as melhores práticas para coletar o estado do ViewModel.

@file:OptIn(ExperimentalMaterial3Api::class)
package br.com.curso.listadetarefas.android

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.*
import br.com.curso.listadetarefas.android.ui.theme.listadetarefasAndroidTheme
import br.com.curso.listadetarefas.android.ui.viewmodel.TarefaViewModel

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            listadetarefasAndroidTheme {
                Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background) {
                    TarefaApp() // Passando o ViewModel
                }
            }
        }
    }
}

// ... (código dos Composables: TarefaApp, TarefaScreen, TarefaItem, EditTaskDialog)

🚀 Passo 7: Execução e Verificação Final
Estrutura Final do Projeto:

java/br/com/curso/listadetarefas/android/
├── data/
│   ├── model/
│   ├── network/
│   └── repository/
├── ui/
│   ├── theme/
│   └── viewmodel/
└── MainActivity.kt

Execute o App: Com seu backend Spring Boot rodando, execute o aplicativo no emulador. A lista de tarefas deve ser carregada.

Teste as Funcionalidades: Verifique se adicionar, editar, marcar como concluída e deletar tarefas está funcionando. Teste também o gesto de "puxar para atualizar".

💡 Sugestões para o Futuro
Injeção de Dependência: Para projetos maiores, considere usar uma biblioteca como Hilt ou Koin para gerenciar a criação de dependências (como o TarefaRepository), em vez de instanciá-las manualmente.

Testes Unitários: Escreva testes para o TarefaViewModel, substituindo o TarefaRepository por uma versão "fake" (mock) para testar a lógica de negócios sem depender da rede.

Melhoria de UX: Implemente gestos de "swipe" para deletar ou editar tarefas, seguindo a convenção recomendada para ambientes mobile.
