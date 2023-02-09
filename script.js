
let numberOne = prompt("Informe o primeiro valor: ")
let numberTwo = prompt("Informe o segundo valor: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)


const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const rest = numberOne % numberTwo

alert(
    `
    Soma: ${sum}
    Subtração: ${sub}
    Multiplicação: ${mult}
    Divisão: ${div}
    Resto: ${rest}`
    )

if(rest == 0){
    alert(`par`)
}else{
    alert("impar")
}
