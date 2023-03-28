


let userNum1 = document.getElementById('num1')
let userNum2 = document.getElementById('num2')
let userOperador = document.getElementById('operador')
let calcular = document.getElementById('calcular')
let resultado = document.getElementById('resultado')

calcular.addEventListener('click', function () {
    let num1 = Number(userNum1.value)
    let num2 = Number(userNum2.value)
    let operacao = userOperador.value
    let result

    switch (operacao) {
        case '+':
            result = num1 + num2
            break
            case '-':
            result = num1 - num2
            break
            case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break
        default:
            result = 'Operação Inválida'
            break;
    }


    resultado.innerHTML = 'O Resultado é ' + result
})
