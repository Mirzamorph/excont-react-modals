/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// Временно поставил везде заголовок как идентификатор, чтобы работал label
export const Checkbox = ({ title, ...props }) => (
  <div className="form-field">
    <div className="form-field__checkbox field-checkbox">
      <input id={title} type="checkbox" {...props} />
      <label htmlFor={title}>
        <svg
          width="13"
          height="10"
          viewBox="0 0 13 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 3.4L5.85496 9.3L13 2.1L10.916 0L5.85496 5.1L2.08397 1.2L0 3.4Z"
            fill="white"
          />
        </svg>
      </label>
    </div>
    {title && (
      <label htmlFor={title} className="form-field__title">
        {title}
      </label>
    )}
  </div>
);

export const RadioButton = ({ title, ...props }) => (
  <div className="form-field">
    <div className="form-field__radio field-radio">
      <input id={title} type="radio" {...props} />
      <label htmlFor={title} />
    </div>
    {title && (
      <label htmlFor={title} className="form-field__title">
        {title}
      </label>
    )}
  </div>
);

// Я сделал плейсхолдер выезжающим с помощью селектора :not(:placeholder-shown)
// В идеале нужно сделать при клике, но так как я не знаю, как все это
// будет интегрироваться, я решил, что так оставить лучше
export const InputText = ({ placeholder, tip, error, ...props }) => (
  <div className="form-field">
    <div className="form-field__input field__input">
      <input id={placeholder} type="text" placeholder=" " {...props} />
      <label htmlFor={placeholder}>{placeholder}</label>
    </div>
    {tip && (
      <label htmlFor="placeholder" className="tip">
        {tip}
      </label>
    )}
  </div>
);
