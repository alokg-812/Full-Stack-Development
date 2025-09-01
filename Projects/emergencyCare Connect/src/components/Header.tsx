import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Phone, MapPin, User, MessageCircle, Globe } from 'lucide-react';

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const location = useLocation();

  const translations = {
    en: {
      home: 'Home',
      emergency: 'Emergency',
      hospitals: 'Hospitals',
      consultation: 'Consultation',
      profile: 'Profile'
    },
    hi: {
      home: 'होम',
      emergency: 'आपातकाल',
      hospitals: 'अस्पताल',
      consultation: 'परामर्श',
      profile: 'प्रोफाइल'
    }
  };

  const t = translations[language as keyof typeof translations];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg border-b-4 border-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-red-500 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">EmergencyCare</h1>
              <p className="text-sm text-red-600">Connect</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-red-600 bg-red-50' 
                  : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              <Heart className="h-4 w-4" />
              <span>{t.home}</span>
            </Link>
            
            <Link
              to="/emergency"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/emergency') 
                  ? 'text-red-600 bg-red-50' 
                  : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>{t.emergency}</span>
            </Link>
            
            <Link
              to="/hospitals"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/hospitals') 
                  ? 'text-red-600 bg-red-50' 
                  : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              <MapPin className="h-4 w-4" />
              <span>{t.hospitals}</span>
            </Link>
            
            <Link
              to="/consultation"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/consultation') 
                  ? 'text-red-600 bg-red-50' 
                  : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t.consultation}</span>
            </Link>
            
            <Link
              to="/profile"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/profile') 
                  ? 'text-red-600 bg-red-50' 
                  : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              <User className="h-4 w-4" />
              <span>{t.profile}</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="en">🇺🇸 English</option>
              <option value="hi">🇮🇳 हिंदी</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;