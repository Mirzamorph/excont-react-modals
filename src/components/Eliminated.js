import React from 'react';
import Popup from './partials/Popup';

function Eliminated() {
  return (
    <div className="container">
      <Popup title="Сообщение: организация ликвидирована">
        <p>
          В базе данных ФНС организация, указанная в УКЭП, ликвидирована или
          находится в состоянии ликвидации. Регистрация сотрудников организации
          в системе невозможно.
        </p>
      </Popup>
    </div>
  );
}

export default Eliminated;
