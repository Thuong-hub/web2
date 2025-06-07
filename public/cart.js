document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  cartContainer.innerHTML = "";
  let totalPrice = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>🛍️ Giỏ hàng của bạn đang trống.</p>";
    totalEl.textContent = "Tổng cộng: 0 VND";
    return;
  }

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <div class="item-details">
        <h3>${item.name}</h3>
        <p>Giá: ${item.price.toLocaleString()} VND</p>
        <p>Size: ${item.size}</p>
        <p>Số lượng: ${item.quantity}</p>
        <p>Tổng: ${itemTotal.toLocaleString()} VND</p>
      </div>
      <div class="item-img">
        <img src="${item.img}" alt="${item.name}" width="100" />
      </div>
    `;

    cartContainer.appendChild(itemDiv);
  });

  totalEl.textContent = `Tổng cộng: ${totalPrice.toLocaleString()} VND`;

  document.getElementById("clear-cart").addEventListener("click", () => {
    localStorage.removeItem("cart");
    location.reload();
  });

  document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Giỏ hàng trống. Vui lòng thêm sản phẩm trước khi thanh toán.");
      return;
    }
    const confirmCheckout = confirm("Xác nhận thanh toán tất cả sản phẩm trong giỏ?");
    if (confirmCheckout) {
      window.location.href = "thankyou.html";
    }
  });
});
function checkout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert("Giỏ hàng trống.");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

  const newOrder = {
    date: new Date().toLocaleString(),
    items: cart,
    total: total
  };

  orderHistory.push(newOrder);
  localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

  localStorage.removeItem('cart');
  window.location.href = "thankyou.html";
}

