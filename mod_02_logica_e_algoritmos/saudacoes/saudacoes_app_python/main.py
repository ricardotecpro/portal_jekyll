from datetime import datetime

def main():
    input_time = input("Digite uma hora do dia (formato HH:MM): ").strip()

    try:
        time = datetime.strptime(input_time, "%H:%M")
        hour = time.hour
        minute = time.minute

        if hour < 6:
            print("Boa madrugada!")
        elif hour < 12:
            print("Bom dia!")
        elif hour < 18:
            print("Boa tarde!")
        else:
            print("Boa noite!")

        print(f"Você digitou: {hour:02d}:{minute:02d}")
    except ValueError:
        print("Formato inválido! Por favor, digite no formato HH:MM.")

if __name__ == "__main__":
    main()
