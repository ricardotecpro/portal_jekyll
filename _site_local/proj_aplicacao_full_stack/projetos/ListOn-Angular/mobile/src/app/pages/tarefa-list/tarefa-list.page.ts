import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonCheckbox, IonLabel, IonButtons, IonIcon, IonFab, IonFabButton, IonSpinner, AlertController, ToastController, IonCard, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from 'src/app/models/tarefa.model';
import { Observable, catchError, of } from 'rxjs';
import { addIcons } from 'ionicons';
import { pencilOutline, trashOutline, add, close, cloudOfflineOutline, fileTrayOutline, alertCircleOutline, closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tarefa-list',
  templateUrl: './tarefa-list.page.html',
  styleUrls: ['./tarefa-list.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton,
    IonList, IonItem, IonCheckbox, IonLabel, IonButtons, IonIcon, IonFab, IonFabButton,
    IonSpinner, IonCard, IonCardContent, IonCardTitle
  ]
})
export class TarefaListPage {

  tarefas$!: Observable<Tarefa[]>;
  errorLoading = false;

  constructor(
    private tarefaService: TarefaService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    addIcons({ pencilOutline, trashOutline, add, close, cloudOfflineOutline, fileTrayOutline, alertCircleOutline, closeOutline });
  }

  ionViewWillEnter() {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.errorLoading = false;
    this.tarefas$ = this.tarefaService.listarTodas().pipe(
      catchError(error => {
        console.error('Erro ao carregar tarefas:', error);
        this.toastCtrl.create({
          message: 'Falha ao carregar tarefas. Verifique a conexão com a API.',
          duration: 5000,
          color: 'danger'
        }).then(toast => toast.present());
        this.errorLoading = true;
        return of([]);
      })
    );
  }

  toggleConcluida(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
    this.tarefaService.atualizar(tarefa.id, tarefa).subscribe();
  }

  async abrirModal(tarefa?: Tarefa) {
    const { data } = await this.tarefaService.abrirModal(tarefa);
    if (data === 'success') {
      this.carregarTarefas();
    }
  }

  async deletar(id: number) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Exclusão',
      message: 'Tem certeza que deseja excluir esta tarefa?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Excluir',
          handler: () => {
            this.tarefaService.deletar(id).subscribe({
              next: async () => {
                const toast = await this.toastCtrl.create({
                  message: 'Tarefa excluída com sucesso!',
                  duration: 2000,
                  color: 'success'
                });
                toast.present();
                this.carregarTarefas();
              },
              error: async (err) => {
                console.error('Erro ao excluir tarefa:', err);
                const toast = await this.toastCtrl.create({
                  message: 'Erro ao excluir tarefa.',
                  duration: 3000,
                  color: 'danger'
                });
                toast.present();
              }
            });
          }
        }
      ]
    });
    await alert.present();
  }
}
