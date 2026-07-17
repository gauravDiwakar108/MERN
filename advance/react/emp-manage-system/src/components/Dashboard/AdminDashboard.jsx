import AllTask from "../Other/AllTask"
import CreateTask from "../Other/CreateTask"
import Header from "../Other/Header"

const AdminDashboard = () => {
    return (
        <div className="h-screen w-full p-7">
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard
