import "./index.css"

const Products = ({data, isLoading}) => {

  const Loading = () => (
    <div>Carregando...</div>
  )

  const Product = () => (
    <div>
      <p>{data.nome}</p>
      <p>{data.preco}</p>
      <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />
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