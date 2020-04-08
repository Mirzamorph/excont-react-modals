import React from 'react';
import Modal from '../Modal';

function ErrorEmail() {
  return (
    <div className="container">
      <Modal
        button={
          <button type="button" className="btn">
            Войти
          </button>
        }
      >
        <div className="modal__text">
          <p>
            Адрес <b>mail@excont.ru</b> не найден в базе данных
            зарегистрированных пользователей.
          </p>
          <p>
            Если в E-mail допущена ошибка при регистрации учетной записи,
            вставьте УКЭП и нажмите кнопку «Войти», чтобы изменить E-mail на
            корректный.
          </p>
          <p>
            Если ошибка допущена при повторной отправке кода активации, нажмите
            кнопку «Закрыть» и введите корректный E-mail в поле «E-mail для
            повторного письма».
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default ErrorEmail;
