use std::io;
use std::str::FromStr;
use chrono::NaiveTime;
use chrono::Timelike; // Importar Timelike para usar métodos hour() e minute()

fn main() {
    let mut input = String::new();

    println!("Digite uma hora do dia (formato HH:MM): ");
    io::stdin().read_line(&mut input).expect("Falha ao ler a linha");

    let input = input.trim();
    match NaiveTime::from_str(input) {
        Ok(time) => {
            let hour = time.hour();
            let minute = time.minute();

            if hour < 6 {
                println!("Boa madrugada!");
            } else if hour < 12 {
                println!("Bom dia!");
            } else if hour < 18 {
                println!("Boa tarde!");
            } else if hour <= 23 {
                println!("Boa noite!");
            } else {
                println!("Hora inválida!");
            }

            println!("Você digitou: {:02}:{:02}", hour, minute);
        },
        Err(_) => println!("Formato inválido! Por favor, digite no formato HH:MM."),
    }
}
