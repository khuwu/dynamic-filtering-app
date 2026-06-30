const products = [

    {
        name: "Nike Shoes",
        price: 120,
        category: "Footwear",
        image: "images/shoes.jpg"
    },

    {
        name: "Gaming Mouse",
        price: 45,
        category: "Electronics",
        image: "images/mouse.jpg"
    },

    {
        name: "Laptop",
        price: 899,
        category: "Electronics",
        image: "images/laptop.jpg"
    },

    {
        name: "Headphones",
        price: 80,
        category: "Electronics",
        image: "images/headphones.jpg"
    },

    {
        name: "Keyboard",
        price: 60,
        category: "Electronics",
        image: "images/keyboard.jpg"
    },

    {
        name: "Monitor",
        price: 250,
        category: "Electronics",
        image: "images/monitor.jpg"
    },

    {
        name: "Backpack",
        price: 40,
        category: "Accessories",
        image: "images/backpack.jpg"
    },

    {
        name: "Smart Watch",
        price: 299,
        category: "Wearables",
        image: "images/watch.jpg"
    }

];

const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");
const productCount = document.getElementById("productCount");

function displayProducts(productArray){

    productList.innerHTML = "";

    productCount.textContent = `${productArray.length} Product(s) Found`;

    if(productArray.length === 0){

        productList.innerHTML =
        "<p class='no-results'>No products found.</p>";

        return;

    }

    productArray.forEach(product=>{

        productList.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p class="price">$${product.price}</p>

            <p class="category">${product.category}</p>

        </div>

        `;

    });

}

displayProducts(products);

searchInput.addEventListener("input",()=>{

    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product=>

        product.name.toLowerCase().includes(searchText)

    );

    displayProducts(filteredProducts);

});

function filterCategory(category){

    if(category==="All"){

        displayProducts(products);

        return;

    }

    const filteredProducts = products.filter(product=>

        product.category===category

    );

    displayProducts(filteredProducts);

}