import React from 'react'

const TaskListNumber = ({data}) => {
    return (
        <div className='flex screen justify-between gap-5 mt-10'>
            <div className=' py-6 px-9 w-[45%] bg-[#C7D0BC] text-[#2C2C2C] rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className=' py-6 px-9 w-[45%] bg-[#DBECFE] text-[#2C2C2C] rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
                <h3 className='text-xl font-medium'>Active Task</h3>
            </div>
            <div className=' py-6 px-9 w-[45%] bg-[#F7D78C] text-[#2C2C2C] rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
                <h3 className='text-xl font-medium'>Complete Task</h3>
            </div>
            <div className=' py-6 px-9 w-[45%] bg-[#A2A6FD] text-[#2C2C2C] rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>

        </div>
    )
}

export default TaskListNumber