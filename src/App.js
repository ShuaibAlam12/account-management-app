import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import Thanks from './components/Thanks';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/main" element={<Main />} />
          <Route path="/footer" element={<Footer />}/>
          <Route path="*" element={<Navigate to="/main" />} /> {/* Redirect for undefined paths */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
