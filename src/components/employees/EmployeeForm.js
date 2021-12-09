import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeContext } from "../employees/EmployeeProvider"
import "./Employee.css"

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0,
        manager: false,
        hourlyRate: 0,
        fullTime: false
    });

    const navigate = useNavigate();

    useEffect(() => {
      getLocations()
    }, [])

    const handleControlledInputChange = (event) => {
      const newEmployee = { ...employee }

      newEmployee[event.target.id] = event.target.value
      setEmployee(newEmployee)
    }

    const handleClickSaveEmployee = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form
      //code start: to make sure to return an integer, without it you get a number in a string "":
      const locationId = parseInt(employee.locationId)
      const hourlyRate = parseInt(employee.hourlyRate)
      employee.locationId = locationId
      employee.hourlyRate = hourlyRate
      //code end: return as an integer, see above.//

      if (locationId === null) {
        window.alert("Please select a location")
      } else {
        addEmployee(employee)
        .then(() => navigate("/employees"))
      }
    }

    const handleToggleManager = (event) => {
        const newEmployee = { ...employee }

      newEmployee.manager = event.target.id === "managerYes"? true : false 
      setEmployee(newEmployee)
    }

    const handleToggleHours = (event) => {
        const newEmployee = { ...employee }

      newEmployee.fullTime = event.target.id === "fullTimeYes"? true : false 
      setEmployee(newEmployee)
    }

    return (
      <form className="employeeForm">
          <h2 className="employeeForm__title">New Employee</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Employee name: </label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select defaultValue={employee.locationId} name="locationId" id="locationId" className="form-control" onChange={handleControlledInputChange} >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <p><label htmlFor="manager">Manager: </label>
                  <input name="manager" type="radio" id="managerYes" onClick={handleToggleManager} className="radio" value={employee.manager}/> Yes <input name="manager" type="radio" id="managerNo" onClick={handleToggleManager} className="radio" value={employee.manager}/> No</p>

                  <p><label htmlFor="hourlyRate">Hourly Rate: </label>$ <input  type="number" id="hourlyRate" onChange={handleControlledInputChange} required className="form-control" min="0" max="100" value={employee.hourlyRate}/></p>

                  <p><label htmlFor="fullTime">Employment Type: </label>
                  <input name="fullTime" type="radio" id="fullTimeYes" onClick={handleToggleHours} className="radio" value={employee.fullTime}/> Full-time <input name="fullTime" type="radio" id="No" onClick={handleToggleHours} className="radio" value={employee.fullTime}/> Part-time</p>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSaveEmployee}>
            Save
          </button>
      </form>
    )
}
