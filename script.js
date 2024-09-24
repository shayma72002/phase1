// Product Data
const products = [
    { name: "Smartphone", category: "Electronics", price: 599 },
    { name: "Laptop", category: "Electronics", price: 899 },
    { name: "T-Shirt", category: "Clothing", price: 29 },
    { name: "Jeans", category: "Clothing", price: 49 },
    { name: "Novel", category: "Books", price: 15 },
    { name: "Textbook", category: "Books", price: 99 }
];

// Select the product display area
const productList = document.getElementById('product-list');

// Function to render products
function renderProducts(filteredProducts) {
    // Clear the product list
    productList.innerHTML = '';

    // Loop through the filtered products and generate HTML
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
        `;
        productList.appendChild(productItem);
    });
}

// Initial rendering of all products
renderProducts(products);

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const category = e.target.getAttribute('data-category');
        if (category === 'All') {
            renderProducts(products);  // Show all products
        } else {
            const filteredProducts = products.filter(product => product.category === category);
            renderProducts(filteredProducts);  // Show filtered products
        }
    });
});
