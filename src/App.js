import React from 'react';
import Modals from './components';
import Header from './components/Header';
import Footer from './components/Footer';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Modals />
      </div>
      <Footer />
    </>
  );
}

export default App;
