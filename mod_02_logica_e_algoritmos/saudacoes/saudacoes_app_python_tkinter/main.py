import tkinter as tk
from tkinter import messagebox
from datetime import datetime

def process_time():
    input_time = time_entry.get().strip()

    try:
        time = datetime.strptime(input_time, "%H:%M")
        hour = time.hour
        minute = time.minute

        if hour < 6:
            greeting = "Boa madrugada!"
        elif hour < 12:
            greeting = "Bom dia!"
        elif hour < 18:
            greeting = "Boa tarde!"
        else:
            greeting = "Boa noite!"

        result_label.config(text=f"{greeting}\nVocê digitou: {hour:02d}:{minute:02d}")
    except ValueError:
        messagebox.showerror("Erro", "Formato inválido! Por favor, digite no formato HH:MM.")

def main():
    global time_entry, result_label

    # Configuração da janela principal
    root = tk.Tk()
    root.title("Saudação de acordo com a hora do dia")

    # Label de instrução
    instruction_label = tk.Label(root, text="Digite uma hora do dia (formato HH:MM):")
    instruction_label.pack(pady=10)

    # Campo de entrada
    time_entry = tk.Entry(root)
    time_entry.pack(pady=5)

    # Botão de submissão
    submit_button = tk.Button(root, text="Enviar", command=process_time)
    submit_button.pack(pady=5)

    # Label de resultado
    result_label = tk.Label(root, text="")
    result_label.pack(pady=10)

    # Configuração do evento Enter
    root.bind('<Return>', lambda event: process_time())

    # Iniciar o loop principal da interface gráfica
    root.mainloop()

if __name__ == "__main__":
    main()
