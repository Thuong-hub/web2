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
        <li>${item.name} - Size ${item.size} - Số lượng: ${item.quantity} - Giá: ${item.price.toLocaleString()} VND</li>
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
});
