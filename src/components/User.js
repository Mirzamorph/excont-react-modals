import React from 'react';
import Modal from './partials/Modal';
import {
  InputText,
  Textarea,
  RadioButton,
  Checkbox,
  Button,
} from './partials/components';

export const priorities = [
  'Данные указаны правильно',
  'В данных содержится ошибка',
];

const User = () => (
  <Modal title="Данные о пользователе">
    <div className="modal__heading">Данные о пользователе из УКЭП</div>
    <InputText
      fullwidth
      placeholder="Краткое название организации"
      disabled
      text="ООО «Компания «ЭксКонт»"
    />
    <Textarea
      placeholder="Полное название организации"
      disabled
      text="Общество с ограниченной ответственностью «Компания ЭксКонт»"
    />
    <InputText
      fullwidth
      placeholder="ФИО"
      disabled
      text="Петров Иван Андреевич"
    />
    <InputText placeholder="СНИЛС" disabled text="111-345-345 11" />
    <div className="modal__radio-group">
      <RadioButton items={priorities} disabled />
    </div>
    <div className="modal__heading">Контактные данные пользователя</div>
    <div className="modal__two-cols">
      <InputText
        placeholder="Номер телефона"
        tip="Используется для контактов"
      />
      <Checkbox title="Совпадает с контактными данными организации" />
    </div>
    <div className="modal__two-cols">
      <InputText
        placeholder="E-mail адрес"
        tip="Используется для активации учетной записи"
      />
      <Checkbox title="Заполнить из УКЭП" />
    </div>
    <div className="modal__container">
      <Checkbox title="Корректность информации подтверждаю и даю согласие на обработку данных" />
    </div>
    <Button className="modal__btn-below" disabled>
      Далее
    </Button>
  </Modal>
);

export default User;
