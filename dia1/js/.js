/*promp utilizado para atribuir função*/
var valorEmEuro = prompt("Qual o valor em euro você deseja converter?")
/*CamelCase denominação em inglês para a prática de escrever as palavras compostas ou frases, onde cada palavra é iniciada com maiúsculas e unidas sem espaços.*/

var valorEmEuro = parseFloat(valorEmEuro)
/*parseInt = Valores inteiros / parseFloat = Valores decimais*/

var valorEmReal = valorEmEuro * 6.50
var valorEmRealDecimal = valorEmReal.toFixed(2)
/*toFixed determina o número de casas decimais*/

alert (valorEmRealDecimal)