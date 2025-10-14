import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

const Header = () => {
    // Correctly extract the signOut function from the Amplify Authenticator context
    const { signOut } = useAuthenticator((context) => [context.signOut]);

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
            {/* Logo/Title linked to the Dashboard */}
            <h1 className="text-2xl font-bold">
                <Link to="/" className="hover:text-amber-400 transition-colors">
                    AMW Story Generator
                </Link>
            </h1>

            <nav className="flex space-x-6 items-center">
                {/* Dashboard Link */}
                <Link 
                    to="/" 
                    className="text-sm font-medium hover:text-amber-400 transition-colors"
                >
                    Dashboard
                </Link>
                
                {/* ⚠️ UPDATED LINK: Points to the dedicated story creation route */}
                <Link 
                    to="/create-story" 
                    className="text-sm font-medium text-lime-400 hover:text-lime-200 transition-colors"
                >
                    + New Story
                </Link>

                {/* Sign Out Button */}
                <button
                    onClick={signOut}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition duration-150 ease-in-out shadow-md"
                >
                    Sign Out
                </button>
            </nav>
        </header>
    );
};

export default Header;