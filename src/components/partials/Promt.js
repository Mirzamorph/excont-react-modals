import React from 'react';

const Promt = ({ title, children, type = 'warning' }) => (
  <div className={`promt promt-${type}`}>
    {title && <h4 className="promt__title">{title}</h4>}
    <div className="promt__text">{children}</div>
  </div>
);

export default Promt;
