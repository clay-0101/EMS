import React, { useState } from 'react'

const Login = ({loginHandle}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(`Your Credentials Are -- \nEmail:${email} \nPassCode:${password}`)

    loginHandle(email , password)
    setEmail('')
    setPassword('')
  }
  return (
    <div className='h-screen w-full relative flex justify-center items-center ' style={{backgroundImage: "url('/loginpage.svg')", backgroundSize:'cover'}}>
        <div className='text-black h-auto  w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] py-18 bg-white rounded-3xl  md:absolute top-1/6 left-2/12 flex flex-col justify-center gap-5 items-center'>

        <h1 className='font-extrabold text-3xl text-center'>Employee / Admin Login</h1>
        <p className='text-center font-light text-[15px]  px-10'>Log in with your credentials to proceed and manage<br/>system resources.</p>

        <form 
        className='flex flex-col justify-center items-center mt-5'
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        >
          <input required 
          type="email" 
          value={email}
          placeholder='Enter Your Email' 
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          className='h-12 w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-[23vw] outline-none border-1 border-gray-300 px-4 rounded mb-5' />

          <input required 
          type="password" 
          value={password}
          placeholder='Enter Your Passcode' 
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          className='h-12 w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-[23vw] outline-none border-1 border-gray-300 px-4 rounded mb-5' />

          <button className='h-12 w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-[23vw] outline-none border-1 border-gray-300 px-4 rounded mb-5 bg-[#FD914D] font-medium text-lg active:scale-95'>Log in</button>
        </form>
        </div>
    </div>
  )
}

export default Login
