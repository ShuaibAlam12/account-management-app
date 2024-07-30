import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
    const navigate = useNavigate();
    const heroStyle = {
    
        padding: '50px 0',
        textAlign: 'center',
        color: '#343a40'
    };

    const buttonStyle = {
        margin: '10px'
    };

    const handleNavigate = (path) => {
        navigate(path);
    };
    const handleEvent = () => {
        navigate('/login');
    }

    const handleEvent1 = () => {
        navigate('/register');
    }
    const handleEvent2 = () => {
        navigate('/account');
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
            
            <div className="container">
                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                
                <div className="collapse navbar-collapse" id="navbarButtonsExample">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dashboard</a>
                        </li>
                    </ul>
                

                    <div className="d-flex align-items-center">
                        <button type="button" onClick={handleEvent} className="btn btn-link px-3 me-2">
                            Login
                        </button>
                        <button type="button" onClick={handleEvent1} className="btn btn-primary me-3">
                            Register
                        </button>
                        <a onClick={handleEvent2}>Account</a>
                    </div>
                </div>
                
            </div>
    

        </nav>
        <div style={heroStyle} className="container">
                <h1>Welcome to MyApp</h1>
                <p>Your go-to solution for managing accounts with ease.</p>
                <div>
                    <button className="btn btn-primary" style={buttonStyle} onClick={() => handleNavigate('/login')}>
                        Login
                    </button>
                    <button className="btn btn-secondary" style={buttonStyle} onClick={() => handleNavigate('/register')}>
                        Register
                    </button>
                    <button className="btn btn-dark" style={buttonStyle} onClick={() => handleNavigate('/account')}>
                        Account
                    </button>
                </div>
                
            </div>
            <Footer />
        </>
        
    );
}

export default Navbar;
