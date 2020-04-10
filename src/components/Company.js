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
      <InputText/>
    </div>
  </Modal>
);

export default Company;
