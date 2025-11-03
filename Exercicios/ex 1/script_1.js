function carregar(){
    var msg = window.document.getElementById('mensagem')
    var img=window.document.getElementById('imagem1')
    var data = new Date() //para pegar a a hora,dia e afins
    
    var hora = data.getHours() //agora pega em especifico a hora
    
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'fotodemanha.jpg'
        document.body.style.backgroundColor='#17349277'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'fotodetarde.jpg'
        document.body.style.backgroundColor='#ffff00'

    } else {
        // BOA NOITE
        img.src = 'fotodenoite.jpg'
        document.body.style.backgroundColor='#000000'

    }
}