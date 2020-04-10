import React from 'react';
import Popup from './partials/Popup';

function CodeSent() {
  return (
    <div className="container">
      <Popup title="Сообщение: письмо с кодом активации отправлено">
        <p>
          Письмо с кодом активации отправлено на адрес <b>mail@excont.ru</b>.
          Если вы не получили письмо в течении 15 минут, проверьте настройки
          спам-фильтра почтового ящика или почтового клиента.
        </p>
      </Popup>
    </div>
  );
}

export default CodeSent;
