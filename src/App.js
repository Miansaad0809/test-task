import { React, useState } from 'react';
import CustomModal from './components/Modal/CustomModal';

function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <CustomModal show={showModal} close={(e)=>setShowModal(e)}/>
    </>
  );
}

export default App;
