---
layout: default
title: 📅 Trabalhando com Datas em Java
---

# 📅 Trabalhando com Datas em Java

Este material aborda como manipular datas e horas em Java, focando nas classes mais antigas (`Date`, `SimpleDateFormat`, `Calendar`) e introduzindo brevemente o `Instant` do pacote `java.time` (embora as classes mais antigas sejam o foco principal do PDF original).

## 🕰️ A Classe `Date`

A classe `java.util.Date` representa um instante específico no tempo, com precisão de milissegundos.

* **Pacote:** `java.util`
* **Armazenamento Interno:** Um objeto `Date` armazena o número de milissegundos que se passaram desde a meia-noite de 1º de janeiro de 1970 GMT (UTC).
    * **GMT:** Greenwich Mean Time (fuso horário).
    * **UTC:** Coordinated Universal Time (padrão de tempo).

Embora `Date` seja fundamental, muitas de suas funcionalidades, especialmente para manipulação e obtenção de componentes de data (dia, mês, ano), foram depreciadas em favor da classe `Calendar` ou das classes mais modernas do pacote `java.time` (introduzidas no Java 8).

**Exemplo Básico:**
Para obter a data e hora atuais:
```java
import java.util.Date;

public class ExemploDate {
    public static void main(String[] args) {
        Date agora = new Date();
        System.out.println(agora); // Imprime a data e hora atuais
    }
}
```

## 📄 Formatação com `SimpleDateFormat`

A classe `java.text.SimpleDateFormat` é usada para formatar e analisar (converter de String para Date) datas de acordo com um padrão específico.

* Permite definir formatos para conversão entre `Date` e `String`.
* **Exemplos de Padrões:**
    * `dd/MM/yyyy` → `23/07/2018`
    * `dd/MM/yyyy HH:mm:ss` → `23/07/2018 15:42:07`

**Observação Importante:** `SimpleDateFormat` não é thread-safe. Se você precisar usá-lo em um ambiente concorrente, precisará de sincronização externa ou usar uma instância por thread. Para novos projetos, é altamente recomendável usar as classes do pacote `java.time` (como `DateTimeFormatter`), que são imutáveis e thread-safe.

**Exemplo de Formatação:**
```java
import java.util.Date;
import java.text.SimpleDateFormat;
import java.text.ParseException;

public class ExemploSimpleDateFormat {
    public static void main(String[] args) {
        Date agora = new Date();

        SimpleDateFormat formatadorBarra = new SimpleDateFormat("dd/MM/yyyy");
        String dataFormatadaBarra = formatadorBarra.format(agora);
        System.out.println("Data formatada (dd/MM/yyyy): " + dataFormatadaBarra);

        SimpleDateFormat formatadorCompleto = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        String dataFormatadaCompleta = formatadorCompleto.format(agora);
        System.out.println("Data e hora formatadas (dd/MM/yyyy HH:mm:ss): " + dataFormatadaCompleta);

        // Exemplo de Parse (String para Date)
        String dataString = "10/05/2023";
        try {
            Date dataParseada = formatadorBarra.parse(dataString);
            System.out.println("Data parseada: " + dataParseada);
        } catch (ParseException e) {
            System.err.println("Erro ao parsear a data: " + e.getMessage());
        }
    }
}
```

## 🌍 Padrão ISO 8601 e a Classe `Instant`

O padrão ISO 8601 é um padrão internacional para representação de datas e horas.
* **Formato Comum:** `yyyy-MM-ddTHH:mm:ssZ`
    * `T` é um delimitador que separa a data da hora.
    * `Z` indica que o tempo está em UTC (Zulu time).
* **Exemplo:** `"2018-06-25T15:42:07Z"`

A classe `java.time.Instant` (introduzida no Java 8) representa um ponto instantâneo na linha do tempo, geralmente usado para registrar timestamps de eventos no formato UTC. É uma abordagem mais moderna e robusta para lidar com instantes.

Para converter um `Instant` para um `java.util.Date` (útil para interoperabilidade com código legado):
```java
Date dataConvertida = Date.from(Instant.parse("2018-06-25T15:42:07Z"));
```

### 💻 Demonstração: Criação e Impressão de Datas

O código a seguir demonstra várias maneiras de instanciar e formatar objetos `Date`.

