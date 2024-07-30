import React from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
function Thanks() {
    const navigate = useNavigate(); 
    const handleEvent=()=>{
        navigate('/main');
    }
  return (
    <>
    <div className="container">
      <h2 style={{textAlign:'center',marginTop:'10px'}}>Thank You!</h2>
      <p style={{textAlign:'center'}}>Your submission has been received.</p>
      <button style={{textAlign:'center'}} type="button" onClick={handleEvent} className="btn btn-link px-3 me-2">
              Back To Home
            </button>
    </div>
    <Footer />
    </>
  );
}

export default Thanks;
