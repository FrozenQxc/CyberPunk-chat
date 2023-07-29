import React from "react";

export const Register = () => {
  return (
    <div className="formContaiter">
      <div className="formWrapper">
        <span className="logo">CyberPunk-Chat</span>
        <span className="title">Регистрация</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="@email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src="img/avatar.png" />
            <span>Загрузить фото</span>
          </label>
          <button>Sing up</button>
        </form>
        <p>
          У вас есть аккаунта? <a href="/Login">Login</a>
        </p>
        <label htmlFor="">
          <a href="/">Главная страница</a>
        </label>
      </div>
    </div>
  );
};

export default Register;
