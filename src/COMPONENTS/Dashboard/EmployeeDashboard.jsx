import { useContext } from "react"
import Header from "../OTHER/Header"
import TaskListNumber from "../OTHER/TaskListNumber"
import TaskList from "../TASKLIST/TaskList"
import { AuthContext } from "../../CONTEXT/AuthProvider"

const EmployeeDashboard = ({ data }) => {
  const { userData } = useContext(AuthContext)
  const freshData = userData.employeesData.find(emp => emp.firstName === data.firstName)
  const finalData = freshData || data
  return (
    <div className="p-10 h-screen  bg-[#F6F1EB]">

        <Header data={finalData}/>
        <TaskListNumber data={finalData}/>
        <TaskList data={finalData}/>

    </div>
  )
}

export default EmployeeDashboard