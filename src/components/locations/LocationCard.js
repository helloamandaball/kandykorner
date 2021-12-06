import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__address">{location.address}</address>
        <p className="location__size">Store size: {location.size} sq. ft.</p>
        <p className="location_accessible">Handicap accessible: {location.accessible ? `Yes` : `No`}</p>
    </section>
)

