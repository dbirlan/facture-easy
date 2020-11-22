import React from 'react';

import Form from './components/Form';
import Responsiveh1 from './components/materialUI/Responsiveh1';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Responsiveh1 text="Facture Easy"></Responsiveh1>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
