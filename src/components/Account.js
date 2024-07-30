import React from 'react';

function Account() {
    // Retrieve user data from local storage
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
const userMobile = localStorage.getItem('userMobile');
    return (
        <div className="container">
            <h2 style={{textAlign:'center'}}>Account Details</h2>
            {userEmail ? (
                <div>
                    <p style={{marginLeft:'20px'}}><strong>Email:</strong> {userEmail}</p>
                </div>
            ) : (
                <p>No user data found. Please register first.</p>
            )}
            {userName ? (
                <div>
                    <p style={{ marginLeft: '20px' }}><strong>Name:</strong> {userName}</p>
                </div>
            ) : (
                <p style={{ marginLeft: '20px' }}>No user name found! Please register first.</p>
            )}
            {userMobile ? (
                <div>
                    <p style={{ marginLeft: '20px' }}><strong>Mobile:</strong> {userMobile}</p>
                </div>
            ) : (
                <p style={{ marginLeft: '20px' }}>Mobile No. is Required</p>
            )}
        </div>
    );
}

export default Account;
