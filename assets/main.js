// const API = 'https://pizzaallapala.p.rapidapi.com/productos';
// const Info = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '519560373amsh1dba5ccfe85677cp1d6e0ajsn80f7566b8071',
// 		'x-rapidapi-host': 'pizzaallapala.p.rapidapi.com'
// 	}
// };

// const containerPizza = document.querySelector('.pizza--container');

// async function fetchData(url){
// 	const response = await fetch(url, Info);
// 	const result = await response.json();
// 	return result;
// }

// (async () => {
// 	try{
// 		const products = await fetchData(API)
// 		let viewProducts = `${products.productos.map((product)=>{
// 			`<div class="pizza">
// 				<figure>
// 					<img src="${product.linkImagen}" alt="${product.descripcion}">
// 				</figure>
// 				<div class="pizza--price">
// 					<h4>${product.nombre}</h4>
// 					<p>$${product.precio}</p>
// 				</div>
// 			 </div>`
// 		}).slice(0, 10).join('')}`;
// 		containerPizza.innerHTML = viewProducts;
// 	}
// 	catch(error){
// 		console.log(error);
// 	}

// })();

const API = 'https://all-books-api.p.rapidapi.com/getBooks';
const Info = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '519560373amsh1dba5ccfe85677cp1d6e0ajsn80f7566b8071',
		'x-rapidapi-host': 'all-books-api.p.rapidapi.com'
    }
};

const containerPizza = document.querySelector('.pizza--container');

async function fetchData(url) {
    const response = await fetch(url, Info);
    const result = await response.json();
    return result;
}

(async () => {
    try {
        let products = JSON.parse(localStorage.getItem('products'));

        if (!products) {
            products = await fetchData(API);
            localStorage.setItem('products', JSON.stringify(products));
        }
        let viewProducts = products.slice(0, 11).map(product => `
            <div class="pizza">
                <figure>
                    <img src="${product.bookImage}" alt="${product.bookDescription}">
                </figure>
                <div class="pizza--price">
                    <h4>${product.bookTitle}</h4>
                </div>
            </div>
        `).join('');
        containerPizza.innerHTML = viewProducts;
    } catch (error) {
        console.log(error);
    }
})();

