import 'package:flutter/material.dart';
import 'package:http:/http.dart' as htpp;

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'App dos correios',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Consultar de CEP'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              ElevatedButton(
                onPressed: () {
                  _consultarCep();
                },
                child: Text('Consultar CEP'),
              )
            ],
          ),
        ),
      ),
    );
  }

  _consultarCep() async {
    final response = await htpp.get(Uri.parse(
        'https://viacep.com.br/ws/14900000/json/' //substituir o valor pelo cep desejado
        ));

    if (response.statusCode == 200)
      print(response
          .body); //se a soicitacao for bem sucedida, exiba os dados da resposta
    else
      print('Falha ao consultar CEP'); // se a solicitação falhar, exiba um erro
  }
}
