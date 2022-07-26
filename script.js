pizzaJson.map((item, index) =>{
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true); 
    // Preencher as informações em pizzaitem
    
    document.querySelector('.pizza-area').append( pizzaItem ); //append adiciona um novo valor dentro de uma chave existente
});