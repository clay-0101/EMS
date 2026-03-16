import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    return (
        <div id='taskList' className='flex items-center justify-start flex-nowrap overflow-x-auto gap-5 h-[55%] w-full text-black mt-10 py-5'>
           {data.tasks.map((e, idx) => {
    return (
        <React.Fragment key={idx}>
            {/* New Task ka card alag se render hoga */}
            {e.newTask && <NewTask data={e} />}
            
            {/* Active Task ka card alag se render hoga */}
            {e.active && <AcceptTask data={e} />}
            
            {/* Completed Task ka card alag se render hoga */}
            {e.completed && <CompleteTask data={e} />}
            
            {/* Failed Task ka card alag se render hoga */}
            {e.failed && <FailedTask data={e} />}
        </React.Fragment>
    )
})}
        </div>
    )
}

export default TaskList