import React from 'react';
import Popup from './partials/Popup';
import { Button } from './partials/components';

function Activated() {
  return (
    <Popup
      title="Сообщение: учётная запись активирована"
      button={<Button>Войти</Button>}
    >
      <p>
        Учётная запись активирована. Для доступа в систему подключите УКЭП и
        нажмите кнопку «Войти», для отмены — «Закрыть».
      </p>
    </Popup>
  );
}

export default Activated;
