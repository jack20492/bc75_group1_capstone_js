import product from "./../model/product.js";
import Api from "./../services/Api.js";

const api = new Api();
let dataStore = [];

const getEleId = (id) => document.getElementById(id);

// render product
let renderProduct = (productList) => {
  let content = "";
  productList.forEach((product) => {
    content += `
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 transition-transform transform hover:scale-105 hover:shadow-2xl">
  <a href="#">
      <img class="p-8 rounded-t-lg" src="${product.img}" alt="product image" />
  </a>
  <div class="px-5 pb-5">
      <a href="#">
          <h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.name}</h3>
          <h6 class="text-x font-semibold tracking-tight text-gray-900 dark:text-white">${product.desc}</h6>
          <h6 class="text-x font-semibold tracking-tight text-gray-900 dark:text-white">Màn hình: ${product.screen}</h6>
          <h6 class="text-x font-semibold tracking-tight text-gray-900 dark:text-white">Camera trước: ${product.frontCamera} - Camera sau:${product.backCamera} </h6>
         
          
      </a>
      <div class="flex items-center mt-2.5 mb-5">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
          </div>
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
      </div>
      <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">$${product.price}</span>
          <button onclick="addToCart('${product.id}')" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
      </div>
  </div>
</div>

      `;
  });
  getEleId("productList").innerHTML = content;
};

// gọi api với axios
// let apiUrl = "https://6700f182b52042b542d65308.mockapi.io/capestone_js";
// axios({
//   url: apiUrl,
//   method: "GET",
// })
//   .then((res) => {
//     console.log(res.data);
//     let productList = res.data;
//     // render sản phẩm ra giao diện
//     renderProduct(productList);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch product list
// let fetchProductList = () => {
//   api
//     .getListProduct()
//     .then((res) => {
//       console.log("res:", res.data);
//       dataStore = res.data;
//       // let productLists = res.data;
//       renderProduct(res.data);
//       // render danh sách sản phẩm ra giao diện
//     })
//     .catch((err) => {
//       console.log("err:", err);
//     });
// };
// fetchProductList();

// Hàm lọc sản phẩm dựa trên lựa chọn từ dropdown
const filterProducts = () => {
  const selectedType = getEleId("product-filter").value.toLowerCase();

  // Kiểm tra loại sản phẩm được chọn
  console.log("Selected type:", selectedType);

  // Nếu chọn "Tất cả", hiển thị toàn bộ sản phẩm
  if (selectedType === "tất cả") {
    renderProduct(dataStore);
    return;
  }

  // Lọc các sản phẩm dựa trên thuộc tính 'type'
  const filteredProducts = dataStore.filter(
    (product) => product.type.toLowerCase() === selectedType
  );

  // Kiểm tra sản phẩm sau khi lọc
  console.log("Filtered Products:", filteredProducts);

  // Hiển thị sản phẩm đã lọc
  renderProduct(filteredProducts);
};
window.filterProducts = filterProducts;

// Hàm fetch danh sách sản phẩm từ API
let fetchProductList = () => {
  api
    .getListProduct()
    .then((res) => {
      console.log("API Response:", res.data); // Kiểm tra dữ liệu trả về từ API
      dataStore = res.data;

      // Sau khi lấy được danh sách sản phẩm, hiển thị toàn bộ sản phẩm
      renderProduct(dataStore);
    })
    .catch((err) => {
      console.log("Error:", err); // Kiểm tra lỗi nếu có
    });
};
fetchProductList();

// Khai báo biến giỏ hàng và biến đếm số lượng sản phẩm
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
  // Kiểm tra nếu danh sách sản phẩm (productList) là một mảng
  if (!Array.isArray(dataStore)) {
    console.error("dataStore is not an array");
    return;
  }

  // Tìm sản phẩm trong danh sách sản phẩm dựa trên productId
  const product = dataStore.find((p) => p.id === productId);

  if (!product) {
    console.error("Product not found!");
    return;
  }

  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    // Nếu sản phẩm đã có, tăng số lượng
    cartItem.quantity += 1;
  } else {
    // Nếu chưa có, thêm vào giỏ hàng với quantity là 1
    cart.push({ ...product, quantity: 1 });
  }

  // Cập nhật số lượng hiển thị
  document.getElementById("soLuong").innerText = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  console.log(cart); // Debug giỏ hàng
  saveCart();
  renderCart();
}

// Hàm hiển thị giỏ hàng khi bấm vào nút cart
function renderCart() {
  let cartContent = "";
  let totalAmount = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    totalAmount += itemTotal;
    cartContent += `
          <tr>
              <td>${item.name}</td>
              <td class="p-3">
                  <button class ="font-bold" onclick="updateQuantity('${
                    item.id
                  }', -1)">-</button>
                  ${item.quantity}
                  <button class ="font-bold" onclick="updateQuantity('${
                    item.id
                  }', 1)">+</button>
              </td>
              <td>$${itemTotal.toFixed(2)}</td>
              <td><button onclick="removeItem('${
                item.id
              }')" class="items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 mx-2 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Xóa</button></td>
          </tr>
      `;
  });

  document.getElementById("cartContent").innerHTML = cartContent;
  document.getElementById(
    "totalAmount"
  ).innerText = `Tổng tiền: $${totalAmount.toFixed(2)}`;
}
window.addToCart = addToCart;

// Hàm cập nhật số lượng sản phẩm
function updateQuantity(productId, change) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity += change;
    if (cartItem.quantity <= 0) {
      removeItem(productId);
    } else {
      saveCart();
      renderCart();
    }
  }
}
window.updateQuantity = updateQuantity;

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeItem(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
}
window.removeItem = removeItem;

// Hàm lưu giỏ hàng vào localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Hàm mở giỏ hàng (hiển thị modal giỏ hàng)
const openCart = () => {
  document.getElementById("cartModal").classList.remove("hidden");
  renderCart();
};
window.openCart = openCart;

// Hàm đóng giỏ hàng (ẩn modal giỏ hàng)
const closeCart = () => {
  document.getElementById("cartModal").classList.add("hidden");
};
window.closeCart = closeCart;

// Hàm thanh toán (clear giỏ hàng)
function checkout() {
  cart = [];
  saveCart();
  renderCart();
  closeCart(); // Đóng modal
  alert("Bạn đã thanh toán thành công!"); // Thông báo thanh toán thành công
}
window.checkout = checkout;
