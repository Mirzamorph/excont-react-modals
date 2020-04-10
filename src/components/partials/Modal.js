import React from 'react';
import backIcon from '../../assets/img/modal-back-icon.svg';

const Modal = ({ handlerBack = () => {}, title, button, children }) => (
  <div className="modal">
    <div className="modal__header">
      <button type="button" className="modal__btn-back" onClick={handlerBack}>
        <img src={backIcon} alt="back" />
      </button>
      <h1 className="modal__title">{title}</h1>
    </div>
    {children}
  </div>
);

export default Modal;
