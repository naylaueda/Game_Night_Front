export default async function getProducts(setProducts) {

    try {
      const products = await fetch('http://18.189.31.114:8080/products')
        .then((response) => response.json());
      setProducts(products.slice(0,10));
    } catch (error) {
      alert("Houve um erro ao comunicar com o servidor");
    }
  }
