import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Saudações',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: GreetingsPage(),
    );
  }
}

class GreetingsPage extends StatefulWidget {
  @override
  _GreetingsPageState createState() => _GreetingsPageState();
}

class _GreetingsPageState extends State<GreetingsPage> {
  final TextEditingController _controller = TextEditingController();
  String _greeting = '';
  String _formattedTime = '';

  void _submitTime() {
    final timeRegex = RegExp(r'^([01]?[0-9]|2[0-3]):([0-5][0-9])$');
    final inputValue = _controller.text.trim();

    if (timeRegex.hasMatch(inputValue)) {
      final parts = inputValue.split(':');
      final hour = int.parse(parts[0]);
      final minute = int.parse(parts[1]);

      if (hour < 6) {
        _greeting = "Boa madrugada!";
      } else if (hour < 12) {
        _greeting = "Bom dia!";
      } else if (hour < 18) {
        _greeting = "Boa tarde!";
      } else {
        _greeting = "Boa noite!";
      }

      _formattedTime = 'Você digitou: ${hour.toString().padLeft(2, '0')}:${minute.toString().padLeft(2, '0')}';
    } else {
      _greeting = "Formato inválido! Por favor, digite no formato HH:MM.";
      _formattedTime = '';
    }

    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Saudações'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Digite uma hora do dia (formato HH:MM):',
              style: TextStyle(fontSize: 18),
            ),
            SizedBox(height: 10),
            TextField(
              controller: _controller,
              decoration: InputDecoration(
                border: OutlineInputBorder(),
                hintText: 'HH:MM',
              ),
              keyboardType: TextInputType.datetime,
              onSubmitted: (_) => _submitTime(),
            ),
            SizedBox(height: 10),
            ElevatedButton(
              onPressed: _submitTime,
              child: Text('Enviar'),
            ),
            SizedBox(height: 20),
            if (_greeting.isNotEmpty) ...[
              Text(
                _greeting,
                style: TextStyle(fontSize: 18, color: Colors.green),
              ),
              if (_formattedTime.isNotEmpty)
                Text(
                  _formattedTime,
                  style: TextStyle(fontSize: 18, color: Colors.grey),
                ),
            ],
          ],
        ),
      ),
    );
  }
}
