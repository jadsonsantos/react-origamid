// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import "./index.css"

const Products = () => {
  const fetchProducts = async(url) => {
    try {
      const product = await fetch(url)
      const productJson = await product.json()
      console.log(productJson);
    } catch (err) {
      console.log(err);
    }
  }

  const handleClick = () => {
    fetchProducts("https://ranekapi.origamid.dev/json/api/produto/tablet")
  }

  return (
    <section className="products">
      <button className="button" onClick={() => handleClick()}>Tablet</button>
    </section>
  )
}

export default Products