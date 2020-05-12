import React, { useState } from 'react';
import Modal from './partials/Modal';
import { RadioButton, Button } from './partials/FormParts';

// modal__radio-block Можно сделать и формой
// Также чтобы все корректно работало, надо будет поставить name
const Signature = () => {
  const [validated, changeValidation] = useState(true);
  const items = new Array(5)
    .fill(
      'ИНН: 7814769285; ООО «Компания «ЭксКонт»; Петров Александр Сергеевич; СНИЛС: 127-028-039 23; Срок действия: 05.12.2017 –04.12.2020; УЦ: ПАО «Ростелеком»',
    )
    .map((title, index) => {
      return (
        <RadioButton
          title={title + index}
          name="radio"
          key={index}
          onClick={() => changeValidation(false)}
        />
      );
    });
  return (
    <Modal title="Электронная подпись">
      <div className="modal__container">
        <p className="modal__text">
          Для дальнейшей работы выберите усиленную квалифицированную электронную
          подпись (УКЭП) из списка:
        </p>
      </div>
      <div className="modal__radio-block">{items}</div>
      <Button className="btn modal__btn-below" disabled={validated}>
        Далее
      </Button>
    </Modal>
  );
};

export default Signature;
