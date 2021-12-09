import React from "react"
import "./Product.css"

export const ProductCard = ({ product, productType }) => (
    <section className="product">
        <h3 className="product__name">Kandy Name: {product.name}</h3>
        <p className="product__type">Kandy Type: {productType.type}</p>
        <p className="product__price">Price: ${product.price}</p>
        <button onClick={() => ({
                // Button captures the productId and customerId and adds it to the orders array in the database.
                productId: product.id, 
                customerId: parseInt(product.customerId)
            })
        }>
            Purchase
        </button>
    </section>
)

//example button
//<button
//   className="button"
//   onClick={() =>
//       props.addToCart({
//       id: product.name,
//       product,
//      amount: 1
//    })
//  }>
//    Add to Cart
//</button>