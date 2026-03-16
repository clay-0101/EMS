import Login from "./COMPONENTS/AUTH/Login"
import EmployeeDashboard from "./COMPONENTS/Dashboard/EmployeeDashboard"
import AdminDashboard from "./COMPONENTS/Dashboard/AdminDashboard"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./CONTEXT/AuthProvider"

const App = () => {
  const {userData} = useContext(AuthContext)
  useEffect(() => {
    const logedInUser = localStorage.getItem('logedInUser')

    if (logedInUser) {
      let userData = JSON.parse(logedInUser)
      setUser(userData.role)
      setLogedInUserData(userData.data)
    }
  }, [])


  const [user, setUser] = useState(null)
  const [logedInUserData, setLogedInUserData] = useState(null)

  const loginHandle = (email, password) => {
    if (userData) {
      const admin = userData.adminData.find((e) => email == e.email && password == e.password)
      const employee = userData.employeesData.find((e) => email == e.email && password == e.password)
      if (admin) {

        setUser('Admin')
        setLogedInUserData(admin)
        localStorage.setItem('logedInUser', JSON.stringify({ role: 'Admin', data: admin }))
      }

      else if (employee) {
        setUser('Employee')
        setLogedInUserData(employee)
        localStorage.setItem('logedInUser', JSON.stringify({ role: 'Employee', data: employee }))
      }
      else {
        alert('Invalid Credentials')
      }
    }
    else{alert('Data is loading or not available')}

  }
  return (
    <>
      {!user ? <Login loginHandle={loginHandle} /> : ''}
      {user == 'Admin' ? <AdminDashboard data={logedInUserData}  /> : (user == 'Employee' ? <EmployeeDashboard data={userData.employeesData.find(e=> e.email == logedInUserData.email)} /> : '')}

      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}

    </>
  )
}

export default App