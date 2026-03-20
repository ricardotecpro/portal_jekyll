---
layout: default
title: 💻 Módulo 2: Frontend (Web) - Componentização e Clareza
---

# 💻 Módulo 2: Frontend (Web) - Componentização e Clareza

**Objetivo:** Refatorar a UI para uma experiência CRUD mais tradicional e clara (botões explícitos) e organizar melhor o estado do componente.

### ### 🎨 Passo 1: Refatorando a UI para Ações Explícitas

Vamos trocar a edição por duplo clique por botões "Editar" e "Salvar", que são mais intuitivos em formulários web, como especificado nos requisitos de UX.

**`task-list.component.html` (Refatorado)**
```html
<div class="container">
  <h1>Minha Lista de Tarefas (Web)</h1>
  
  <form class="form-add" (ngSubmit)="adicionarTarefa()">
    <input type="text" placeholder="O que precisa ser feito?" [(ngModel)]="novaTarefa.descricao" name="descricao" required>
    <button type="submit">Adicionar</button>
  </form>

  <ul class="task-list">
    <li *ngFor="let tarefa of tarefas" [class.editing]="tarefa.id === tarefaEmEdicao?.id">
      
      <ng-container *ngIf="tarefa.id !== tarefaEmEdicao?.id">
        <input type="checkbox" [(ngModel)]="tarefa.concluida" (change)="atualizarTarefa(tarefa)">
        <span [ngClass]="{'completed': tarefa.concluida}">{{ tarefa.descricao }}</span>
        <div class="actions">
          <button class="btn-edit" (click)="iniciarEdicao(tarefa)">Editar</button>
          <button class="btn-delete" (click)="deletarTarefa(tarefa.id)">Deletar</button>
        </div>
      </ng-container>

      <ng-container *ngIf="tarefa.id === tarefaEmEdicao?.id">
        <input type="checkbox" [(ngModel)]="tarefaEmEdicao.concluida">
        <input type="text" class="edit-input" [(ngModel)]="tarefaEmEdicao.descricao">
        <div class="actions">
          <button class="btn-save" (click)="salvarEdicao()">Salvar</button>
          <button class="btn-cancel" (click)="cancelarEdicao()">Cancelar</button>
        </div>
      </ng-container>

    </li>
  </ul>
</div>
```
* **Nota:** Você precisará adicionar estilos para as novas classes de botões (`.btn-edit`, `.btn-delete`, `.btn-save`, `.btn-cancel`) no seu arquivo CSS.

### ### 🧩 Passo 2: Refatorando o `TaskListComponent`

* **Melhoria (Clean Code):** Em vez de uma flag `editando` em cada objeto `Tarefa`, o componente agora gerencia o estado de edição centralmente com uma única variável `tarefaEmEdicao`. Isso separa o estado da UI do modelo de dados.

**`task-list.component.ts` (Refatorado)**
```typescript
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../models/tarefa';
import { TarefaService } from '../../services/tarefa.service';
// ... outros imports ...

@Component({
  selector: 'app-task-list',
  // ... resto do decorator ...
})
export class TaskListComponent implements OnInit {
  tarefas: Tarefa[] = [];
  novaTarefa: { descricao: string; concluida: boolean } = { descricao: '', concluida: false };
  tarefaEmEdicao: Tarefa | null = null;
  
  constructor(private tarefaService: TarefaService) {}
  
  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefaService.getTarefas().subscribe(data => this.tarefas = data);
  }

  adicionarTarefa(): void {
    // ... implementação ...
  }
  
  deletarTarefa(id?: number): void {
    // ... implementação ...
  }

  iniciarEdicao(tarefa: Tarefa): void {
    // Cria uma cópia para não alterar o original antes de salvar
    this.tarefaEmEdicao = { ...tarefa };
  }

  cancelarEdicao(): void {
    this.tarefaEmEdicao = null;
  }

  salvarEdicao(): void {
    if (this.tarefaEmEdicao) {
      this.tarefaService.updateTarefa(this.tarefaEmEdicao).subscribe(tarefaAtualizada => {
        const index = this.tarefas.findIndex(t => t.id === tarefaAtualizada.id);
        if (index !== -1) {
          this.tarefas[index] = tarefaAtualizada;
        }
        this.tarefaEmEdicao = null; // Sai do modo de edição
      });
    }
  }

  atualizarTarefa(tarefa: Tarefa): void {
      this.tarefaService.updateTarefa(tarefa).subscribe();
  }
}
---

### 🚀 [ricardotecpro.github.io](https://ricardotecpro.github.io/)


```
