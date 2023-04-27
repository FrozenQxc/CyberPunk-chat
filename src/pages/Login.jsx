import React from 'react'

export const Login = () => {
  return (
    <div className='formContaiter'>
        <div className="formWrapper">
            <span className='logo'>CyberPunk-Chat</span>
            <span className='title'>Регистрация</span>
            <form >
                <input type="email" placeholder='@email'/>
                <input type="password" placeholder='password'/>
                <button>Войти</button>  
            </form> 
            <p>У вас нет аккаунта? Register</p>   
        </div>    
    </div>
  )
}

export default Login;
