//AQUI 1° É VERIFICADO E DEPOIS O CODIGO EXECUTA

// A pizza tem 5 fatias para começar
let fatias = 50; //mesma coisa que o var

// Função principal que "come" a pizza
function comerPizza() {
    
    // O loop continua while o número de fatias for maior que zero
    while (fatias > 0) {
        
        // 1. Simula a ação
        console.log(`Comendo a fatia número ${fatias}... `);

        // 2. Diminui o número de fatias restantes
        fatias --; //fatias = fatias - 1 
    }
    
    // só é executa quando fatias for igual a 0
    console.log("✅ Fim da pizza! Não há mais fatias.");
}

// Chamada para iniciar o processo
comerPizza();

//-------------------------------------------------------------------------------------------------//

//AQUI 1° EXECUTA O CODIGO E DEPOIS VERIFICAR
let fatiass = 50; //mesma coisa que o var

// Função principal que "come" a pizza
function comePizza() {
    
    // O loop continua while o número de fatias for maior que zero
    do {
        
        // 1. Simula a ação
        console.log(`Comendo a fatia número ${fatiass}... `);

        // 2. Diminui o número de fatias restantes
        fatiass --; //fatias = fatias - 1 
    } while (fatiass > 0)
    
    // só é executa quando fatias for igual a 0
    console.log("✅ Fim da pizza! Não há mais fatias.");
}

// Chamada para iniciar o processo
comePizza();

/*
while	Verificação de fila,     Você precisa que o loop seja totalmente ignorado
        leitura de dados,        se a condição inicial for falsa.
        espera por condição.	 


do...while  Solicitação de entrada do usuário, 
            menus interativos,
            onde a ação deve sempre ser feita.

Você precisa garantir que o código seja executado pelo menos uma vez,
 antes de verificar a condição.*/