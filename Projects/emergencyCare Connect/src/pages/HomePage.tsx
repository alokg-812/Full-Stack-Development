import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Heart, 
  Shield, 
  Clock,
  Users,
  Globe,
  Ambulance,
  Stethoscope,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

interface HomePageProps {
  language: string;
}

const HomePage: React.FC<HomePageProps> = ({ language }) => {
  const translations = {
    en: {
      heroTitle: 'Emergency Healthcare When You Need It Most',
      heroSubtitle: 'Connect instantly with emergency services, find nearby hospitals, and access medical care across India with our comprehensive healthcare platform.',
      emergencyButton: 'Emergency SOS',
      findHospitals: 'Find Hospitals',
      onlineConsultation: 'Online Consultation',
      featuresTitle: 'Why Choose EmergencyCare Connect?',
      feature1Title: '🚨 Instant Emergency Response',
      feature1Desc: 'One-tap SOS connects you to nearest ambulance and hospital with real-time location tracking.',
      feature2Title: '🏥 Live Hospital Availability',
      feature2Desc: 'Real-time bed availability, specialist doctors, and emergency services across 500+ hospitals.',
      feature3Title: '💬 24/7 Medical Consultation',
      feature3Desc: 'Connect with verified doctors through video/chat consultation anytime, anywhere.',
      feature4Title: '🌐 Multi-language Support',
      feature4Desc: 'Available in Hindi, English, and 12 regional languages for better accessibility.',
      statsTitle: 'Trusted by Millions Across India',
      stat1: '500+',
      stat1Label: 'Partner Hospitals',
      stat2: '10,000+',
      stat2Label: 'Lives Saved',
      stat3: '2Min',
      stat3Label: 'Avg Response Time',
      stat4: '24/7',
      stat4Label: 'Available Support',
      emergencyStepsTitle: 'How Emergency Response Works',
      step1: 'Press SOS Button',
      step1Desc: 'Quick access emergency button sends your location to our response center',
      step2: 'Instant Connection',
      step2Desc: 'Automatically connects to nearest ambulance and hospital based on your emergency type',
      step3: 'Real-time Tracking',
      step3Desc: 'Track ambulance arrival time and share updates with family members'
    },
    hi: {
      heroTitle: 'जब आपको सबसे ज्यादा जरूरत हो तो आपातकालीन स्वास्थ्य सेवा',
      heroSubtitle: 'आपातकालीन सेवाओं से तुरंत जुड़ें, नजदीकी अस्पताल खोजें, और हमारे व्यापक स्वास्थ्य सेवा प्लेटफॉर्म के साथ पूरे भारत में चिकित्सा देखभाल का उपयोग करें।',
      emergencyButton: 'आपातकालीन SOS',
      findHospitals: 'अस्पताल खोजें',
      onlineConsultation: 'ऑनलाइन परामर्श',
      featuresTitle: 'EmergencyCare Connect क्यों चुनें?',
      feature1Title: '🚨 तत्काल आपातकालीन प्रतिक्रिया',
      feature1Desc: 'एक-टैप SOS आपको निकटतम एम्बुलेंस और अस्पताल से रियल-टाइम लोकेशन ट्रैकिंग के साथ जोड़ता है।',
      feature2Title: '🏥 लाइव अस्पताल उपलब्धता',
      feature2Desc: '500+ अस्पतालों में रियल-टाइम बेड उपलब्धता, विशेषज्ञ डॉक्टर, और आपातकालीन सेवाएं।',
      feature3Title: '💬 24/7 चिकित्सा परामर्श',
      feature3Desc: 'कभी भी, कहीं भी वीडियो/चैट परामर्श के माध्यम से सत्यापित डॉक्टरों से जुड़ें।',
      feature4Title: '🌐 बहुभाषी समर्थन',
      feature4Desc: 'बेहतर पहुंच के लिए हिंदी, अंग्रेजी और 12 क्षेत्रीय भाषाओं में उपलब्ध।',
      statsTitle: 'पूरे भारत में लाखों लोगों का भरोसा',
      stat1: '500+',
      stat1Label: 'साझेदार अस्पताल',
      stat2: '10,000+',
      stat2Label: 'बचाई गई जिंदगियां',
      stat3: '2 मिनट',
      stat3Label: 'औसत प्रतिक्रिया समय',
      stat4: '24/7',
      stat4Label: 'उपलब्ध सहायता',
      emergencyStepsTitle: 'आपातकालीन प्रतिक्रिया कैसे काम करती है',
      step1: 'SOS बटन दबाएं',
      step1Desc: 'त्वरित पहुंच आपातकालीन बटन आपके स्थान को हमारे प्रतिक्रिया केंद्र में भेजता है',
      step2: 'तत्काल कनेक्शन',
      step2Desc: 'आपके आपातकालीन प्रकार के आधार पर निकटतम एम्बुलेंस और अस्पताल से स्वचालित रूप से जुड़ता है',
      step3: 'रियल-टाइम ट्रैकिंग',
      step3Desc: 'एम्बुलेंस के आने का समय ट्रैक करें और परिवार के सदस्यों के साथ अपडेट साझा करें'
    }
  };

  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/emergency"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <Phone className="h-6 w-6" />
                <span>{t.emergencyButton}</span>
              </Link>
              
              <Link
                to="/hospitals"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <MapPin className="h-6 w-6" />
                <span>{t.findHospitals}</span>
              </Link>
              
              <Link
                to="/consultation"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <MessageCircle className="h-6 w-6" />
                <span>{t.onlineConsultation}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t.statsTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">{t.stat1}</div>
              <div className="text-gray-600 font-medium">{t.stat1Label}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{t.stat2}</div>
              <div className="text-gray-600 font-medium">{t.stat2Label}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{t.stat3}</div>
              <div className="text-gray-600 font-medium">{t.stat3Label}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{t.stat4}</div>
              <div className="text-gray-600 font-medium">{t.stat4Label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            {t.featuresTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl mb-4">{t.feature1Title}</div>
              <p className="text-gray-600">{t.feature1Desc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl mb-4">{t.feature2Title}</div>
              <p className="text-gray-600">{t.feature2Desc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl mb-4">{t.feature3Title}</div>
              <p className="text-gray-600">{t.feature3Desc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-2xl mb-4">{t.feature4Title}</div>
              <p className="text-gray-600">{t.feature4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            {t.emergencyStepsTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <AlertTriangle className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.step1}</h3>
              <p className="text-gray-600">{t.step1Desc}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Ambulance className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.step2}</h3>
              <p className="text-gray-600">{t.step2Desc}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.step3}</h3>
              <p className="text-gray-600">{t.step3Desc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;