```java
import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.TimeZone;

public class ProgramaDatas {

    public static void main(String[] args) throws ParseException { // Adicionado throws ParseException para simplificar o exemplo

        // Formatadores
        SimpleDateFormat formatadorSimples = new SimpleDateFormat("dd/MM/yyyy");
        SimpleDateFormat formatadorCompleto = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        SimpleDateFormat formatadorCompletoGMT = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        formatadorCompletoGMT.setTimeZone(TimeZone.getTimeZone("GMT")); // Configura o fuso horário para GMT

        // Instanciando Datas
        Date x1 = new Date(); // Data e hora atuais
        Date x2 = new Date(System.currentTimeMillis()); // Equivalente a new Date()
        Date x3 = new Date(0L); // Representa o início da Época Unix (01/01/1970 00:00:00 GMT)
        Date x4 = new Date(1000L * 60L * 60L * 5L); // 5 horas após a Época Unix

        Date y1 = formatadorSimples.parse("25/06/2018");
        Date y2 = formatadorCompleto.parse("25/06/2018 15:42:07");
        Date y3 = Date.from(Instant.parse("2018-06-25T15:42:07Z")); // Padrão ISO 8601 (UTC)

        System.out.println("--- DATAS NÃO FORMATADAS (toString() padrão) ---");
        System.out.println("x1: " + x1);
        System.out.println("x2: " + x2);
        System.out.println("x3: " + x3);
        System.out.println("x4: " + x4);
        System.out.println("y1: " + y1);
        System.out.println("y2: " + y2);
        System.out.println("y3: " + y3); // Note que y3 será impresso no fuso horário local

        System.out.println("-------------------------------------------------------");
        System.out.println("--- DATAS FORMATADAS (FUSO HORÁRIO LOCAL DA JVM) ---");
        System.out.println("x1: " + formatadorCompleto.format(x1));
        System.out.println("x2: " + formatadorCompleto.format(x2));
        System.out.println("x3: " + formatadorCompleto.format(x3));
        System.out.println("x4: " + formatadorCompleto.format(x4));
        System.out.println("y1: " + formatadorCompleto.format(y1));
        System.out.println("y2: " + formatadorCompleto.format(y2));
        System.out.println("y3: " + formatadorCompleto.format(y3));

        System.out.println("-------------------------------------------------------");
        System.out.println("--- DATAS FORMATADAS (FUSO HORÁRIO GMT) ---");
        System.out.println("x1: " + formatadorCompletoGMT.format(x1));
        System.out.println("x2: " + formatadorCompletoGMT.format(x2));
        System.out.println("x3: " + formatadorCompletoGMT.format(x3)); // Será 01/01/1970 00:00:00
        System.out.println("x4: " + formatadorCompletoGMT.format(x4)); // Será 01/01/1970 05:00:00
        System.out.println("y1: " + formatadorCompletoGMT.format(y1));
        System.out.println("y2: " + formatadorCompletoGMT.format(y2));
        System.out.println("y3: " + formatadorCompletoGMT.format(y3)); // y3 foi criado a partir de um Instant UTC
    }
}
```
**Observações sobre o código:**
* `new Date(0L)` cria uma data que representa o marco zero da contagem de tempo em Java: 01 de janeiro de 1970, 00:00:00 GMT. Ao formatá-lo com o fuso horário local da sua JVM, o horário pode ser diferente (ex: 31/12/1969 21:00:00 se você estiver em GMT-3).
* `Date.from(Instant.parse("...Z"))` cria um `Date` a partir de uma string que já está em UTC. `SimpleDateFormat` sem `setTimeZone` usará o fuso horário padrão da JVM para formatar. Se `setTimeZone(TimeZone.getTimeZone("GMT"))` for usado, ele mostrará o tempo em GMT.

## 🗓️ Manipulando Datas com `Calendar`

A classe `java.util.Calendar` é uma classe abstrata que fornece métodos para converter entre um instante específico no tempo (representado por um `Date`) e um conjunto de campos de calendário como `YEAR` (ano), `MONTH` (mês), `DAY_OF_MONTH` (dia do mês), `HOUR_OF_DAY` (hora do dia), etc. Ela também permite a manipulação desses campos (adição, subtração).

**Importante:** A API `Calendar` é conhecida por ser um pouco complicada e propensa a erros (por exemplo, meses são indexados a partir de 0). Para novos desenvolvimentos, é **fortemente recomendado** usar as classes do pacote `java.time` (como `LocalDateTime`, `ZonedDateTime`, `Period`, `Duration`), que oferecem uma API muito mais intuitiva, imutável e robusta.

### Adicionando Unidades de Tempo

Podemos usar o método `add()` da classe `Calendar` para somar ou subtrair unidades de tempo de uma data.

