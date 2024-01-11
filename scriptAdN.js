var numeros = []
var maior = 0
var menor = 100
var soma = 0
var media = 0

function Confirmar() {

var n = document.getElementById('numero_digitado')
var numero = Number(n.value)
var sel = document.getElementById('numeros')


    if (numeros.length >= 10) {

        alert ('Você já digitou o máximo de números possiveis')


     } else {

        if (numero > 100 && numero < 0) {
            alert("Digite um número entre 0 e 100!")

        } else {


        numeros.push (numero)
        var item = document.createElement ('option')
        item.text = `Valor ${numero} adicionado!`
        sel.appendChild (item)
        n.value = ''

        if (numero > maior) { maior = numero }
        if (numero < menor) { menor = numero }

    }

     //Res.innerText = (`Os numeros digitados são ${numeros} o maior é ${maior} o menor é ${menor}`)
}}

 function Finalizar() {

    var resultado = document.getElementById ('Res')
    var tamanho = numeros.length

   function somar(){

        for ( var cont = 0; cont < numeros.length; cont ++) {
        soma = soma + numeros[cont]
        

    } return soma}



    function tiraMedia(){
        mediaCalculada = soma / tamanho

        return mediaCalculada
    }


resultado.innerText =  `Foram digitados ${tamanho} números\n` +
                       `O maior valor digitado foi ${maior}\n` +
                       `O menor valor digitado foi ${menor}\n` +
                       `A soma de todos os valores é de ${somar()}\n` +
                       `A média entre os valores é de ${tiraMedia()}` }

 
 






  
