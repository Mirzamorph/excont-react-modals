import React from 'react';
import Popup from './partials/Popup';

function NotConfirmed() {
  return (
    <Popup title="Сообщение: информация об организации не подтверждена">
      <p>
        Работа в системе возможно только в том случае, если данные в базе ФНС
        актуальны. Если актуальность не подтверждена, обратитесь в ФНС для
        исправления ошибки.
      </p>
    </Popup>
  );
}

export default NotConfirmed;
