use gtk::prelude::*;
use gtk::{Application, ApplicationWindow, Button, Entry, Label, Orientation};
use chrono::NaiveTime;

fn main() {
    // Cria uma nova aplicação GTK
    let app = Application::new(
        Some("com.example.saudacao"),
        Default::default(),
    );

    // Conecta o sinal 'activate' à função que inicializa a interface
    app.connect_activate(build_ui);

    // Executa a aplicação
    app.run();
}

fn build_ui(app: &Application) {
    // Cria uma nova janela de aplicação
    let window = ApplicationWindow::new(app);
    window.set_title("Saudação de acordo com a hora do dia");
    window.set_default_size(300, 200);

    // Cria um container vertical para os widgets
    let vbox = gtk::Box::new(Orientation::Vertical, 10);
    vbox.set_margin_top(20);
    vbox.set_margin_bottom(20);
    vbox.set_margin_start(20);
    vbox.set_margin_end(20);

    // Cria um label de instrução
    let instruction_label = Label::new(Some("Digite uma hora do dia (formato HH:MM):"));
    vbox.pack_start(&instruction_label, false, false, 0);

    // Cria um campo de entrada para o horário
    let time_entry = Entry::new();
    vbox.pack_start(&time_entry, false, false, 0);

    // Cria um botão de submissão
    let submit_button = Button::with_label("Enviar");
    vbox.pack_start(&submit_button, false, false, 0);

    // Cria um label para exibir o resultado
    let result_label = Label::new(None);
    vbox.pack_start(&result_label, false, false, 0);

    // Adiciona o container à janela
    window.add(&vbox);

    // Conecta o sinal de clique do botão à função de processamento do horário
    submit_button.connect_clicked(clone!(@weak time_entry, @weak result_label => move |_| {
        process_time(&time_entry, &result_label);
    }));

    // Conecta o sinal de pressionar a tecla Enter no campo de entrada à função de processamento do horário
    time_entry.connect_activate(clone!(@weak time_entry, @weak result_label => move |_| {
        process_time(&time_entry, &result_label);
    }));

    // Mostra todos os widgets da janela
    window.show_all();
}

fn process_time(time_entry: &Entry, result_label: &Label) {
    let input_time = time_entry.text().to_string();

    match NaiveTime::parse_from_str(&input_time, "%H:%M") {
        Ok(time) => {
            let hour = time.hour();
            let greeting = if hour < 6 {
                "Boa madrugada!"
            } else if hour < 12 {
                "Bom dia!"
            } else if hour < 18 {
                "Boa tarde!"
            } else {
                "Boa noite!"
            };
            result_label.set_text(&format!("{} Você digitou: {:02}:{:02}", greeting, time.hour(), time.minute()));
        },
        Err(_) => {
            result_label.set_text("Formato inválido! Por favor, digite no formato HH:MM.");
        }
    }
}
