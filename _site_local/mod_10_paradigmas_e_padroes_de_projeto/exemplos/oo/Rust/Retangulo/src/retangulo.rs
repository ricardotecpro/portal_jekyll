// retangulo.rs

// Definindo a estrutura Retangulo
pub struct Retangulo {
    largura: f64,
    altura: f64,
}

impl Retangulo {
    // Função para criar um novo Retângulo
    pub fn new(largura: f64, altura: f64) -> Retangulo {
        Retangulo { largura, altura }
    }

    // Método para calcular a área do retângulo
    pub fn calcular_area(&self) -> f64 {
        self.largura * self.altura
    }

    // Método para exibir as informações do retângulo
    pub fn exibir_informacoes(&self) {
        println!("Largura: {:.2} m", self.largura);
        println!("Altura: {:.2} m", self.altura);
        println!("Área: {:.2} m²", self.calcular_area());
    }

    // Método para comparar a área de dois retângulos
    pub fn comparar_area(&self, outro_retangulo: &Retangulo) {
        let area_atual = self.calcular_area();
        let area_outro = outro_retangulo.calcular_area();

        if area_atual > area_outro {
            println!(
                "O Retângulo X (Área: {:.2} m²) tem uma área maior que o Retângulo Y (Área: {:.2} m²).",
                area_atual, area_outro
            );
        } else if area_atual < area_outro {
            println!(
                "O Retângulo Y (Área: {:.2} m²) tem uma área maior que o Retângulo X (Área: {:.2} m²).",
                area_outro, area_atual
            );
        } else {
            println!(
                "O Retângulo X (Área: {:.2} m²) e o Retângulo Y (Área: {:.2} m²) têm a mesma área.",
                area_atual, area_outro
            );
        }
    }
}
