// items

const items = [
    {
        id: 0,
        name: 'camiseta',
        image: './img.png',
        quantity: 0
    },
    {
        id: 1,
        name: 'sapato',
        image: './img.png',
        quantity: 0
    },
    {
        id: 2,
        name: 'calça',
        image: './img.png',
        quantity: 0
    },

]

// iniciar a loja

inicializeStore = () => {
    let containerProducts = document.getElementById('produtos');
    items.map((val) => {
        //colocar os itens na loja
        containerProducts.innerHTML+= `
            <div class="product-single">
                <img src="`+val.image+`" />
                <p>`+val.name+`</p>
                <a key="`+val.id+`" href="#">Adicionar ao carrinho</a>
            </div>
        `;
    })
}

inicializeStore();


//colocar items no carrinho

updateCart = () => {
    console.log(items)
}

let links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(){
        let key = this.getAttribute('key');
        items[key].quantity++;
        updateCart();
        return false;

    })
}