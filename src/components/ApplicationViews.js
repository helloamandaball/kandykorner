import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductTypeProvider } from "./products/ProductTypeProvider"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
// import { OrderProvider } from "./orders/OrderProvider"

export const ApplicationViews = () => {
    return (
        <LocationProvider>
        <ProductTypeProvider>
        <ProductProvider>
        <EmployeeProvider>
        {/* <OrderProvider> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="locations/*" element={<LocationList />} />
                <Route path="products/*" element={<ProductList />} />
                <Route path="employees/*" element={<EmployeeList />} />
                <Route path="employees/create/*" element={<EmployeeForm />} />
                {/* <Route path="orders/*" element={<OrderList />} /> */}
            </Routes>
        {/* </OrderProvider> */}
        </EmployeeProvider>
        </ProductProvider>
        </ProductTypeProvider>
        </LocationProvider>
    )
}