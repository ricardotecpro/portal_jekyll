---
layout: default
title: 🖥️ Módulo 3: Desktop (JavaFX) - Melhorando a Experiência Nativa
---

# 🖥️ Módulo 3: Desktop (JavaFX) - Melhorando a Experiência Nativa

**Objetivo:** Aprimorar a UX do cliente desktop para seguir convenções nativas, como o menu de contexto (clique direito), e manter a edição por duplo clique.

### ### 🖱️ Passo 1: Implementando o Menu de Contexto
* **Melhoria:** Adicionamos um menu de contexto em cada linha da tabela, uma forma muito comum e esperada de interagir com aplicações desktop, conforme os requisitos de UX.

**`MainViewController.java` (Trecho Refatorado do `initialize`)**
```java
@Override
public void initialize(URL url, ResourceBundle resourceBundle) {
    // ... (configuração das colunas, setEditable, setCellFactory, setOnEditCommit, etc.) ...

    // Boas Práticas: Adiciona um menu de contexto às linhas da tabela
    tabelaTarefas.setRowFactory(tv -> {
        TableRow<Tarefa> row = new TableRow<>();
        ContextMenu contextMenu = new ContextMenu();
        
        MenuItem editarItem = new MenuItem("Editar Descrição");
        // A ação do menu dispara o mesmo modo de edição do duplo clique
        editarItem.setOnAction(event -> {
            row.getTableView().edit(row.getIndex(), colunaDescricao);
        });

        MenuItem deletarItem = new MenuItem("Deletar Tarefa");
        deletarItem.setOnAction(event -> deletarTarefa(row.getItem()));

        contextMenu.getItems().addAll(editarItem, new SeparatorMenuItem(), deletarItem);

        // Mostra o menu apenas se a linha não estiver vazia
        row.contextMenuProperty().bind(
            Bindings.when(row.emptyProperty())
            .then((ContextMenu)null)
            .otherwise(contextMenu)
        );
        return row;
    });

    // ... (resto do método) ...
    carregarTarefas();
}
```
* **Manutenção da Edição por Duplo Clique:** A implementação anterior, que usa `TextFieldTableCell` e `setOnEditCommit`, já é uma boa prática e deve ser mantida, pois oferece um atalho rápido para o usuário. O menu de contexto serve como uma alternativa mais explícita.

---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)


