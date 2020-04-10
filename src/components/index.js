import React from 'react';
import ErrorEmail from './ErrorEmail';
import Login from './Login';
import Signature from './Signature';
import Company from './Company';

const Modals = () => (
  <>
    <Company />
    <hr className="hr" />
    <Signature />
    <hr className="hr" />
    <Login />
    <hr className="hr" />
    <ErrorEmail />
  </>
);

export default Modals;
