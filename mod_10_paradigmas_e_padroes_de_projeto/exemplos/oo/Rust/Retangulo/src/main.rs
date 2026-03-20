// main.rs

mod retangulo; // Importa o módulo retangulo

use std::io;

fn main() {
    let mut largura_x = String::new();
    let mut altura_x = String::new();
    let mut largura_y = String::new();
    let mut altura_y = String::new();

    // Solicitando as medidas do Retângulo X
    println!("Digite a largura do Retângulo X em metros:");
    io::stdin().read_line(&mut largura_x).expect("Falha ao ler entrada");
    let largura_x: f64 = largura_x.trim().parse().expect("Por favor, insira um número válido");

    println!("Digite a altura do Retângulo X em metros:");
    io::stdin().read_line(&mut altura_x).expect("Falha ao ler entrada");
    let altura_x: f64 = altura_x.trim().parse().expect("Por favor, insira um número válido");

    // Solicitando as medidas do Retângulo Y
    println!("Digite a largura do Retângulo Y em metros:");
    io::stdin().read_line(&mut largura_y).expect("Falha ao ler entrada");
    let largura_y: f64 = largura_y.trim().parse().expect("Por favor, insira um número válido");

    println!("Digite a altura do Retângulo Y em metros:");
    io::stdin().read_line(&mut altura_y).expect("Falha ao ler entrada");
    let altura_y: f64 = altura_y.trim().parse().expect("Por favor, insira um número válido");

    // Criando os objetos Retângulo X e Retângulo Y
    let retangulo_x = retangulo::Retangulo::new(largura_x, altura_x);
    let retangulo_y = retangulo::Retangulo::new(largura_y, altura_y);

    // Exibindo as informações dos dois retângulos
    println!("\nInformações do Retângulo X:");
    retangulo_x.exibir_informacoes();

    println!("\nInformações do Retângulo Y:");
    retangulo_y.exibir_informacoes();

    // Comparando as áreas dos dois retângulos
    println!("\nComparando as áreas dos retângulos:");
    retangulo_x.comparar_area(&retangulo_y);
}
