import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import '../styles/Header.css';
import logo from '../assets/logo.png'; // Make sure to place your logo in src/assets/

const Header = () => {
    const { signOut } = useAuthenticator((context) => [context.signOut]);

    return (
        <header className="app-header">
            <div className="header-container">
                {/* Logo and Title */}
                <Link to="/" className="header-logo-section">
                    <img src={logo} alt="A Moment With Logo" className="header-logo" />
                    <span className="header-title">A Moment With</span>
                </Link>

                {/* Navigation */}
                <nav className="header-nav">
                    <Link to="/" className="nav-link">
                        Dashboard
                    </Link>

                    <button onClick={signOut} className="sign-out-button">
                        Sign Out
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;