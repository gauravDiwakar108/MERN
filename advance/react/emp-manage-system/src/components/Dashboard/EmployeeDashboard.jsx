import TaskList from "../../TaskList/TaskList"
import Header from "../Other/Header"
import TaskListNumbers from "../Other/TaskListNumbers"

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
