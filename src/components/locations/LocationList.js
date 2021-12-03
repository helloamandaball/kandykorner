import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
  }, [])

  const navigate = useNavigate()

  return (
    <>
      <h2>Locations</h2>
      <button onClick={() => {navigate("create")}}>
          New Location
      </button>
      <div className="locations">
          {console.log("LocationList: Render", locations)}
          {locations.map(location => {
                return <LocationCard 
                              key={location.id}
                              location={location}
                      />
                })
              }
      </div>
    </>
  )
}