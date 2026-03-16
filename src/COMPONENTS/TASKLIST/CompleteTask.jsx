import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='h-full w-[350px] bg-[#b189b0] flex-shrink-0 p-5 rounded-xl'>
            <div className='flex justify-between items-center '>
                <h3 className='bg-[#896b88]  px-3 py-1 text-sm rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='mt-2'>
                <button className='w-full bg-[#896b88]'>Completed</button>
            </div>
        </div>

    )
}

export default CompleteTask