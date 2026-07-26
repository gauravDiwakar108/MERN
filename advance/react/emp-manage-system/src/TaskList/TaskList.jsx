import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className="flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full mt-10 overflow-x-auto">
            {
                data?.tasks.map((e, idx)=>{
                    if(e.newTask){
                        return <NewTask key={idx}/>
                    }
                    if(e.active){
                        return <AcceptTask key={idx}/>
                    }
                    if(e.completed){
                        return <CompleteTask key={idx}/>
                    }
                    if(e.failed){
                        return <FailedTask key={idx}/>
                    }
                })
            }
        </div>
    )
}

export default TaskList
