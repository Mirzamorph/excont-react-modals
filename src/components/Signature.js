import React, { useState } from 'react';
import Modal from './partials/Modal';
import { RadioButton, Button } from './partials/components';

const data = [
  'ИНН: 7814769285; ООО «Компания «ЭксКонт»; Петров Александр Сергеевич; СНИЛС: 127-028-039 23; Срок действия: 05.12.2017 –04.12.2020; УЦ: ПАО «Ростелеком»',
  'ИНН: 7814769286; ООО «Компания «ЭксКонт»; Петров Александр Сергеевич; СНИЛС: 127-028-039 23; Срок действия: 05.12.2017 –04.12.2020; УЦ: ПАО «Ростелеком»',
  'ИНН: 7814769287; ООО «Компания «ЭксКонт»; Петров Александр Сергеевич; СНИЛС: 127-028-039 23; Срок действия: 05.12.2017 –04.12.2020; УЦ: ПАО «Ростелеком»',
  'ИНН: 7814769288; ООО «Компания «ЭксКонт»; Петров Александр Сергеевич; СНИЛС: 127-028-039 23; Срок действия: 05.12.2017 –04.12.2020; УЦ: ПАО «Ростелеком»',
];
const Signature = () => {
  const [validated, changeValidation] = useState(true);
  return (
    <Modal title="Электронная подпись">
      <div className="modal__container">
        <p className="modal__text">
          Для дальнейшей работы выберите усиленную квалифицированную электронную
          подпись (УКЭП) из списка:
        </p>
      </div>
      <div className="modal__radio-block">
        <RadioButton
          items={data}
          onValueChanged={() => changeValidation(false)}
        />
      </div>
      <Button className="btn modal__btn-below" disabled={validated}>
        Далее
      </Button>
    </Modal>
  );
};

export default Signature;
