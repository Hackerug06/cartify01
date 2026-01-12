async function loadProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  data.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h4>${p.name}</h4>
        <p>UGX ${p.price}</p>
        <button onclick="addToCart('${p.id}')">Add to Cart</button>
      </div>
    `;
  });
}
loadProducts();
