const ProductApiService = {
  getProductApi: () => fetch('/api/product').then((response) => response.json())
};

export default ProductApiService;
