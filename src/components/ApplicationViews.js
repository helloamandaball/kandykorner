import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"

export const ApplicationViews = () => {
    return (
        <LocationProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="locations/*" element={<LocationList />} />
            </Routes>
        </LocationProvider>
    )
}