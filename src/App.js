// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import {useState} from "react"
import UseRef from './aulas/0303-useref';

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchProducts = async(url) => {
    try {
      const product = await fetch(url)
      const productJson = await product.json()
      setData(productJson)
      setIsLoading(false)
      console.log(productJson);
    } catch (err) {
      console.log(err);
    }
  }

  const handleClick = () => {
    fetchProducts("https://ranekapi.origamid.dev/json/api/produto/tablet")
  }

  return (
    <div className="App">
      <UseRef />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button className="button" onClick={() => handleClick()}>smartphone</button>
      <button className="button" onClick={() => handleClick()}>tablet</button>
      <button className="button" onClick={() => handleClick()}>notebook</button>
      {isLoading && <p>Carregando</p>}
      {!isLoading && data && <Products data={data} isLoading={isLoading} />}
    </div>
  );
}

export default App;
