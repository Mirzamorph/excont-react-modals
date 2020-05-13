import React from 'react';
import closeIcon from '../../assets/img/close.svg';
import { Button } from './components';

const Popup = ({ children, title, button }) => {
  let btnClass = null;
  let actionsClass = 'popup__actions';
  if (button) {
    btnClass = 'btn-outline';
    actionsClass += ' popup__actions-space';
  }
  return (
    <div className="popup">
      <h2 className="popup__title">{title}</h2>
      <button type="button" className="popup__btn-close">
        <img src={closeIcon} alt="close popup" />
      </button>
      <hr className="popup__line" />
      <div className="popup__text">{children}</div>
      <div className={actionsClass}>
        <Button className={btnClass}>Закрыть</Button>
        {button}
      </div>
    </div>
  );
};

export default Popup;
