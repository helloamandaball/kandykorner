import React from "react"
import "./Product.css"

export const ProductCard = ({ product, productType }) => (
    <section className="product">
        <h3 className="product__name">Kandy Name: {product.name}</h3>
        <p className="product__type">Kandy Type: {productType.type}</p>
        <p className="product__price">Price: ${product.price}</p>
    </section>
)