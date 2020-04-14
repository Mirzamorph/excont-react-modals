import React from 'react';
import Popup from './partials/Popup';

function Eliminated() {
  return (
    <Popup title="Сообщение: организация ликвидирована">
      <p>
        В базе данных ФНС организация, указанная в УКЭП, ликвидирована или
        находится в состоянии ликвидации. Регистрация сотрудников организации в
        системе невозможно.
      </p>
    </Popup>
  );
}

export default Eliminated;
