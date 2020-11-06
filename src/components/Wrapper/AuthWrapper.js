import React from 'react';
import './AuthWrapper.css';

const AuthWrapper = ({ headline, children }) => {
  return (
    <div className="auth-container">
      <div className="auth-wrap">
        {headline && <h2 className="auth-title">{headline}</h2>}

        <div className="children">
          {children && children}
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;