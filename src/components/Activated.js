import React from 'react';
import Popup from './partials/Popup';

function Activated() {
  return (
    <div className="container">
      <Popup
        title="Сообщение: учётная запись активирована"
        button={
          <button type="button" className="btn">
            Войти
          </button>
        }
      >
        <p>
          Учётная запись активирована. Для доступа в систему подключите УКЭП и
          нажмите кнопку «Войти», для отмены — «Закрыть».
        </p>
      </Popup>
    </div>
  );
}

export default Activated;
