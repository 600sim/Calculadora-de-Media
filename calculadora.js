var nome = "Lucas"
console.log ("Bem vindo " + nome)

var notaDoPrimeiroBimestre = 6.2
var notaDoSegundoBimestre = 7.5
var notaDoTerceiroBimestre = 4.3
var notaDoQuartoBimestre = 9.1

var media = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFinal = media.toFixed(1)
var media = media.toFixed(2)

var result = "";
if (notaFinal >=6) result = "Aprovado"
else result = "Reprovado"

console.log ("Sua Nota Final é " + notaFinal)
console.log ("Sua Média foi " + media)
console.log ("Você está " + result) 

document.getElementById("result").innerHTML = "Você está " + result
document.getElementById("notaFinal").innerHTML = "Sua nota Final é " + notaFinal