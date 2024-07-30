import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    const footerStyle = {
        backgroundColor: '#343a40',
        color: '#ffffff',
        padding: '20px 0',
        textAlign: 'center',
        position: 'fixed',
        height:'120px',
        width: '100%',
        bottom: 0
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <p>Thank you, Chaintech Network, for considering my application.</p>
                <p>&copy; {new Date().getFullYear()} Shuaib Alam</p>
            </div>
        </footer>
    );
}

export default Footer;
