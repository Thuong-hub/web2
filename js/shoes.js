const footballShoes = [
  { id: 1, name: "Nike Mercurial", price: 1500000, img: "picture/Nike mercurial.jpg" },
  { id: 2, name: "Nike Zoom Mercurial", price: 1800000, img: "picture/NIKE ZOOM MERCURIAL.jpg" },
  { id: 3, name: "Nike Tiempo React", price: 1300000, img: "picture/Nike Tiempo React.jpg" },
  { id: 4, name: "Nike Phantom GX", price: 1700000, img: "picture/Nike Phantom GX.jpg" },
  { id: 5, name: "Nike Phantom Luna 2", price: 1400000, img: "picture/Nike Phantom Luna 2.jpg" },
  { id: 6, name: "Nike Phantom GT", price: 1600000, img: "picture/Nike Phantom GT.jpg" },
  { id: 7, name: "Nike Tiempo Legend", price: 1550000, img: "picture/Nike Tiempo Legend.jpg" },
  { id: 8, name: "Nike Zoom Vapor", price: 1450000, img: "picture/Nike Zoom Vapor.jpg" },
  { id: 9, name: "Adidas Predator Accuracy", price: 1350000, img: "picture/Adidas Predator Accuracy.jpg" },
  { id: 10, name: "Adidas F50 Pro", price: 1250000, img: "picture/Adidas F50 Pro.jpg" },

  { id: 11, name: "Adidas X Crazyfast", price: 1700000, img: "picture/Adidas X Crazyfast.jpg" },
  { id: 12, name: "Adidas Copa Pure", price: 1650000, img: "picture/Adidas Copa Pure.jpg" },
  { id: 13, name: "Mizuno Morelia Neo IV", price: 1500000, img: "picture/Mizuno Morelia Neo IV.jpg" },
  { id: 14, name: "Mizuno Morelia Sala", price: 1200000, img: "picture/Mizuno Morelia Sala.jpg" },
  { id: 15, name: "Mizuno Monarcida Neo Sala", price: 1800000, img: "picture/Mizuno Monarcida Neo Sala.jpg" },
  { id: 16, name: "Mizuno Alpha 2", price: 1400000, img: "picture/Mizuno Alpha 2.jpg" },
  { id: 17, name: "Puma Ultra Ultimate", price: 1600000, img: "picture/Puma Ultra Ultimate.jpg" },
  { id: 18, name: "Puma Future Match", price: 1350000, img: "picture/Puma Future Match.jpg" },
  { id: 19, name: "Puma Future Pro", price: 1450000, img: "picture/Puma Future Pro.jpg" },
  { id: 20, name: "Puma Ultra 5 Pro", price: 1500000, img: "picture/Puma Ultra 5 Pro.jpg" }
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

function renderShoes(filteredShoes = footballShoes) {
  const container = document.getElementById("shoes-list");
  container.innerHTML = ""; // Xóa giày cũ khi tìm kiếm

  filteredShoes.forEach(shoe => {
    const div = document.createElement("div");
    div.className = "shoe-card";
    div.innerHTML = `
  <a href="product-detail.html?id=${shoe.id}" style="text-decoration: none; color: inherit;">
    <img src="${shoe.img}" alt="${shoe.name}" />
    <h3>${shoe.name}</h3>
  </a>
  <p>Giá: ${shoe.price.toLocaleString()} VND</p>
  
`;
    container.appendChild(div);
  });
}

function handleSearch() {
  const keyword = document.getElementById("search-input").value.trim().toLowerCase();
  const filtered = footballShoes.filter(shoe => shoe.name.toLowerCase().includes(keyword));
  renderShoes(filtered);
}

document.addEventListener("DOMContentLoaded", () => renderShoes());

