import sys
from PyQt5.QtWidgets import QApplication, QWidget, QLabel, QLineEdit, QPushButton, QVBoxLayout, QMessageBox
from PyQt5.QtCore import Qt
import re

class GreetingApp(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.setWindowTitle('Saudação de Hora do Dia')
        self.setGeometry(100, 100, 400, 200)

        layout = QVBoxLayout()

        self.label = QLabel('Digite uma hora (HH:MM):')
        layout.addWidget(self.label)

        self.entry = QLineEdit()
        self.entry.returnPressed.connect(self.verificarHoraEnter)  # Conectar ao evento de pressionar Enter
        layout.addWidget(self.entry)

        self.button = QPushButton('Verificar')
        self.button.clicked.connect(self.verificarHora)
        layout.addWidget(self.button)

        self.resultLabel = QLabel()
        layout.addWidget(self.resultLabel)

        self.setLayout(layout)

    def verificarHora(self):
        input_time = self.entry.text().strip()
        self.processarHora(input_time)

    def verificarHoraEnter(self):
        input_time = self.entry.text().strip()
        self.processarHora(input_time)

    def processarHora(self, input_time):
        pattern = re.compile(r'^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$')

        if not pattern.match(input_time):
            QMessageBox.warning(self, 'Formato inválido', 'Formato inválido! Por favor, digite no formato HH:MM.')
            return

        hour, minute = map(int, input_time.split(':'))

        if hour < 6:
            message = "Boa madrugada!"
        elif hour < 12:
            message = "Bom dia!"
        elif hour < 18:
            message = "Boa tarde!"
        else:
            message = "Boa noite!"

        self.resultLabel.setText(f"<font size=5 color='blue'>{message} Você digitou: {input_time}</font>")
        self.entry.clear()  # Limpar o campo de entrada após processar

if __name__ == '__main__':
    app = QApplication(sys.argv)
    app.setStyle('Fusion')  # Definir o estilo Fusion para melhorar o visual (opcional)

    window = GreetingApp()
    window.show()
    sys.exit(app.exec_())
