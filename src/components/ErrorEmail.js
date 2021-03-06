/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Popup from './partials/Popup';
import { Button } from './partials/components';

function ErrorEmail() {
  return (
    <Popup
      button={<Button>Войти</Button>}
      title="Сообщение: указан неверный E-mail"
    >
      <p>
        Адрес <b>mail@excont.ru</b> не найден в базе данных зарегистрированных
        пользователей.
      </p>
      <p>
        Если в E-mail допущена ошибка при регистрации учетной записи, вставьте
        УКЭП и нажмите кнопку «Войти», чтобы изменить E-mail на корректный.
      </p>
      <p>
        Если ошибка допущена при повторной отправке кода активации, нажмите
        кнопку «Закрыть» и введите корректный E-mail в поле «E-mail для
        повторного письма».
      </p>
    </Popup>
  );
}

export default ErrorEmail;
