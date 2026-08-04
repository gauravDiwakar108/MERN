import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext);

  // console.log(admin);
  // console.log(userData);

  return (

    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-60">
      <div className="py-1 px-4 flex justify-between rounded mb-2">
        <h2 className='w-1/6 border border-emerald-600 rounded px-2'>Employee Name</h2>
        <h3 className='w-1/5 border border-blue-800 rounded px-2'>New Task</h3>
        <h5 className='w-1/5 border border-yellow-700 rounded px-2'>Active Task</h5>
        <h5 className='w-1/5 border border-green-800 rounded px-2'>Completed</h5>
        <h5 className='w-1/5 border border-red-800 rounded px-2'>Failed</h5>
      </div>

      <div className='h-[80%] overflow-auto scrollbar-none'>
        {
          userData.map((e, idx) => {
            return <div key={idx} className="bg-gray-900 py-1 px-4 flex justify-between rounded mb-2">
              <h2 className='w-1/6 bg-emerald-600 rounded px-2 hover:scale-105 transition-all ease-in-out duration-150'>{e.name}</h2>
              <h3 className='w-1/5 bg-blue-800 rounded px-2 hover:scale-105 transition-all ease-in-out duration-150'>{e.taskCounts.newTask}</h3>
              <h5 className='w-1/5 bg-yellow-700 rounded px-2 hover:scale-105 transition-all ease-in-out duration-150'>{e.taskCounts.active}</h5>
              <h5 className='w-1/5 bg-green-800 rounded px-2 hover:scale-105 transition-all ease-in-out duration-150'>{e.taskCounts.completed}</h5>
              <h5 className='w-1/5 bg-red-800 rounded px-2 hover:scale-105 transition-all ease-in-out duration-150'>{e.taskCounts.failed}</h5>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default AllTask
