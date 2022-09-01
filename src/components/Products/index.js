import "./index.css"

const Products = ({data, isLoading}) => {

  const Loading = () => (
    <div>Carregando...</div>
  )

  const Product = () => (
    <div>
      {data.nome}
      <br/>
      <p>{data.descricao}</p>
      <p>{data.preco}</p>
    </div>
  )

  const RenderProduct = () => {
    if (isLoading) {
      return <Loading />
    }
    return <Product />
  }

  return (
    <section className="products">
      <div>
        <RenderProduct />
      </div>
    </section>
  )
}

export default Products