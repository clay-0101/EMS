import React from 'react'

const AcceptTask = ({data}) => {
    
    return (
        <div className='h-full w-[350px] bg-[#9cb189] flex-shrink-0 p-5 rounded-xl'>
            <div className='flex justify-between items-center '>
                <h3 className='bg-[#6d805b] px-3 py-1 text-sm rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='flex justify-between mt-4'>
                <button className='py-1 px-2 bg-[#6d805b] text-sm'>Mark as Completed</button>
                <button className='py-1 px-2 bg-[#6d805b] text-sm'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask