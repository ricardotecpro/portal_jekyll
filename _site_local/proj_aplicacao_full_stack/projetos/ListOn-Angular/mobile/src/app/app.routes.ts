import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tarefa-list',
    loadComponent: () => import('./pages/tarefa-list/tarefa-list.page').then( m => m.TarefaListPage)
  },
  {
    path: 'tarefa-form',
    loadComponent: () => import('./pages/tarefa-form/tarefa-form.page').then( m => m.TarefaFormPage)
  },
];
