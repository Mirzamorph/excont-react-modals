import React from 'react';
import Modal from './partials/Modal';
import Promt from './partials/Promt';
import {
  InputText,
  Textarea,
  RadioButton,
  Button,
} from './partials/components';

export const priorities = [
  'Данные указаны правильно',
  'В данных содержится ошибка',
];
const Company = () => (
  <Modal title="Данные о компании">
    <div className="modal__promt">
      <Promt>
        Проверьте данные, полученные из базы данных ФНС. Если они не совпадают с
        актуальными данными, выберите вариант «В данных содержится ошибка».
      </Promt>
    </div>
    <div className="modal__heading">Данные о компании из базы данных ФНС</div>
    <InputText placeholder="ИНН" disabled value="7814769285" />
    <InputText placeholder="КПП" disabled value="781401001" />
    <InputText
      fullwidth
      placeholder="Краткое название организации"
      disabled
      value="ООО «Компания «ЭксКонт»"
    />
    <Textarea
      placeholder="Полное название организации"
      disabled
      value="Общество с ограниченной ответственностью «Компания ЭксКонт»"
    />
    <Textarea
      placeholder="Адрес регистрации"
      disabled
      value="197374, Россия, Санкт-Петербург, Торфяная дорога, д. 7, лит. Ф, оф. 713"
    />
    <div className="modal__radio-group">
      <RadioButton items={priorities} />
    </div>
    <div className="modal__heading">Контактные данные организации</div>
    <div className="modal__center-block">
      <InputText
        placeholder="Номер телефона"
        tip="Используется для контактов"
      />
      <InputText placeholder="E-mail адрес" />
    </div>
    <Button className="modal__btn-below" disabled>
      Далее
    </Button>
  </Modal>
);

export default Company;
