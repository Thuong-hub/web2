document.addEventListener('DOMContentLoaded', () => {
  const orders = JSON.parse(localStorage.getItem('orderHistory')) || [];
  const ordersList = document.getElementById('orders-list');

  if (orders.length === 0) {
    ordersList.innerHTML = "<p>Chưa có đơn hàng nào.</p>";
    return;
  }

  orders.forEach((order, index) => {
    const orderDiv = document.createElement('div');
    orderDiv.className = 'order';

    let productListHTML = '';
    order.items.forEach(item => {
    productListHTML += `
        <li class="order-item">
          <img src="${item.img}" alt="${item.name}" width="80" />
          <div>
            ${item.name} - Size ${item.size} - Số lượng: ${item.quantity} - Giá: ${item.price.toLocaleString()} VND
          </div>
        </li>
      `;
    });

    orderDiv.innerHTML = `
      <h3>Đơn hàng #${index + 1}</h3>
      <p>Ngày đặt: ${order.date}</p>
      <ul>${productListHTML}</ul>
      <p><strong>Tổng cộng:</strong> ${order.total.toLocaleString()} VND</p>
    `;

    ordersList.appendChild(orderDiv);
  });

  // Nút xóa lịch sử
  const clearBtn = document.getElementById('clear-history');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      const confirmDelete = confirm("Bạn có chắc muốn xóa toàn bộ lịch sử đơn hàng?");
      if (confirmDelete) {
        localStorage.removeItem('orderHistory');
        location.reload();
      }
    });
  }
});
