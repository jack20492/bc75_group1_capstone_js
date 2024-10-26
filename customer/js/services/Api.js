class Api {
  getListProduct() {
    return axios({
      url: "https://6700f182b52042b542d65308.mockapi.io/capestone_js",
      method: "GET",
    });
  }

  deleteProductById(id) {
    return axios({
      url: `https://6700f182b52042b542d65308.mockapi.io/capestone_js/${id}`,
      method: "DELETE",
    });
  }

  addProduct(product) {
    return axios({
      url: `https://6700f182b52042b542d65308.mockapi.io/capestone_js`,
      method: "POST",
      data: product,
    });
  }

  getProductById(id) {
    return axios({
      url: `https://6700f182b52042b542d65308.mockapi.io/capestone_js/${id}`,
      method: "GET",
    });
  }

  updateProductById(product) {
    return axios({
      url: `https://6700f182b52042b542d65308.mockapi.io/capestone_js/${product.id}`,
      method: "PUT",
      data: product,
    });
  }
}

export default Api;
