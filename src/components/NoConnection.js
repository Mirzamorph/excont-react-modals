import React from 'react';
import Popup from './partials/Popup';

function NoConnection() {
  return (
    <div className="container">
      <Popup title="Сообщение: нет связи с сервером ФНС">
        <p>
          Проверить данные пользователя и организации не удалось — сервер ФНС не
          отвечает. Повторите попытку регистрации позже.
        </p>
      </Popup>
    </div>
  );
}

export default NoConnection;
