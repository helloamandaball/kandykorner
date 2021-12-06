import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { EmployeeContext} from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployee")
    getEmployees()
  }, [])

  const navigate = useNavigate()

  return (
    <>
      <h2>Employees</h2>
      <button onClick={() => {navigate("create")}}>
          New Employee
      </button>
      <div className="employees">
          {console.log("EmployeeList: Render", employees)}
          {employees.map(employee => {
            return <EmployeeCard 
                        key={employee.id}
                        employee={employee}
                    />
            })
          }
      </div>
    </>
  )
}