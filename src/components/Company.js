import React from 'react';
import Modal from './partials/Modal';
import Promt from './partials/Promt';
import { InputText, RadioButton } from './partials/FormParts';

const Company = () => (
  <Modal title="Данные о компании">
    <div className="modal__container">
      <Promt>
        Проверьте данные, полученные из базы данных ФНС. Если они не совпадают с
        актуальными данными, выберите вариант «В данных содержится ошибка».
      </Promt>
      <div className="modal__heading">Данные о компании из базы данных ФНС</div>
      <InputText placeholder="ИНН" disabled value="7814769285" />
      <InputText placeholder="КПП" disabled value="781401001" />
      <InputText
        className="class"
        placeholder="Краткое название организации"
        disabled
        value="ООО «Компания «ЭксКонт»"
      />
      <InputText
        placeholder="Полное название организации"
        disabled
        value="Общество с ограниченной ответственностью «Компания Общество с ограниченной ответственностью «Компания
        «ЭксКонт»«ЭксКонт»"
      />
      <InputText
        placeholder="Адрес регистрации"
        disabled
        value="197374, Россия, Санкт-Петербург, Торфяная дорога, д. 7, лит. Ф, оф. 713"
      />
    </div>
  </Modal>
);

export default Company;
