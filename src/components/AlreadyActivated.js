import React from 'react';
import Popup from './partials/Popup';

function AlreadyActivated() {
  return (
    <Popup
      title="Сообщение: учетная запись уже активирована"
      button={
        <button type="button" className="btn">
          Войти
        </button>
      }
    >
      <p>
        Учетная запись уже активирована. Для входа в систему подключите УКЭП и
        нажмите кнопку «Войти», для отмены — «Закрыть».
      </p>
    </Popup>
  );
}

export default AlreadyActivated;
