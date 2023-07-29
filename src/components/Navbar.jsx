import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>CyberPunk-Chat</span>
      <div className='user'>
        <img src="https://i.pinimg.com/564x/63/ca/76/63ca7619c901a81e894586f072c2b848.jpg" alt="" />
        <span>Джонни Сильверхенд</span>
        <button> <a href='/Register'> Выйти</a></button>
      </div>
    </div>
  )
}

export default Navbar