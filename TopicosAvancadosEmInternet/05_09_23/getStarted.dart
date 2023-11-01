void main() {
  //Variáveis
  
  int idade = 30;
  String nome = 'Jonatã'; 
  bool cadastrado = false;
  double altura = 1.65;
  List <int> notas = [10, 8, 7, 6];
  List dados = [10, 'joão', 20];
  const double pi = 3.14;
  
  print('Idade: $idade');
  print('Nome: $nome');
  print('Situação cadastral: $cadastrado');
  print('a altura é: $altura');
  print('primero elemento do array de inteiros: ');
  print(notas[0]);
  print('O valor de pi é $pi');
  
    
  //Operadores matemáticos
  double valor1, valor2, resultado;
  valor1 = 20;
  valor2 = 30.4;
  
  // soma
  resultado = valor1 + valor2;
  print('o resultado da soma é: $resultado');
  
  //subtração
  resultado = valor1 - valor2;
  print('o resultado da subtração é: $resultado');
  
  //Multiplicação
  resultado = valor1 * valor2;
  print('o resultado da multiplicação é: $resultado');
  
  // divisão
  resultado = valor1 / valor2;
  print('o resultado da divisão é: $resultado');
  
    // Estruturas condicionais
  int nota = 5;
  
  if (nota >=6)
    print('Aprovado');
  else
    print('Reprovado');
  
  
  String idioma = "";
  
  switch (idioma)
  {
    case  "PT" :
        print('O idioma escolhido português');
      break;
      
    case  "EN":
        print('O idioma escolhido é inglês');
      break;
      
    case "ES" :
      print('O Idioma escolhido é espanhol');
      
   default :
      print ('Idioma não disponível');
      
  }
    
   //Estruturas de repetição 
  
  for(int i =1; i<=10; i++)
    print('Rodada: $i');
 
  //tabuada do 9
    int mt = 9;
    int res;
  for (int i=1; i<=10; i++){
    res = i * mt;
    print('$i x $mt = $res');
    }
  
    int i = 1;
  
  while (i <= 10){
    print('Estudar sempre faz bem!');
  i++;
}

  //do while
  
  int j = 0;
  do
  {
    print ('Erra é humano $j');
    j++;
  }while (j<10);



    //funções
  
  
  //sem parâmetros
  void escreverMensagem(){
    print('mensagem Cadastrada');
  }
  
  escreverMensagem();
}

  //Função com parâmetro e retorno
  
  double calculoMedia(double n1, double n2){
   double resultado = (n1 + n2)/ 2;
    return resultado;
  }
  print(calculoMedia(8.8, 9.4));

  //crie uma funçao que calcule a área de um triângulo
// Base x Altura / 2
  double areaTriangulo(double base, double altura){

  double area = (base * altura) /2;
  return area;
}

print(areaTriangulo(10, 10));

}


  
}