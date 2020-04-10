import React from 'react';
import closeIcon from '../assets/img/close.svg';

const Popup = ({ children, title, button }) => {
  let btnClass = 'btn';
  let actionsClass = 'modal__actions';
  if (button) {
    btnClass += ' btn-outline';
    actionsClass += ' modal__actions-space';
  }
  return (
    <div className="modal modal-simple">
      <h2 className="modal__title">{title}</h2>
      <button type="button" className="modal__btn-close">
        <img src={closeIcon} alt="close modal" />
      </button>
      <hr className="modal__line" />
      {children}
      <div className={actionsClass}>
        <button type="button" className={btnClass}>
          Закрыть
        </button>
        {button}
      </div>
    </div>
  );
};

export default Popup;
