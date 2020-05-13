import React from 'react';
import Promt from './partials/Promt';
import Modal from './partials/Modal';
import { InputText, Button } from './partials/components';

const Activation = () => (
  <Modal title="Активация учетной записи">
    <div className="modal__promt">
      <Promt>
        Введите код активации из письма, которое было отправлено на e-mail,
        указанный при регистрации пользователя и нажмите «Активировать учетную
        запись»
      </Promt>
    </div>
    <div className="modal__two-cols">
      <InputText placeholder="Код активации" />
      <button type="button" className="link-btn">
        &lt; Активировать учетную запись
      </button>
    </div>
    <div className="modal__text">
      Если вы не получили письмо с кодом активации, вы можете запросить
      повторную отправку — введите E-mail, который вы указывали при регистрации
      пользователя и нажмите «Отправить код активации»:
    </div>
    <div className="modal__two-cols">
      <InputText placeholder="E-mail для повторного письма" />
      <button type="button" className="link-btn">
        &lt; Отправить код активации
      </button>
    </div>
    <Button className="modal__btn-below" disabled>
      Далее
    </Button>
  </Modal>
);

export default Activation;
