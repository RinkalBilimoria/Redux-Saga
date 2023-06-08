function service() {
  const getAllProducts = () => {
    return fetch("https://dummyjson.com/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => data.products)
      .catch((e) => e);
  };

  return {
    getAllProducts,
  };
}

const productsService = service();
//console.warn(productsService);

export default productsService;
