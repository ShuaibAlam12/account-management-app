import React, { useState } from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobNo, setMobNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword && email.trim() !== '') {
      alert("Registered Successfully");
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', name);
      localStorage.setItem('userMobile', mobNo);
      // Redirect to the thank you page
      navigate('/account');
    } else {
      alert("Password or Email not correct");
    }
  };

  return (
    <>
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Mobile No.</label>
            <input
              type="tel"
              className="form-control"
              value={mobNo}
              onChange={(e) => setMobNo(e.target.value)}
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
              required

            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button style={{ marginTop: '20px' }} type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Register;
