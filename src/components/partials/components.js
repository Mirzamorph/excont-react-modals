/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  TextBox,
  TextArea,
  CheckBox,
  RadioGroup,
  Button as DxButton,
} from 'devextreme-react';

export const Checkbox = ({ title, ...props }) => (
  <div className="form-field form-field-checkbox">
    <div className="field-checkbox">
      <CheckBox {...props} />
      <label>
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

export const RadioButton = (props) => (
  <div className="form-field form-field-radio">
    <div className="field-radio">
      <RadioGroup type="radio" {...props} />
    </div>
  </div>
);

export const Button = ({ className, ...props }) => {
  let classNames = 'btn ';
  if (className) {
    classNames += className;
  }
  return <DxButton className={classNames} {...props} />;
};

export const InputText = ({ placeholder, tip, ...props }) => {
  return (
    <div className="form-field form-field-input">
      <div className="field__input">
        <TextBox id={placeholder} type="text" {...props} />
        <div className="field__placeholder">{placeholder}</div>
      </div>
      {tip && (
        <label htmlFor="placeholder" className="form-field__tip">
          {tip}
        </label>
      )}
    </div>
  );
};

export const Textarea = ({ placeholder, ...props }) => (
  <div className="form-field form-field-textarea">
    <div className="field__input field__textarea">
      <TextArea id={placeholder} type="text" {...props} />
      <div className="field__placeholder">{placeholder}</div>
    </div>
  </div>
);
