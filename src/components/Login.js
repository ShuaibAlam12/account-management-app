import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() === '') {
      alert("Please enter an email address");
      return; // Exit the function if email is empty
    }
    
    // Proceed with login logic if email is provided
    
    navigate('/thanks');
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="form-group mb-3">
          <label >Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </div>
        
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
