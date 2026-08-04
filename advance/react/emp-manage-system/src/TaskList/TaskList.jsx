import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({ data }) => {
    // console.log(data);
    return (
        <div id='tasklist' className="flex items-center justify-between gap-5 flex-nowrap h-[55%] w-full mt-10 overflow-x-auto">
            {
                data.tasks.map((e, idx)=>{
                    if(e.active){
                        return <NewTask key={idx} data={e}/>
                    }
                    if(e.newTask){
                        return <AcceptTask key={idx} data={e}/>
                    }
                    if(e.completed){
                        return <CompleteTask key={idx} data={e}/>
                    }
                    if(e.failed){
                        return <FailedTask key={idx} data={e}/>
                    }
                })
            }
        </div>
    )
}

export default TaskList
