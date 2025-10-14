import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Your main application component
import { Amplify } from 'aws-amplify'; // Core Amplify library

// 1. Get your configuration file (path may vary)
// You may be using aws-exports.js or amplifyconfiguration.json
import config from './amplifyconfiguration.json'; 

// 2. CRITICAL: Initialize Amplify
// If this line is missing or config is invalid, the app will fail.
Amplify.configure(config); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
