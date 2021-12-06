import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <address className="employee__address">{employee.location.name}</address>
        <p className="employee__manager">Manager: {employee.manager ? `Yes` : `No`}</p>
        <p className="employee_hours">{employee.fullTime ? `Full-time Employee` : `Part-time Employee`}</p>
        <p className="employee__rate">Hourly Rate: ${employee.hourlyRate}</p>
    </section>
)