import React, { useState, createContext } from "react"

export const ProductTypeContext = createContext()

export const ProductTypeProvider = (props) => {
    const [productType, setProductType] = useState([])

    const getProductType = () => {
        return fetch("http://localhost:8088/productType")
        .then(res => res.json())
        .then(setProductType)
    }

    const addProductType = productObj => {
        return fetch("http://localhost:8088/productType", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        })
        .then(getProductType)
    }

    return (
        <ProductTypeContext.Provider value={{
            productType, getProductType, addProductType
        }}>
            {props.children}
        </ProductTypeContext.Provider>
    )
}
