import React from 'react';
import loginIcon from '../../assets/img/login-icon.svg';

const Login = () => (
  <>
    <div className="login-modal">
      <h1 className="login-modal__title">Вход</h1>
      <div className="login-modal__subtitle">
        Идентификация в целях экспортного контроля
      </div>
      <img className="login-modal__icon" src={loginIcon} alt="login" />
      <div className="login-modal__text">
        Присоедините к компьютеру носитель ключа электронной подписи.
      </div>
      <button type="button" className="btn login-modal__btn">
        Вход
      </button>
      <button type="button" className="btn login-modal__btn">
        Регистрация
      </button>
      <button type="button" className="link-btn login-modal__link-btn">
        Активация
      </button>
    </div>
    <button type="button" className="link-btn login-modal__link-back-btn">
      Назад
    </button>
  </>
);

export default Login;
