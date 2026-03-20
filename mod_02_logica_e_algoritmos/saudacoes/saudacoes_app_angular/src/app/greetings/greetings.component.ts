import { Component } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent {
  inputTime: string = '';
  greeting: string = '';
  formattedTime: string = '';

  onSubmit() {
    const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
    if (timeRegex.test(this.inputTime)) {
      const [hour, minute] = this.inputTime.split(':').map(Number);

      if (hour < 6) {
        this.greeting = "Boa madrugada!";
      } else if (hour < 12) {
        this.greeting = "Bom dia!";
      } else if (hour < 18) {
        this.greeting = "Boa tarde!";
      } else {
        this.greeting = "Boa noite!";
      }

      this.formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    } else {
      this.greeting = "Formato inválido! Por favor, digite no formato HH:MM.";
      this.formattedTime = '';
    }
  }
}
