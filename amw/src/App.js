import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import config from './aws-exports';
import ModalNotification from './components/ModalNotification';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import StoryEditPage from './pages/StoryEditPage';
import CreateStory from './components/CreateStory';
import './styles/App.css';

Amplify.configure(config);

function App() {
  const [notification, setNotification] = useState(null);

  const handleCloseNotification = () => setNotification(null);

  const showNotification = (message, type, onConfirm = null) => {
    setNotification({ message, type, onConfirm });
  };

  return (
    <Router>
      <div className="app-container">
        <Header />

        <ModalNotification
          notification={notification}
          onClose={handleCloseNotification}
        />

        <Routes>
          <Route path="/" element={<Dashboard showNotification={showNotification} />} />
          <Route path="/create-story" element={<CreateStory showNotification={showNotification} />} />
          <Route path="/story/:id" element={<StoryEditPage showNotification={showNotification} />} />
          <Route path="*" element={<div className="not-found">404 Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default function Root() {
  return (
    <Authenticator>
      <App />
    </Authenticator>
  );
}