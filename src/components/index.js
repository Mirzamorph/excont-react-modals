import React from 'react';
import ErrorEmail from './ErrorEmail';
import Login from './Login';
import Signature from './Signature';
import Company from './Company';
import Eliminated from './Eliminated';
import NotMatch from './NotMatch';
import NoConnection from './NoConnection';
import NotActivated from './NotActivated';
import AlreadyActivated from './AlreadyActivated';
import Activated from './Activated';
import NotConfirmed from './NotConfirmed';
import CodeSent from './CodeSent';

const Modals = () => (
  <>
    <Company />
    <hr className="hr" />
    <Signature />
    <hr className="hr" />
    <Login />
    <hr className="hr" />
    <Eliminated />
    <hr className="hr" />
    <NotMatch />
    <hr className="hr" />
    <NoConnection />
    <hr className="hr" />
    <NotActivated />
    <hr className="hr" />
    <AlreadyActivated />
    <hr className="hr" />
    <Activated />
    <hr className="hr" />
    <NotConfirmed />
    <hr className="hr" />
    <CodeSent />
    <hr className="hr" />
    <ErrorEmail />
  </>
);

export default Modals;
