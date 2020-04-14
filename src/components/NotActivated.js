import React from 'react';
import Popup from './partials/Popup';

function NotActivated() {
  return (
    <Popup title="Сообщение: учётная запись не активирована">
      <p>
        Данный пользователь уже зарегистрирован в системе. Для доступа в систему
        необходимо активировать учётную запись — нажмите кнопку «Активация», для
        отмены — «Закрыть».
      </p>
    </Popup>
  );
}

export default NotActivated;
