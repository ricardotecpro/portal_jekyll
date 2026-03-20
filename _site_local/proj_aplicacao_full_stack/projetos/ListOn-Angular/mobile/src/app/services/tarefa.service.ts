import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';
import { ModalController } from '@ionic/angular';
import { TarefaFormPage } from '../pages/tarefa-form/tarefa-form.page';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  // ATENÇÃO: Usando o endereço IP para maior robustez no desenvolvimento local.
  // Certifique-se de que a API está acessível neste endereço.
  private readonly API_URL = 'http://192.168.0.55:8080/api/tarefas';

  constructor(private http: HttpClient, private modalCtrl: ModalController) { }

  listarTodas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.API_URL);
  }

  criar(tarefa: Partial<Tarefa>): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.API_URL, tarefa);
  }

  atualizar(id: number, tarefa: Partial<Tarefa>): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.API_URL}/${id}`, tarefa);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  async abrirModal(tarefa?: Tarefa) {
    const modal = await this.modalCtrl.create({
      component: TarefaFormPage,
      componentProps: { tarefa }
    });
    await modal.present();
    return modal.onWillDismiss();
  }
}
