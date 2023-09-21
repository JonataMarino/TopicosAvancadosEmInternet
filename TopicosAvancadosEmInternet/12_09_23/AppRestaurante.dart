import 'package:flutter/material.dart';

void main() {
  runApp(AppRestaurantes());
}

class AppRestaurantes extends StatelessWidget{

//adicionar array com lista de restaurantes
var restaurantes = [
"Pepe Legal - Comida Mexicana",
"Papa Léguas fast food",
"O cheiro do ralo",
"CEASA só que mais caro",
"Hamburgueria Podrão",
"Dogão do Chico Linguiça"
];

@override
Widget build (BuildContext context){
return MaterialApp(
    home: Scaffold(

      appBar: AppBar(title: Text('Restaurantes')),
      body: ListView.builder(
        itemCount: restaurantes.length,
        itemBuilder: (ctx, index){
          return ListTile(
            leading: Icon(Icons.restaurant),
            title: Text('${restaurantes[index]}'),
            trailing: TextButton(
              onPressed: () => {Text('Abrindo Cardápio')},
              child: Text('Fazer Pedido'),
            ),
          );
        }
      )
    )
);

}

}