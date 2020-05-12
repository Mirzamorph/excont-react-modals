import React from 'react';
import Modal from './partials/Modal';
import {
  InputText,
  Textarea,
  RadioButton,
  Checkbox,
} from './partials/FormParts';
const items = {
  right: true,
  left: false
}
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
      <RadioButton items={items} title="Данные указаны правильно" name="radio" />
      <RadioButton items={items} title="В данных содержится ошибка" name="radio" />
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
    <button type="button" className="btn modal__btn-below" disabled>
      Далее
    </button>
  </Modal>
);

export default User;
