import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='h-full w-[350px] bg-[#89AFB1] flex-shrink-0 p-5 rounded-xl'>
            <div className='flex justify-between items-center '>
                <h3 className='bg-[#6d8b8d] px-3 py-1 text-sm rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='flex justify-between mt-4'>
                <button className='bg-[#6d8b8d]' >Accept Task</button>
                
            </div>
        </div>
    )
}

export default NewTask