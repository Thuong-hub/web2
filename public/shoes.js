const footballShoes = [
  { id: 1, name: "Nike Mercurial", price: 1500000, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0k_QwgVfS_WvNkrZRxXBsQ3o-Bm5-zoPaByFWFKxDcHEVuUzZpwDkoQ_mHakQMUBfgJ9LdmySi1eqXrwQgk11iq8j1oa4yPA1Yyl8N2yb6C-8_nnIGPkxqZBdVd3OjSOXUUj6DA&usqp=CAc" },
  { id: 2, name: "Adidas Predator", price: 1800000, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0uiJTCMauRN7-1VjXQ-Fa3n_KJKLAwdpBCY8hEgg8dKkvrCjK-LbuxAkiqdYC56alU6OtqCw1iTAgHB9cmqQ2lMVCFcN_BnH5_BNrEAHIlNmflGR90msu&usqp=CAc" },
  { id: 3, name: "Puma Future", price: 1300000, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSv4TYPozOY5Ebhu31hfbhAfknMxmHN6ePouWZpFe6IZf0qSg3nt4z3fGUvrC0MaBIlZoa6SeCGA6ZrReOKBbhX-wgJtksTGNmGqR9SM9dZpN13_Nhhks7wJPwvxtOrFhQIpEPv0g&usqp=CAc" },
  { id: 4, name: "Mizuno Morelia", price: 1700000, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQvx7MYg56K_zbZ3_DutfQrLTtt-_G9alY_zg4C-gVdanCH3y9lse03YICdE3ZYTXHLCAWDEAI5ocbS18S9OgtIi2Jqs6NbaTK3OJDjoIEpsKRsygRc9Eo2zPXNB6VsgzDAWZvIrP4&usqp=CAc" },
  { id: 5, name: "New Balance Furon", price: 1400000, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfRLqI2LD2vJ9To6JN_xwj2RrkCcGgl4JjWlbxQnhlC4ruVSJJl52EAoOADHeiDpP-D1LaO4jXXJWUJYVVYZIa6ZZpxvTov5OTpiSm1ksLPke9-7nYkYRFRXU5jqZLS4GXMwZyNQ&usqp=CAc" },
  { id: 6, name: "Nike Phantom GT", price: 1600000, img: "https://product.hstatic.net/1000061481/product/fba0ad8effda_476134815606435f933d8df38f88c897_1024x1024.jpeg" },
  { id: 7, name: "Nike Tiempo Legend", price: 1550000, img: "https://product.hstatic.net/1000061481/product/c89cefd3a05b48b1a694b076c2c827e2_c9b03e77366142f8b297df18e734871c_1024x1024.jpeg" },
  { id: 8, name: "Nike Zoom Vapor", price: 1450000, img: "https://vietthethao.com/public/cuploads/images/GI%C3%80Y%20TENNIS%20NIKE%20AIR%20ZOOM%20VAPOR%20PRO%20%C4%90EN%20TR%E1%BA%AENG%20M%E1%BB%9AI%202022.jpg" },
  { id: 9, name: "Nike Premier III", price: 1350000, img: "https://www.google.com/imgres?q=Nike%20Premier%20III&imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_default%2Fc4ce2630-d2f1-447f-83d9-c2f6fcdf0ad6%2FTHE%2BNIKE%2BPREMIER%2BIII%2BTF.png&imgrefurl=https%3A%2F%2Fwww.nike.com%2Fca%2Ft%2Fpremier-3-tf-low-top-football-shoes-rzPphD&docid=r6DRTv354HhibM&tbnid=EBMTfIyQDEeCuM&vet=12ahUKEwjOwevg-eqNAxVwwjgGHQwhKJAQM3oFCIMBEAA..i&w=320&h=400&hcb=2&ved=2ahUKEwjOwevg-eqNAxVwwjgGHQwhKJAQM3oFCIMBEAA" },
  { id: 10, name: "Nike Streetgato", price: 1250000, img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9e2a41a8-566a-4092-9b03-90dfa9160d52/NIKE+STREETGATO.png" },

  { id: 11, name: "Adidas X Crazyfast", price: 1700000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0_5Y1J6h5dkoNXYBk6u_CKdyM3yLAtzaVw&s" },
  { id: 12, name: "Adidas Copa Pure", price: 1650000, img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e3314c6e7653483c845e221a5bc97eba_9366/Giay_dja_bong_F50_League_danh_cho_san_co_nhan_tao_trang_JH7726_22_model.jpg" },
  { id: 13, name: "Adidas Nemeziz 19.1", price: 1500000, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/97d594a410ac4bb9a1a2ab2200c0b485_9366/NEMEZIZ_19.1_FG_trang_EG7325_01_standard.jpg" },
  { id: 14, name: "Adidas Goletto VIII", price: 1200000, img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/dd37a2eff67149449f77ad79007a3251_9366/Giay_DJa_Bong_Turf_Goletto_VIII_DJen_GY5775_01_standard.jpg" },
  { id: 15, name: "Adidas Predator Accuracy", price: 1800000, img: "https://product.hstatic.net/1000061481/product/anh_sp_add_web_crazyfast-02_f06dc25d6d154527b0a640fd8e4b3e2a_1024x1024.jpg" },

  { id: 16, name: "Puma Ultra Ultimate", price: 1400000, img: "https://bizweb.dktcdn.net/100/352/697/products/4457190ae39f4bc1128e.jpg?v=1707636144133" },
  { id: 17, name: "Puma King Ultimate", price: 1600000, img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/107563/01/sv01/fnd/EEA/fmt/png/KING-ULTIMATE-FG/AG-Football-Boots" },
  { id: 18, name: "Puma Future Match", price: 1350000, img: "https://product.hstatic.net/200000601263/product/713b348ae65c47d3a96437d45fe4e1a7_7d6688ed6fb9408c9f3283febbe9d394.jpg" },
  { id: 19, name: "Puma Future Pro", price: 1450000, img: "https://product.hstatic.net/200000740801/product/untitled-1-01_efc2b9afe45648209298c4696795f9ea_master.jpg" },
  { id: 20, name: "Puma One 5.1", price: 1500000, img: "https://thumblr.uniid.it/product/186043/d37de068f4d0.jpg?width=3840&format=webp&q=75" }
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

function handleSearch() {
  const keyword = document.getElementById("search-input").value.trim().toLowerCase();
  const filtered = footballShoes.filter(shoe => shoe.name.toLowerCase().includes(keyword));
  renderShoes(filtered);
}

document.addEventListener("DOMContentLoaded", () => renderShoes());

