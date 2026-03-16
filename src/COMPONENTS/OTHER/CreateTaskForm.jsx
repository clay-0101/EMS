import { useContext, useState } from "react"
import { AuthContext } from "../../CONTEXT/AuthProvider"
import js from "@eslint/js"

const CreateTaskForm = () => {
    const [taskTitle, settaskTitle] = useState('')
    const [date, setDate] = useState('')
    const [assign, setAssign] = useState('')
    const [category, setCategory] = useState('')
    const [taskDescription, setDescription] = useState('')
    // const [newTask, setNewTask] = useState({})
    const {userData, updateUserData} = useContext(AuthContext)

    
    const submitHandler = (e) => {
        e.preventDefault()
        let taskObj = {
            taskTitle, date, category, taskDescription,
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false,
        }
   
        const updatedEmpData = userData.employeesData.map(emp=>{
            if(emp.Id == assign){
                let updateTask = [...emp.tasks,taskObj]
                return {
                    ...emp ,
                    tasks : updateTask ,
                    taskNumbers : {
                        active : updateTask.filter(t => t.active).length,
                        newTask : updateTask.filter(t => t.newTask).length,
                        completed : updateTask.filter(t => t.completed).length,
                        failed : updateTask.filter(t => t.failed).length
                    }
                   
                }}
            return emp 

        })
        console.log(updatedEmpData)
        localStorage.setItem('Employees', JSON.stringify(updatedEmpData))
        updateUserData(updatedEmpData)

        setAssign('')
        setCategory('')
        setDate('')
        settaskTitle('')
        setDescription('')

    }

    return (
        <div className='w-full'>
            <form
                onSubmit={(e) => {

                    submitHandler(e)
                }}
                className=' w-full flex flex-wrap items-start justify-between text-black  px-10 py-7'>
                <div className='w-1/2 flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-2xl font-medium'>Task Title</h3>
                        <input
                            type="text"
                            value={taskTitle}
                            onChange={(e) => {
                                settaskTitle(e.target.value)
                            }}
                            placeholder='Make a UI design'
                            className='w-[20vw] h-[2.5vw] px-3 border-1 border-gray-500 outline-none rounded-sm' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h3 className='text-2xl font-medium'>Date</h3>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value)
                            }}
                            className='w-[20vw] h-[2.5vw] px-3 border-1 border-gray-500 outline-none rounded-sm' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h3 className='text-2xl font-medium'>Asign To</h3>
                        <input
                            type="text"
                            value={assign}
                            onChange={(e) => {
                                setAssign(e.target.value)
                            }}
                            placeholder='Enter Employee Id'
                            className='w-[20vw] h-[2.5vw] px-3 border-1 border-gray-500 outline-none rounded-sm' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h3 className='text-2xl font-medium'>Category</h3>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            placeholder='Design,dev,etc'
                            className='w-[20vw] h-[2.5vw] px-3 border-1 border-gray-500 outline-none rounded-sm' />
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-1'>
                    <h3 className='text-2xl font-medium  rounded-sm '>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        className='h-[20.2vw] w-full border-1 border-gray-600 outline-none rounded-sm' />
                </div>
                
                <button className='h-[2.5vw] w-full bg-[#999FFD] mt-5 text-2xl active:scale-95 text-[#1D1C22] rounded-sm'>Create Task</button>
            </form>
        </div>
    )
}

export default CreateTaskForm