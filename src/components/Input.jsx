import React from 'react'

const input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Напишите что нибудь...' />
      <div className='send'>
        <img src="" alt="" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src="img/avatar.png" alt="" />
          <img src="img/avatar.png" alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default input