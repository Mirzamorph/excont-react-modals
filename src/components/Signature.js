import React from 'react';
import Modal from './partials/Modal';
import { RadioButton } from './partials/FormParts';

// modal__radio-block Можно сделать и формой
// Также чтобы все корректно работало, надо будет поставить name
const Signature = () => (
  <Modal title="Электронная подпись">
    <div className="modal__container">
      <p className="modal__text">
        Для дальнейшей работы выберите усиленную квалифицированную электронную
        подпись (УКЭП) из списка:
      </p>
    </div>
    <div className="modal__radio-block">
      <RadioButton
        title="ИНН: 7814769285; ООО «Компания «ЭксКонт»; Петров Александр Сергеевич; СНИЛС: 127-028-039 23; Срок действия: 05.12.2017 –04.12.2020; УЦ: ПАО «Ростелеком»"
        name="radio"
      />
      <RadioButton
        title="ИНН: 7814769281; ООО «Компания «ЭксКонт»; Петров Александр Сергеевич; СНИЛС: 127-028-039 23; Срок действия: 05.12.2017 –04.12.2020; УЦ: ПАО «Ростелеком»"
        name="radio"
      />
      <RadioButton
        title="ИНН: 7814769282; ООО «Компания «ЭксКонт»; Петров Александр Сергеевич; СНИЛС: 127-028-039 23; Срок действия: 05.12.2017 –04.12.2020; УЦ: ПАО «Ростелеком»"
        name="radio"
      />
      <RadioButton
        title="ИНН: 7814769283; ООО «Компания «ЭксКонт»; Петров Александр Сергеевич; СНИЛС: 127-028-039 23; Срок действия: 05.12.2017 –04.12.2020; УЦ: ПАО «Ростелеком»"
        name="radio"
      />
      <RadioButton
        title="ИНН: 7814769284; ООО «Компания «ЭксКонт»; Петров Александр Сергеевич; СНИЛС: 127-028-039 23; Срок действия: 05.12.2017 –04.12.2020; УЦ: ПАО «Ростелеком»"
        name="radio"
      />
    </div>
    <button type="button" className="btn modal__btn-below">
      Далее
    </button>
  </Modal>
);

export default Signature;