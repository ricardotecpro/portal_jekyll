<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lista de Tarefas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Lista de Tarefas</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item>
        <ion-input
          v-model="novaTarefaTitulo"
          placeholder="O que precisa ser feito?"
          @keyup.enter="adicionarTarefa"
        ></ion-input>
        <ion-button @click="adicionarTarefa" slot="end">
          <ion-icon :icon="add"></ion-icon>
        </ion-button>
      </ion-item>

      <ion-item v-if="erro" lines="none">
        <ion-label color="danger">{{ erro }}</ion-label>
      </ion-item>

      <ion-list>
        <ion-item-sliding v-for="tarefa in tarefas" :key="tarefa.id">

          <ion-item :class="{ 'tarefa-concluida': tarefa.concluida }">
            <ion-checkbox
              slot="start"
              :checked="tarefa.concluida"
              @ionChange="alternarStatus(tarefa)"
            ></ion-checkbox>
            <ion-label>
              <h2>{{ tarefa.titulo }}</h2>
            </ion-label>
            <ion-button
              fill="clear"
              slot="end"
              @click="abrirPromptEdicao(tarefa)"
            >
              <ion-icon :icon="createOutline"></ion-icon>
            </ion-button>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option color="danger" @click="removerTarefa(tarefa.id)">
              <ion-icon :icon="trash" slot="icon-only"></ion-icon>
            </ion-item-option>
          </ion-item-options>

        </ion-item-sliding>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from "vue";
// 1. Importações de componentes e ganchos de ciclo de vida do Ionic
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCheckbox,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  onIonViewWillEnter, // O "onMounted" do Ionic
  alertController, // MUDANÇA AQUI: Importa o controller
} from "@ionic/vue";

// 2. Importações dos ícones
import { add, trash, createOutline } from "ionicons/icons";

// 3. Importação do nosso serviço (IDÊNTICO AO WEB)
import tarefaService from "../services/tarefaService";

// --- O CÓDIGO ABAIXO É PRATICAMENTE IDÊNTICO AO SEU App.vue WEB ---

// 4. Estado da Aplicação (IDÊNTICO)
const tarefas = ref([]);
const novaTarefaTitulo = ref("");
const erro = ref(null);

// 5. Hook para o Alert de Edição - REMOVIDO
// const [presentAlert] = useIonAlert();

// R (Read) - Carregar Tarefas
async function carregarTarefas() {
  try {
    erro.value = null;
    const response = await tarefaService.getTarefas();
    // Ordena as tarefas: pendentes primeiro, depois por ID
    tarefas.value = response.data.sort(
      (a, b) => a.concluida - b.concluida || a.id - b.id
    );
  } catch (e) {
    erro.value = "Falha ao carregar tarefas. Backend está rodando?";
    console.error(e);
  }
}

// C (Create) - Adicionar Tarefa (IDÊNTICO)
async function adicionarTarefa() {
  if (!novaTarefaTitulo.value.trim()) return;
  const novaTarefa = { titulo: novaTarefaTitulo.value, concluida: false };
  try {
    erro.value = null;
    await tarefaService.addTarefa(novaTarefa);
    novaTarefaTitulo.value = "";
    // Recarrega para manter a ordem
    await carregarTarefas();
  } catch (e) {
    erro.value = "Falha ao adicionar tarefa.";
    console.error(e);
  }
}

// D (Delete) - Remover Tarefa (IDÊNTICO)
async function removerTarefa(id) {
  try {
    erro.value = null;
    await tarefaService.deleteTarefa(id);
    // Recarrega a lista
    await carregarTarefas();
  } catch (e) {
    erro.value = "Falha ao remover tarefa.";
    console.error(e);
  }
}

// U (Update Status) - Alternar Status (IDÊNTICO)
async function alternarStatus(tarefa) {
  try {
    erro.value = null;
    const novoStatus = !tarefa.concluida;
    await tarefaService.updateStatusTarefa(tarefa.id, novoStatus);
    // Recarrega para reordenar a lista
    await carregarTarefas();
  } catch (e) {
    erro.value = "Falha ao atualizar status.";
    console.error(e);
  }
}

// U (Update Title) - MUDANÇA AQUI: Adaptado para alertController
async function abrirPromptEdicao(tarefa) {
  const alert = await alertController.create({
    header: "Editar Tarefa",
    inputs: [
      {
        name: "titulo",
        type: "text",
        value: tarefa.titulo,
        placeholder: "Novo título",
      },
    ],
    buttons: [
      {
        text: "Cancelar",
        role: "cancel",
      },
      {
        text: "Salvar",
        handler: async (data) => {
          if (data.titulo && data.titulo.trim() !== tarefa.titulo) {
            try {
              erro.value = null;
              await tarefaService.updateTituloTarefa(tarefa.id, data.titulo);
              await carregarTarefas();
            } catch (e) {
              erro.value = "Falha ao salvar edição.";
              console.error(e);
            }
          }
        },
      },
    ],
  });
  await alert.present();
}


// 6. Gancho de Ciclo de Vida do Ionic
onIonViewWillEnter(() => {
  carregarTarefas();
});
</script>


<style scoped>
/* Estilo para tarefas concluídas */
.tarefa-concluida h2 {
  text-decoration: line-through;
  color: var(--ion-color-medium);
}
</style>
