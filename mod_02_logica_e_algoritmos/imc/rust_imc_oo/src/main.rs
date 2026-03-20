use std::io;

struct PessoaImc {
    nome: String,
    idade: u32,
    peso: f32,
    altura: f32,
}

impl PessoaImc {
    fn new(nome: String, idade: u32, peso: f32, altura: f32) -> Self {
        PessoaImc { nome, idade, peso, altura }
    }

    fn calcular_imc(&self) -> f32 {
        self.peso / (self.altura * self.altura)
    }

    fn classificacao(&self) -> String {
        let imc = self.calcular_imc();
        if imc < 18.5 {
            String::from("Abaixo do peso")
        } else if imc <= 24.9 {
            String::from("Peso normal")
        } else if imc <= 29.9 {
            String::from("Sobrepeso")
        } else if imc <= 34.9 {
            String::from("Obesidade grau I")
        } else if imc <= 39.9 {
            String::from("Obesidade grau II")
        } else {
            String::from("Obesidade grau III (obesidade mórbida)")
        }
    }

    fn imprimir_info(&self) {
        println!("Nome: {}", self.nome);
        println!("Idade: {}", self.idade);
        println!("Peso: {} kg", self.peso);
        println!("Altura: {} m", self.altura);
        println!("IMC: {:.2}", self.calcular_imc());
        println!("Classificação: {}", self.classificacao());
    }
}

fn main() {
    println!("Digite o nome:");
    let mut nome = String::new();
    io::stdin().read_line(&mut nome).expect("Falha ao ler entrada.");
    let nome = nome.trim().to_string();

    println!("Digite a idade:");
    let mut idade_str = String::new();
    io::stdin().read_line(&mut idade_str).expect("Falha ao ler entrada.");
    let idade: u32 = idade_str.trim().parse().expect("Valor inválido.");

    println!("Digite o peso (em kg):");
    let mut peso_str = String::new();
    io::stdin().read_line(&mut peso_str).expect("Falha ao ler entrada.");
    let peso: f32 = peso_str.trim().parse().expect("Valor inválido.");

    println!("Digite a altura (em metros):");
    let mut altura_str = String::new();
    io::stdin().read_line(&mut altura_str).expect("Falha ao ler entrada.");
    let altura: f32 = altura_str.trim().parse().expect("Valor inválido.");

    let pessoa = PessoaImc::new(nome, idade, peso, altura);

    pessoa.imprimir_info();
}
