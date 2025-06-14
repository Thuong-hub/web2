function renderCart() {
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
        <button class="remove-item" data-index="${index}">❌ Xóa</button>
      </div>
      <div class="item-img">
        <img src="${item.img}" alt="${item.name}" width="100">
      </div>
    `;
    cartContainer.appendChild(itemDiv);
  });

  totalEl.textContent = `Tổng cộng: ${totalPrice.toLocaleString()} VND`;

  // Gắn lại sự kiện xoá từng sản phẩm
  document.querySelectorAll(".remove-item").forEach(button => {
    button.addEventListener("click", (e) => {
      const indexToRemove = parseInt(e.target.getAttribute("data-index"));
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.splice(indexToRemove, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart(); // cập nhật lại giao diện mà không cần reload
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();

  document.getElementById("clear-cart").addEventListener("click", () => {
    localStorage.removeItem("cart");
    renderCart();
  });

  document.getElementById("checkout").addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("Giỏ hàng trống. Vui lòng thêm sản phẩm trước khi thanh toán.");
      return;
    }
    const confirmCheckout = confirm("Xác nhận thanh toán tất cả sản phẩm trong giỏ?");
    if (confirmCheckout) {
      checkout();
    }
  });
});

async function checkout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

  const {
    data: { user },
    error: authError
  } = await supabase.auth.getUser();

  if (authError || !user) {
    alert("Bạn cần đăng nhập trước khi thanh toán.");
    return;
  }

  // 2. Gửi đơn hàng vào Supabase
  const { error: insertError } = await supabase
    .from('orders')
    .insert([{
      user_id: user.id,
      items: cart,
      total_price: total,
      created_at: new Date().toISOString()
    }]);

  if (insertError) {
    console.error("Lỗi khi gửi đơn hàng lên Supabase:", insertError);
    alert("Có lỗi khi gửi đơn hàng. Vui lòng thử lại sau.");
    return;
  }

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