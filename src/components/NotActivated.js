import React from 'react';
import Popup from './partials/Popup';

function NotActivated() {
  return (
    <div className="container">
      <Popup title="Сообщение: учётная запись не активирована">
        <p>
          Данный пользователь уже зарегистрирован в системе. Для доступа в
          систему необходимо активировать учётную запись — нажмите кнопку
          «Активация», для отмены — «Закрыть».
        </p>
      </Popup>
    </div>
  );
}

export default NotActivated;
