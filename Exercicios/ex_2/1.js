function verificador(){
    //primeiro pegar a data atual
    var data= new Date()
    var ano_atual = data.getFullYear()

    //vamos pegar as variaveis e armazena
    var ano=window.document.getElementById('textodoano')
    var sexo=window.document.getElementsByName('rad_sexo')
    var resposta =window.document.getElementById('res')

    //logica
    if(ano.value.length ==0 || Number(ano.value)> ano_atual){
        window.alert(`Ano invalido${resposta}`)
    }
    else{
        var resultad = ano_atual - Number(ano.value)
        if(sexo[0].checked){
            genero='Homen'
        } else if (sexo[1].checked)
            genero='Mulher'
    }
    resposta.innerHTML= `Sua idade é ${resultad} e você é ${genero}`

}