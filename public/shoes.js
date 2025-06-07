const footballShoes = [
  { id: 1, name: "Nike Mercurial", price: 1500000, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0k_QwgVfS_WvNkrZRxXBsQ3o-Bm5-zoPaByFWFKxDcHEVuUzZpwDkoQ_mHakQMUBfgJ9LdmySi1eqXrwQgk11iq8j1oa4yPA1Yyl8N2yb6C-8_nnIGPkxqZBdVd3OjSOXUUj6DA&usqp=CAc" },
  { id: 2, name: "Adidas Predator", price: 1800000, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0uiJTCMauRN7-1VjXQ-Fa3n_KJKLAwdpBCY8hEgg8dKkvrCjK-LbuxAkiqdYC56alU6OtqCw1iTAgHB9cmqQ2lMVCFcN_BnH5_BNrEAHIlNmflGR90msu&usqp=CAc" },
  { id: 3, name: "Puma Future", price: 1300000, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSv4TYPozOY5Ebhu31hfbhAfknMxmHN6ePouWZpFe6IZf0qSg3nt4z3fGUvrC0MaBIlZoa6SeCGA6ZrReOKBbhX-wgJtksTGNmGqR9SM9dZpN13_Nhhks7wJPwvxtOrFhQIpEPv0g&usqp=CAc" },
  { id: 4, name: "Mizuno Morelia", price: 1700000, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQvx7MYg56K_zbZ3_DutfQrLTtt-_G9alY_zg4C-gVdanCH3y9lse03YICdE3ZYTXHLCAWDEAI5ocbS18S9OgtIi2Jqs6NbaTK3OJDjoIEpsKRsygRc9Eo2zPXNB6VsgzDAWZvIrP4&usqp=CAc" },
  { id: 5, name: "New Balance Furon", price: 1400000, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfRLqI2LD2vJ9To6JN_xwj2RrkCcGgl4JjWlbxQnhlC4ruVSJJl52EAoOADHeiDpP-D1LaO4jXXJWUJYVVYZIa6ZZpxvTov5OTpiSm1ksLPke9-7nYkYRFRXU5jqZLS4GXMwZyNQ&usqp=CAc" }
];

function addToCart(productId) {
  const product = footballShoes.find(p => p.id === productId);
  const size = document.getElementById(`size-${productId}`).value;
  const quantity = parseInt(document.getElementById(`quantity-${productId}`).value);

  if (!size) {
    alert("Vui lòng chọn size giày.");
    return;
  }

  if (!quantity || quantity < 1) {
    alert("Vui lòng chọn số lượng hợp lệ.");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    ...product,
    size,
    quantity,
    total: product.price * quantity
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html"; // Chuyển sang trang giỏ hàng
}

function renderShoes() {
  const container = document.getElementById("shoes-list");
  footballShoes.forEach(shoe => {
    const div = document.createElement("div");
    div.className = "shoe-card";
    div.innerHTML = `
      <img src="${shoe.img}" alt="${shoe.name}" />
      <h3>${shoe.name}</h3>
      <p>Giá: ${shoe.price.toLocaleString()} VND</p>
      
      <label for="size-${shoe.id}">Size:</label>
      <select id="size-${shoe.id}" class="size-select">
        <option value="">-- Chọn size --</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
      </select><br/>

      <label for="quantity-${shoe.id}">Số lượng:</label>
      <input type="number" id="quantity-${shoe.id}" value="1" min="1" style="width: 60px;" /><br/><br/>

      <button onclick="addToCart(${shoe.id})">Thêm vào giỏ</button>
    `;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", renderShoes);
