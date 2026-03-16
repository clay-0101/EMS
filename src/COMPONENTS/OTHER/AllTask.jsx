import React, { useContext } from 'react'
import { AuthContext } from '../../CONTEXT/AuthProvider'

const AllTask = () => {
    const {userData} = useContext(AuthContext)

    return (
        <div className='w-full h-[250px] bg-[#080834] px-5 py-2 rounded-xl'>
            <h1 className='text-[#A17BBC] p-2 text-2xl text-center'>- - Work Progress Sheet - -</h1>
            <div className='flex justify-between items-center rounded bg-gray-200 px-4 py-2 mb-2 font-bold text-white'>
                <h2 className='w-1/9 bg-[#080834] text-center'>NAME</h2>
                <h3 className='w-1/5 bg-[#080834] text-center'>NEW TASK</h3>
                <h5 className='w-1/5 bg-[#080834] text-center'>ACCEPT TASK</h5>
                <h5 className='w-1/4 bg-[#080834] text-center'>COMPLETED TASK</h5>
                <h5 className='w-1/5 bg-[#080834] text-center'>FAILED TASK</h5>
            </div>
            <div id="AllTask" className='h-[60%] overflow-y-auto'>
                {userData.employeesData.map((elem,idx) => {
                    return (
                        <div key={idx} className='flex justify-between items-center gap-5 rounded bg-gray-200 px-4 py-2 mb-2'>
                            <h2 className='w-1/9 text-center'>{elem.firstName}-{elem.Id}</h2>
                            <h3 className='w-1/5 bg-[#89AFB1] text-center'>{elem.taskNumbers.newTask}</h3>
                            <h5 className='w-1/5 bg-[#9cb189] text-center'>{elem.taskNumbers.active}</h5>
                            <h5 className='w-1/4 bg-[#b189b0] text-center'>{elem.taskNumbers.completed}</h5>
                            <h5 className='w-1/5 bg-[#9a89b1] text-center'>{elem.taskNumbers.failed}</h5>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default AllTask