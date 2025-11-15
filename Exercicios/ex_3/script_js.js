function contar(){

    //pegando as variaveis globais para utilizar no programa
    var inic=document.getElementById('texto1')
    var fim=document.getElementById('texto2')
    var passo = document.getElementById('texto3')

    var resposta =document.getElementById('resposta')

    //um logico para verificar se estão vazio os compos que é para colocar valorers
    if(inic.value.length ==0 ||fim.value.length==0||passo.value.length==0){
        resposta,innerHTML=' '
        window.alert('ERRO! Coloque algum número')
        
    } else {
        //se tudo der certo ele substitui por contantdo
        resposta.innerHTML ='Contando:<br>'

        //define as varias para numeros
        let i =Number(inic.value)
        let f=Number(fim.value)
        let p=Number(passo.value)

        //o loop para ficar contando 
        if (i<f){
            for(let c=i;c<=f;c+=p) { //vai ganhando numero
            resposta.innerHTML+= `${c} \u{1FAE1} ` //\u{1FAE1} coloca um emoji 
        }
        } else{
            for(let c=i;c>=f;c-=p) { //vai perdendo numeros
            resposta.innerHTML+= `${c} \u{1FAE1} ` //\u{1FAE1} coloca um emoji 
        }
        
    }
    resposta.innerText+='TERMINOU' // o '+' é de adicionar masi um elemnto n o divisor
}
}