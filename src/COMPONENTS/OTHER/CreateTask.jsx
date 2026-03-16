import Header from '../OTHER/Header'
import AllTask from './AllTask'
import CreateTaskForm from './CreateTaskForm'

const CreateTask = ({data}) => {
  return (
       <div className='h-screen w-full flex bg-[linear-gradient(180deg,hsla(237,96%,80%,1)_57%,hsla(0,0%,100%,1)_57%)]'>
            <div
                className='h-full w-[40%] rounded-br-[5rem] p-5'
                style={{ backgroundImage: "url('/public/AdminPage.jpg')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                <Header data={data}/>
                <div className='mt-40 text-[#16151cdf] w-3/4 '>
                    <h1 className='text-[2rem] leading-10'>!Welcome to,</h1>
                    <h1 className='text-[3rem] font-extrabold '>Management Hub</h1>
                    <h3 className='text-sm font-medium '>Manage employees, monitor activities, and control system settings from one place. Gain insights with real-time analytics, streamline workflows, and ensure smooth operations across your organization.</h3>
                </div>
            </div>
            <div className='h-full w-[60%] flex flex-col items-start justify-end  bg-[white] rounded-tl-[5rem] p-5'>
                <div className='px-10'>
                    <h1 className='text-3xl font-medium text-[#825DA3]'>Workflow Control!</h1>
                    <p className='text-sm font-medium '>Design tasks, streamline operations,and ensure smooth execution across employees.</p>
                </div>
                <CreateTaskForm/>
                <AllTask/>
            </div>
        </div>
  )
}

export default CreateTask