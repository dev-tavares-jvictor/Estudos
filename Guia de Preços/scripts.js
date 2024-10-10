const searchForm = document.querySelector('.search-form');
const productList = document.querySelector('.product-list');

searchForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const inputValue = event.target[0].value;

    const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inputValue}`);
    const products = (await data.json()).results.slice(0, 32); // Obtém os 10 primeiros produtos

    displayItems(products); // Exibe os produtos
});

function displayItems(products) {
    console.log(products);
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.title}"> 
            <p>${product.title}</p>
            <p>Preço: R$${product.price}</p>
        </div>
    `).join(''); // Usar join para evitar a vírgula que o map adiciona por padrão
}
