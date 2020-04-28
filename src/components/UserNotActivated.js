import React from 'react';
import DxButton from 'devextreme-react/button';
import Popup from './partials/Popup';
import { InputText } from './partials/FormParts';

function UserNotActivated() {
  return (
    <Popup title="Сообщение: учётная запись не активирована">
      <p>
        Для доступа к системе необходимо подтвердить адрес электронной почты.
        Перейдите на страницу активации и введите код активации, который был
        отправлен на электронную почту, указанную при регистрации:
      </p>
      <DxButton className="btn">Активация</DxButton>
      <p>
        Если письмо с кодом активации не было получено на почту mail@excont.ru,
        нажмите кнопку «Отправить код активации повторно»:
      </p>
      <DxButton className="btn">Отправить код активации повторно</DxButton>
      <p>
        Возможно, E-mail адрес <b>mail@excont.ru</b> был указан неверно. Если
        это так, измените адрес. Код активации будет отправлен по новому адресу
        автоматически, после нажатия на кнопку «Изменить E-mail»:
      </p>
      <div className="popup__two-cols">
        <InputText placeholder="E-mail адрес" value="mail@excont.ru" />
        <DxButton className="btn">Изменить E-mail</DxButton>
      </div>
    </Popup>
  );
}

export default UserNotActivated;
