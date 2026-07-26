const FailedTask = () => {
    return (
        <div className="shrink-0 h-full w-75 bg-red-400 rounded-xl p-5">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
                <h4 className="text-sm">20 Feb 2024</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-shadow-md text-shadow-black/30">Make a Youtube Video</h2>
            <p className="text-sm mt-2 text-shadow-md text-shadow-black/50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus exercitationem officia debitis excepturi rem itaque!
            </p>

            <div className='mt-2'>
                <button className='bg-red-500 w-full py-1 px-2 text-sm rounded'>Failed Task</button>
            </div>
        </div>
    )
}

export default FailedTask
