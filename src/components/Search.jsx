import React from 'react'

const Search = () => {
  return (
    <div className='search'>
    <div className="searchForm">
      <input type="text" placeholder='Найти пользователя' />
    </div>
    <div className='userChat'>
      <img src="https://i.pinimg.com/564x/e6/8b/1c/e68b1c081c015e14fb725f784333d1b0.jpg" alt="" />
      <div className="userChatInfo">
        <span>Jane</span>
      </div>
    </div>
  </div>
  )
}

export default Search