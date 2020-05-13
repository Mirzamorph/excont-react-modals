import React from 'react';
import Popup from './partials/Popup';
import { Button } from './partials/components';

function AlreadyActivated() {
  return (
    <Popup
      title="Сообщение: учетная запись уже активирована"
      button={<Button>Войти</Button>}
    >
      <p>
        Учетная запись уже активирована. Для входа в систему подключите УКЭП и
        нажмите кнопку «Войти», для отмены — «Закрыть».
      </p>
    </Popup>
  );
}

export default AlreadyActivated;
