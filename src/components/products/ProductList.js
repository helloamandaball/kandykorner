import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { ProductContext} from "./ProductProvider"
import { ProductTypeContext } from "./ProductTypeProvider"
import { ProductCard } from "./ProductCard"

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext)
  const { productType, getProductType } = useContext(ProductTypeContext)

  useEffect(() => {
    console.log("ProductList: useEffect - getProducts")
    getProductType()
    .then(getProducts)
  }, [])

  const navigate = useNavigate()

  return (
    <>
      <div className="main">
        <h2>Products</h2>
        {/* <button onClick={() => {navigate("create")}}>
            New Product
        </button> */}
        <div className="products">
            {console.log("ProductList: Render", products, productType)}
            {products.map(product => {
              const kandyType = productType.find(productType => productType.id === product.typeId)
              return <ProductCard 
                          key={product.id}
                          product={product}
                          productType={kandyType}
                      />
              })
            }
        </div>
      </div>
    </>
  )
}