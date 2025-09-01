import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Users, AlertTriangle, Navigation } from 'lucide-react';

interface EmergencyPageProps {
  language: string;
}

const EmergencyPage: React.FC<EmergencyPageProps> = ({ language }) => {
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  const translations = {
    en: {
      title: 'Emergency SOS',
      subtitle: 'Get immediate help in critical situations',
      sosButton: 'EMERGENCY SOS',
      cancelButton: 'Cancel Emergency',
      locationStatus: 'Getting your location...',
      locationFound: 'Location detected',
      emergencyTypes: 'Select Emergency Type',
      medical: 'Medical Emergency',
      accident: 'Road Accident',
      fire: 'Fire Emergency',
      // police: 'Police Help',
      countdown: 'Emergency call in',
      seconds: 'seconds',
      calling: 'Connecting to Emergency Services...',
      nearbyHospitals: 'Nearby Hospitals',
      ambulanceEta: 'Ambulance ETA: 8 minutes',
      instructions: 'Emergency Instructions',
      instruction1: '• Stay calm and follow operator instructions',
      instruction2: '• Keep your phone nearby for updates',
      instruction3: '• Share your medical conditions if any',
      instruction4: '• Wait for emergency services to arrive',
      emergencyContacts: 'Emergency Contacts',
      nationalAmbulance: 'National Ambulance: 108',
      police: 'Police: 100',
      fireService: 'Fire Service: 101'
    },
    hi: {
      title: 'आपातकालीन SOS',
      subtitle: 'गंभीर स्थितियों में तत्काल सहायता प्राप्त करें',
      sosButton: 'आपातकालीन SOS',
      cancelButton: 'आपातकाल रद्द करें',
      locationStatus: 'आपका स्थान प्राप्त कर रहे हैं...',
      locationFound: 'स्थान का पता लगा',
      emergencyTypes: 'आपातकालीन प्रकार चुनें',
      medical: 'चिकित्सा आपातकाल',
      accident: 'सड़क दुर्घटना',
      fire: 'आग की आपातकाल',
      // police: 'पुलिस सहायता',
      countdown: 'आपातकालीन कॉल में',
      seconds: 'सेकंड',
      calling: 'आपातकालीन सेवाओं से जुड़ रहे हैं...',
      nearbyHospitals: 'नजदीकी अस्पताल',
      ambulanceEta: 'एम्बुलेंस ETA: 8 मिनट',
      instructions: 'आपातकालीन निर्देश',
      instruction1: '• शांत रहें और ऑपरेटर के निर्देशों का पालन करें',
      instruction2: '• अपडेट के लिए अपना फोन पास रखें',
      instruction3: '• यदि कोई चिकित्सा स्थिति है तो साझा करें',
      instruction4: '• आपातकालीन सेवाओं के आने की प्रतीक्षा करें',
      emergencyContacts: 'आपातकालीन संपर्क',
      nationalAmbulance: 'राष्ट्रीय एम्बुलेंस: 108',
      police: 'पुलिस: 100',
      fireService: 'अग्निशमन सेवा: 101'
    }
  };

  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (emergencyActive && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [emergencyActive, countdown]);

  const handleEmergencyPress = () => {
    setEmergencyActive(true);
    setCountdown(5);
  };

  const handleCancel = () => {
    setEmergencyActive(false);
    setCountdown(5);
  };

  const emergencyTypes = [
    { id: 'medical', label: t.medical, color: 'bg-red-500', icon: '🏥' },
    { id: 'accident', label: t.accident, color: 'bg-orange-500', icon: '🚗' },
    { id: 'fire', label: t.fire, color: 'bg-red-600', icon: '🔥' },
    { id: 'police', label: t.police, color: 'bg-blue-500', icon: '🚓' }
  ];

  const nearbyHospitals = [
    { name: 'Apollo Hospital', distance: '2.3 km', beds: 'Available', specialty: 'Multi-specialty' },
    { name: 'Max Hospital', distance: '3.1 km', beds: 'Available', specialty: 'Cardiac Care' },
    { name: 'Fortis Hospital', distance: '4.2 km', beds: 'Full', specialty: 'Emergency Care' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        {/* Emergency SOS Button */}
        <div className="text-center mb-8">
          {!emergencyActive ? (
            <button
              onClick={handleEmergencyPress}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-2xl px-12 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200 animate-pulse"
            >
              <div className="flex flex-col items-center">
                <Phone className="h-12 w-12 mb-2" />
                <span>{t.sosButton}</span>
              </div>
            </button>
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-lg">
              {countdown > 0 ? (
                <div className="text-center">
                  <div className="text-6xl font-bold text-red-600 mb-4">{countdown}</div>
                  <p className="text-xl mb-6">{t.countdown} {countdown} {t.seconds}</p>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
                  >
                    {t.cancelButton}
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-4"></div>
                  <p className="text-xl text-red-600 font-semibold">{t.calling}</p>
                  <p className="text-green-600 mt-2">{t.ambulanceEta}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Location Status */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <div className="flex items-center justify-center space-x-3">
            <Navigation className="h-6 w-6 text-green-600" />
            <span className="text-lg font-medium">
              {location ? t.locationFound : t.locationStatus}
            </span>
            {location && (
              <span className="text-green-600">✓</span>
            )}
          </div>
        </div>

        {/* Emergency Types */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">{t.emergencyTypes}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {emergencyTypes.map((type) => (
              <button
                key={type.id}
                className={`${type.color} hover:opacity-80 text-white p-4 rounded-lg transition-all duration-200 transform hover:scale-105`}
              >
                <div className="text-2xl mb-2">{type.icon}</div>
                <div className="text-sm font-medium">{type.label}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Nearby Hospitals */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-600" />
              {t.nearbyHospitals}
            </h3>
            <div className="space-y-4">
              {nearbyHospitals.map((hospital, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <div className="font-semibold">{hospital.name}</div>
                  <div className="text-sm text-gray-600">{hospital.distance} • {hospital.specialty}</div>
                  <div className={`text-sm ${hospital.beds === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
                    Beds: {hospital.beds}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Instructions */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
              {t.instructions}
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>{t.instruction1}</p>
              <p>{t.instruction2}</p>
              <p>{t.instruction3}</p>
              <p>{t.instruction4}</p>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
          <h3 className="text-xl font-semibold mb-4">{t.emergencyContacts}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <Phone className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="font-semibold text-red-600">{t.nationalAmbulance}</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-blue-600">{t.police}</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Phone className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="font-semibold text-orange-600">{t.fireService}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPage;