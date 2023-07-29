import React from "react";

export const Login = () => {
  return (
    <div className="formContaiter">
      <div className="formWrapper">
        <span className="logo">CyberPunk-Chat</span>
        <span className="title">Регистрация</span>
        <form>
          <input type="email" placeholder="@email" />
          <input type="password" placeholder="password" />
          <button>Войти</button>
        </form>
        <p>
          У вас нет аккаунта? <a href="/Register">Register</a>
        </p>
        <label htmlFor="">
          <a href="/">Главная страница</a>
        </label>
      </div>
    </div>
  );
};

export default Login;
