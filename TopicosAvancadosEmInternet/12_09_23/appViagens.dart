import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Scaffold(
            appBar: AppBar(title: Text('App Viagens')),
            body: Column(
              children: <Widget>[
                Image(image: AssetImage('images/ponta-negra.jpeg')),
                Container(
                    padding: EdgeInsets.all(20),
                    child: Row(
                      children: [
                        Expanded(
                            child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                              Text('Praia de Ponta Negra',
                                  style: TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.bold,
                                      color: Colors.black)),
                              Text('Rio Grande do Norte - RN',
                                  style: TextStyle(
                                      fontSize: 16, color: Colors.grey))
                            ])),
                        Row(children: [
                          Icon(Icons.star, color: Colors.yellow),
                          Text('Mais visto hoje')
                        ]),
                      ],
                    )),
                Container(
                    padding: EdgeInsets.all(20),
                    child: Row(children: [
                      Expanded(
                          child: TextButton(
                              onPressed: () {},
                              child: Column(children: [
                                Icon(Icons.call, color: Colors.blue),
                                Text('Ligar')
                              ]))),
                      Expanded(
                          child: TextButton(
                              onPressed: () {},
                              child: Column(children: [
                                Icon(Icons.location_on, color: Colors.blue),
                                Text('Mapa')
                              ]))),
                      Expanded(
                          child: TextButton(
                              onPressed: () {},
                              child: Column(children: [
                                Icon(Icons.share, color: Colors.blue),
                                Text('Compartilhar')
                              ])))
                    ])),
                Container(
                    padding: EdgeInsets.all(20),
                    child: Text(
                        'A Praia de Ponta Negra é uma praia localizada no bairro de mesmo nome em Natal, capital do estado brasileiro do Rio Grande do Norte.'))
              ],
            )));
  }
}
