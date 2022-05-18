/* Inicio do Script*/

var n1 = 10
var n2 = 15

console.log("1°Número: " + n1)
console.log("2°Número: " + n2)

var somaFuncao = require("./function")
var subtrairFuncao = require("./function2")
var multiplicarFuncao = require("./function3")
var dividirFuncao = require("./function4")

console.log("Soma: " + somaFuncao(n1,n2))
console.log("Subtrair: " + subtrairFuncao(n1,n2))
console.log("Multiplicar: " + multiplicarFuncao(n1,n2))
console.log("Dividir: " + dividirFuncao(n1,n2))
/* Fim do Script */