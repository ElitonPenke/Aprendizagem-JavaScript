//comandos sequenciais

console.log('Hello word')
var velocidade = 90
console.log(`A VELOCIDADE DO SEU CARRO É ${velocidade} KM/H`)


//comando condicional

if (velocidade > 60) {
    console.log('VOCÊ ULTRAPASSOU A VELOCIDADE PERMITIDA. MULTADO!')
    var multa = (velocidade - 60) * 5
    console.log(`A SUA MULTA É DE R$ ${multa}.`)
} //esse aqui é uma condição simples


//exemplo de codigo de uma condição composta
var pais ='Brasil'
if(pais == 'Brasil'){
    console.log('você é brasileiro')
} else{
    console.log('você é estrangeiro')
}
