const FailedTask = ({data}) => {
    return (
        <div className="shrink-0 h-full w-75 bg-red-800 rounded-xl p-5">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category}</h3>
                <h4 className="text-sm">{data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-shadow-md text-shadow-black/30">{data.taskTitle}</h2>
            <p className="text-sm mt-2 text-shadow-md text-shadow-black/50">{data.taskDescription}</p>

            <div className='mt-2'>
                <button className='bg-red-500 w-full py-1 px-2 text-sm rounded'>Failed Task</button>
            </div>
        </div>
    )
}

export default FailedTask
