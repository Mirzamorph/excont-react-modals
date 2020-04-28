import React from 'react';
import DxButton from 'devextreme-react/button';
import Modal from './partials/Modal';
import Promt from './partials/Promt';
import { InputText, Textarea, RadioButton } from './partials/FormParts';

const Test = () => (
  <Modal title="Данные о компании">
    <div className="modal__heading">Данные о компании из базы данных ФНС</div>
    <InputText placeholder="ИНН" />
    <button type="button" className="btn">
      Изменить E-mail
    </button>
    <DxButton className="btn" text="Изменить E-mail" disabled />
    <DxButton className="btn btn-outline" text="Изменить E-mail" />
    <DxButton text="Изменить E-mail" />
  </Modal>
);

export default Test;
