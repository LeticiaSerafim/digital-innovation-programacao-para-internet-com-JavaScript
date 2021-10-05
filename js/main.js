var nome = "Letícia Serafim"; //Js já entende que é uma string
var age = 20;
var age2 = 10;
var frase = "Japão é o melhor time do mundo"
// alert(nome + " tem " + age);
//alert(age + age2)
console.log(nome);
console.log(age + age2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"))
console.log(frase.toUpperCase()); // String.toLowerCase();


//Array

var lista = ["Maça", "Pêra", "Laranja"];
lista.push("Uva"); //adiciona um elemento no array
console.log(lista);
lista.pop(); //retira o ultimo elemento do array
console.log(lista);
console.log(lista[1]);

console.log(lista.length) // para verificar o tamanho do array
console.log(lista.reverse()) // inverte a ordem dos elementos dentro do array
console.log(lista.toString()); // Transforma em string
console.log(lista.join(" - ")); // Coloca o que você quer que separe cada item do array

// dicionário

var fruta = {nome:"Maça", cor:"Vermelha"};
console.log(fruta);
console.log(fruta.nome);


var frutas = [{nome:"Maça", cor:"Vermelha"}, {nome:"Uva", cor:"Roxa"}]
console.log(frutas);
console.log(frutas[1].nome)

/**   Condicionais, laços de repetição e Date
var age3 = prompt("Qual sua idade");
if (age3 >= 18){
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
};
*/

var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}

console.log("Aqui inicia o for");
var num;
for(num=0; num <= 5; num++){
    console.log(num);
};

console.log("Aqui começa a parte de data");

var d = new Date();
console.log(d);

console.log(d.getMonth()+1); // o mês começa a contar do zero, então é preciso colocar o +1
console.log(d.getDay()); // retorna dia da semana - 0 pra domingo 
console.log(d.getDate()); // dia do mês
console.log(d.getMinutes()); // minutos
console.log(d.getMilliseconds()); 

