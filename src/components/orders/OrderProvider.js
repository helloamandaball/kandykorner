import React, { useState, createContext } from "react"

export const OrderContext = createContext()

export const OrderProvider = (props) => {
    const [orders, setOrders] = useState([])

    const getOrders = () => {
        return fetch("http://localhost:8088/orders?_expand=location")
        .then(res => res.json())
        .then(setOrders)
    }

    const getOrderById = (id) => {
        return fetch(`http://localhost:8088/orders/${id}?_expand=location&_expand=customer`)
            .then(res => res.json())
    }

    const addOrder = orderObj => {
        return fetch("http://localhost:8088/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderObj)
        })
        .then(getOrders)
    }

    return (
        <OrderContext.Provider value={{
            orders, getOrders, addOrder, getOrderById
        }}>
            {props.children}
        </OrderContext.Provider>
    )
}
