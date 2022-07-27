const c = (el)=> document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);
    //alteração realizada visando um código mais limpo, removendo a necessidade de atribuir "document.queryselector" 
    //o tempo inteiro.


pizzaJson.map((item, index) =>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true); 
    // Preencher as informações em pizzaitem
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
        pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
        pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
        pizzaItem.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault();
            c('.pizzaWindowArea').style.opacity = 0;
            c('.pizzaWindowArea').style.display = 'flex';
            setTimeout(() => {
                c('.pizzaWindowArea').style.opacity = 1;
            }, 200);
        });

    c('.pizza-area').append( pizzaItem ); 
    //append adiciona um novo valor dentro de uma chave existente
});