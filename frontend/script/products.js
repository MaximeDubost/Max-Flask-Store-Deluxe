const productsEl = document.getElementById('products');
const cartBtnEl = document.getElementById('cartBtn');

let cartArr;
let productsArr = [];

// loads product data 
const loadProducts = () => {
    const baseUrl = "http://0.0.0.0:5000";
    $.ajax({
        url: `${baseUrl}/product`,
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin":"*"
        },
        success(res){
            productsArr = res;
            console.log("res :")
            console.log(res)
            displayProductsDOM(res);
        },
        error(err){
            alert('Could not fetch products !!');
        }
    });
};

// renders products list on DOM
function displayProductsDOM(products){
    productsEl.innerHTML = products.map(product=>`
        <div class="product">
            <div class="product-info">
                <img src="images/no-image.png" alt="product-image">
                <h4>${product.name}</h4>
                <h5>${product.description}</h5>
                <h5>Price: $ ${product.price}</h5>
            </div>
        </div>
    `)
    .join('');
}

loadProducts();
