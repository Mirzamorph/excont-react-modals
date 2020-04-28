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
import User from './User';
import Activation from './Activation';
import UserNotActivated from './UserNotActivated';
import NoUkep from './NoUkep';
import Test from './Test';

const Modals = () => (
  <>
    <Activation />
    <hr className="hr" />
    <Test />
    <hr className="hr" />
    <NoUkep />
    <hr className="hr" />
    <UserNotActivated />
    <hr className="hr" />
    <User />
    <hr className="hr" />
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
