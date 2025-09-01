import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import EmergencyPage from './pages/EmergencyPage';
import HospitalsPage from './pages/HospitalsPage';
import ProfilePage from './pages/ProfilePage';
import ConsultationPage from './pages/ConsultationPage';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header language={language} setLanguage={setLanguage} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage language={language} />} />
            <Route path="/emergency" element={<EmergencyPage language={language} />} />
            <Route path="/hospitals" element={<HospitalsPage language={language} />} />
            <Route path="/consultation" element={<ConsultationPage language={language} />} />
            <Route path="/profile" element={<ProfilePage language={language} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;