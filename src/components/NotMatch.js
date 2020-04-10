import React from 'react';
import Popup from './partials/Popup';

function NotMatch() {
  return (
    <div className="container">
      <Popup title="Сообщение: информация об организации в УКЭП не совпадает c данными ФНС">
        <p>
          Данные об организации, которые указаны в УКЭП не совпадают с
          информацией из базы ФНС. Для доступа к системе необходимо получить
          усиленную квалифицированную электронную подпись с актуальными данными.
        </p>
      </Popup>
    </div>
  );
}

export default NotMatch;
