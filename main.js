var name = prompt("Diga seu nome!")
alert("Bem vindo, "+name+", vou lhe ajudar com algumas continhas básicas...vamos lá?")

var i = 0;

var y = prompt("Escolha, dentre as opções abaixo, a operação que deseja realizar digitando o número correspondente:\n\n1-Multiplicação\n2-Divisão\n3-Exponeciação\n4-Radiciação")

var keep;

while(keep!=false){
if(y==1){
   let m = Number(prompt("Escolha o número a ser multiplicado"))
   let u = Number(prompt("Por qual valor você deseja multiplicar "+m+" ?"))
   alert("O resultado é: "+m*u)
   keep = confirm("Deseja repetir a operação?");
   } 
if(y==2){
   let m = Number(prompt("Escolha o número a ser dividido"))
   let u = Number(prompt("Por qual valor você deseja dividir "+m+" ?"))
   alert("O resultado é: "+m/u)
   keep = confirm("Deseja repetir a operação?");
   }
if(y==3){
   let m = Number(prompt("Escolha o número a ser base"))
   let u = Number(prompt("Por qual valor você deseja elevar "+m+" ?"))
   alert("O resultado é: "+Math.pow(m,u))
   keep = confirm("Deseja repetir a operação?");
   }
if(y==4){
   let m = Number(prompt("Escolha o número a ser base"))
   let u = Number(prompt("Qual raíz você deseja extrair de "+m+" ?"))
   alert("O resultado é: "+Math.sqrt(m,u))
   keep = confirm("Deseja repetir a operação?");
   }
if(y!=1 && y!=2 && y!=3 && y!=4){
    alert("Opção não identificada!")
    y = prompt("Escolha, dentre as opções abaixo, a operação que deseja realizar digitando o número correspondente:\n\n1-Multiplicação\n2-Divisão\n3-Exponeciação\n4-Radiciação")
   }
if(keep==false){
      var r;
      r = confirm("Deseja realizar mais alguma operação?")
      if(r==true){
         y = prompt("Escolha, dentre as opções abaixo, a operação que deseja realizar digitando o número correspondente:\n\n1-Multiplicação\n2-Divisão\n3-Exponeciação\n4-Radiciação")
         keep = true
      } else {
         document.write("Com carinho... De Matheus para "+name+"<br>")
      }
   }
}


