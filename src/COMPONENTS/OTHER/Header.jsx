import { useState } from "react"

const Header = ({data}) => {
  const userName = data?.firstName || 'user'
  const logOutHadle = () => {
    localStorage.setItem('logedInUser', '')
    window.location.reload()
  }



  return (
    <div className='flex items-center justify-between w-full '>
      <h1 className='text-2xl font-medium'>Hello, <br /><span className='text-3xl font-semibold'>{userName} 👋</span></h1>
      <button
        onClick={logOutHadle}
        className='bg-red-500 px-5 py-2 text-lg font-medium text-[#F6F1EB] rounded-sm active:scale-95'>Log Out</button>
    </div>
  )
}

export default Header