```java
import java.util.Date;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Calendar;

public class ProgramaManipulacaoCalendar {
    public static void main(String[] args) {
        SimpleDateFormat formatador = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        Date dataInicial = Date.from(Instant.parse("2018-06-25T15:42:07Z"));

        System.out.println("Data original: " + formatador.format(dataInicial));

        Calendar calendario = Calendar.getInstance(); // Obtém uma instância de Calendar
        calendario.setTime(dataInicial); // Configura o Calendar com a data inicial

        // Adicionando 4 horas à data
        calendario.add(Calendar.HOUR_OF_DAY, 4);
        Date dataModificada = calendario.getTime(); // Obtém a nova data do Calendar

        System.out.println("Data após adicionar 4 horas: " + formatador.format(dataModificada));

        // Adicionando 2 dias à data
        calendario.setTime(dataInicial); // Resetar para a data original para um novo cálculo
        calendario.add(Calendar.DAY_OF_MONTH, 2);
        Date dataMaisDoisDias = calendario.getTime();
        System.out.println("Data após adicionar 2 dias: " + formatador.format(dataMaisDoisDias));

        // Subtraindo 1 mês
        calendario.setTime(dataInicial); // Resetar
        calendario.add(Calendar.MONTH, -1); // Subtrai um mês
        Date dataMenosUmMes = calendario.getTime();
        System.out.println("Data após subtrair 1 mês: " + formatador.format(dataMenosUmMes));
    }
}
```

### Obtendo Unidades de Tempo

Podemos usar o método `get()` da classe `Calendar` para extrair componentes específicos de uma data, como o mês, ano, minutos, etc.

```java
import java.util.Date;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Calendar;

public class ProgramaObterUnidadesCalendar {
    public static void main(String[] args) {
        SimpleDateFormat formatador = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        Date dataReferencia = Date.from(Instant.parse("2018-06-25T15:42:07Z"));

        System.out.println("Data de referência: " + formatador.format(dataReferencia));

        Calendar calendario = Calendar.getInstance();
        calendario.setTime(dataReferencia);

        int minutos = calendario.get(Calendar.MINUTE);
        int mes = 1 + calendario.get(Calendar.MONTH); // Mês em Calendar é 0-indexado (Janeiro=0, Fevereiro=1, ...), por isso somamos 1.
        int ano = calendario.get(Calendar.YEAR);
        int diaDaSemana = calendario.get(Calendar.DAY_OF_WEEK); // Domingo=1, Segunda=2, ... Sábado=7

        System.out.println("Minutos: " + minutos);
        System.out.println("Mês: " + mes);
        System.out.println("Ano: " + ano);
        System.out.println("Dia da Semana (1=Domingo, ..., 7=Sábado): " + diaDaSemana);

        // Convertendo dia da semana para nome (exemplo simples)
        String nomeDiaSemana;
        switch (diaDaSemana) {
            case Calendar.SUNDAY: nomeDiaSemana = "Domingo"; break;
            case Calendar.MONDAY: nomeDiaSemana = "Segunda-feira"; break;
            case Calendar.TUESDAY: nomeDiaSemana = "Terça-feira"; break;
            case Calendar.WEDNESDAY: nomeDiaSemana = "Quarta-feira"; break;
            case Calendar.THURSDAY: nomeDiaSemana = "Quinta-feira"; break;
            case Calendar.FRIDAY: nomeDiaSemana = "Sexta-feira"; break;
            case Calendar.SATURDAY: nomeDiaSemana = "Sábado"; break;
            default: nomeDiaSemana = "Desconhecido";
        }
        System.out.println("Nome do Dia da Semana: " + nomeDiaSemana);
    }
}
```
**Lembrete:** A indexação dos meses em `Calendar` começa em 0 (Janeiro é 0, Dezembro é 11). Sempre some 1 ao valor retornado por `cal.get(Calendar.MONTH)` se quiser o número do mês no formato usual (1-12).

## 🚀 Executando os Exemplos (VS Code e IntelliJ IDEA)

Todos os exemplos de código Java fornecidos podem ser executados em qualquer ambiente de desenvolvimento Java padrão, como Visual Studio Code (com o Java Extension Pack) ou IntelliJ IDEA.

**Passos Gerais:**

1.  **Crie um Projeto Java:**
    * **IntelliJ IDEA:** `File` > `New` > `Project...` > Selecione `Java` e um JDK.
    * **VS Code:** Use o comando `Java: Create Java Project...` (Ctrl+Shift+P para abrir a paleta de comandos).

2.  **Crie um Arquivo `.java`:**
    * Dentro do diretório `src` (ou similar) do seu projeto, crie um novo arquivo Java (ex: `ProgramaDatas.java`, `ExemploSimpleDateFormat.java`).

3.  **Copie e Cole o Código:**
    * Copie um dos exemplos de código fornecidos neste documento e cole-o no arquivo `.java` que você criou. Certifique-se de que o nome da classe no arquivo corresponda ao nome do arquivo.

4.  **Execute o Método `main`:**
    * **IntelliJ IDEA:** Clique na seta verde ao lado da declaração do método `main` ou da classe e selecione `Run 'NomeDaClasse.main()'`.
    * **VS Code:** Abra o arquivo Java. Você verá links `Run` e `Debug` acima do método `main`. Clique em `Run`. Alternativamente, clique com o botão direito no editor e escolha `Run Java`.

O output do programa será exibido no console ou terminal integrado da IDE.

---
## 📚

---

### [ricardotecpro.github.io](https://ricardotecpro.github.io/)

