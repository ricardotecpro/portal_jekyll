import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, ModalController, ToastController } from '@ionic/angular';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.page.html',
  styleUrls: ['./tarefa-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class TarefaFormPage implements OnInit {

  @Input() tarefa?: Tarefa;
  form!: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private tarefaService: TarefaService
  ) { }

  ngOnInit() {
    this.isEditMode = !!this.tarefa;
    this.form = this.fb.group({
      titulo: [this.tarefa?.titulo || '', [Validators.required, Validators.minLength(3)]]
    });
  }

  fecharModal() {
    this.modalCtrl.dismiss();
  }

  salvar() {
    if (this.form.invalid) {
      return;
    }

    const request = this.isEditMode
      ? this.tarefaService.atualizar(this.tarefa!.id, this.form.value)
      : this.tarefaService.criar(this.form.value);

    request.subscribe(async () => {
      const message = this.isEditMode ? 'Tarefa atualizada com sucesso!' : 'Tarefa criada com sucesso!';
      const toast = await this.toastCtrl.create({
        message: message,
        duration: 2000,
        color: 'success'
      });
      toast.present();
      this.modalCtrl.dismiss('success');
    });
  }
}
