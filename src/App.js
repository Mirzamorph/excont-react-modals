import React from 'react';
import Modals from './components';
import Header from './components/Header';
import Footer from './components/Footer';

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
