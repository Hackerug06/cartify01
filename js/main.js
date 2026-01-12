const products = [
  { id: 1, name: "Smartphone", price: 1200000, image: "assets/images/phone.png" },
  { id: 2, name: "Headphones", price: 150000, image: "assets/images/headphones.png" },
  { id: 3, name: "Sneakers", price: 180000, image: "assets/images/shoes.png" }
];

const productList = document.getElementById("product-list");

if (productList) {
  products.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="">
        <h4>${p.name}</h4>
        <p>UGX ${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}
