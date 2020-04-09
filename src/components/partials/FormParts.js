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
    {title && <div className="form-field__title">{title}</div>}
  </div>
);

export const RadioButton = ({ title, ...props }) => (
  <div className="form-field">
    <div className="form-field__radio field-radio">
      <input id={title} type="radio" {...props} />
      <label htmlFor={title} />
    </div>
    {title && <div className="form-field__title">{title}</div>}
  </div>
);

export const InputText = ({ label }) => (
  <div className="form-field">
    <div className="form-field__input">
      <input id={label} type="text" />
      <label htmlFor={label} />
    </div>
  </div>
);
