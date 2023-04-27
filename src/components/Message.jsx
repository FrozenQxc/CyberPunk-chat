import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://i.pinimg.com/564x/e6/8b/1c/e68b1c081c015e14fb725f784333d1b0.jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://i.pinimg.com/564x/e6/8b/1c/e68b1c081c015e14fb725f784333d1b0.jpg" alt="" />
      </div>
    </div>
  )
}

export default Message