use std::io;
use std::f64;

fn main() {
    // Entrada de dados
    println!("Digite a base do retângulo:");
    let base = ler_entrada();

    println!("Digite a altura do retângulo:");
    let altura = ler_entrada();

    // Cálculos
    let area = base * altura;
    let perimetro = 2.0 * (base + altura);
    let diagonal = (base.powi(2) + altura.powi(2)).sqrt(); // Teorema de Pitágoras

    // Saída com quatro casas decimais
    println!("Área = {:.4}", area);
    println!("Perímetro = {:.4}", perimetro);
    println!("Diagonal = {:.4}", diagonal);
}

// Função para ler a entrada e convertê-la em um número de ponto flutuante (f64)
fn ler_entrada() -> f64 {
    let mut entrada = String::new();
    io::stdin().read_line(&mut entrada).expect("Falha ao ler a entrada");
    entrada.trim().parse::<f64>().expect("Por favor, insira um número válido")
}
