import React from 'react';
import DxButton from 'devextreme-react/button';
import closeIcon from '../../assets/img/close.svg';

const Popup = ({ children, title, button }) => {
  let btnClass = 'btn';
  let actionsClass = 'popup__actions';
  if (button) {
    btnClass += ' btn-outline';
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
        <DxButton className={btnClass}>Закрыть</DxButton>
        {button}
      </div>
    </div>
  );
};

export default Popup;
