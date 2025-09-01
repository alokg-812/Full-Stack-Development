import React, { useState } from 'react';
import { 
  Video, 
  MessageCircle, 
  Phone, 
  Clock, 
  Star, 
  Calendar,
  Search,
  Filter,
  User,
  Heart,
  Brain,
  Bone,
  Eye,
  Baby
} from 'lucide-react';

interface ConsultationPageProps {
  language: string;
}

const ConsultationPage: React.FC<ConsultationPageProps> = ({ language }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [consultationType, setConsultationType] = useState('video');

  const translations = {
    en: {
      title: '24/7 Online Medical Consultation',
      subtitle: 'Connect with verified doctors instantly',
      videoCall: 'Video Call',
      voiceCall: 'Voice Call',
      chat: 'Chat',
      searchDoctor: 'Search doctors...',
      allSpecialties: 'All Specialties',
      generalMedicine: 'General Medicine',
      cardiology: 'Cardiology',
      neurology: 'Neurology',
      orthopedics: 'Orthopedics',
      ophthalmology: 'Ophthalmology',
      pediatrics: 'Pediatrics',
      available: 'Available Now',
      offline: 'Offline',
      busy: 'Busy',
      rating: 'Rating',
      experience: 'years experience',
      consultationFee: 'Consultation Fee',
      bookNow: 'Book Now',
      instantConsult: 'Instant Consult',
      scheduleAppointment: 'Schedule Appointment',
      languages: 'Languages',
      qualifications: 'Qualifications',
      nextAvailable: 'Next Available',
      today: 'Today',
      tomorrow: 'Tomorrow'
    },
    hi: {
      title: '24/7 ऑनलाइन चिकित्सा परामर्श',
      subtitle: 'सत्यापित डॉक्टरों से तुरंत जुड़ें',
      videoCall: 'वीडियो कॉल',
      voiceCall: 'वॉयस कॉल',
      chat: 'चैट',
      searchDoctor: 'डॉक्टर खोजें...',
      allSpecialties: 'सभी विशेषताएं',
      generalMedicine: 'सामान्य चिकित्सा',
      cardiology: 'हृदय रोग',
      neurology: 'न्यूरोलॉजी',
      orthopedics: 'हड्डी रोग',
      ophthalmology: 'नेत्र रोग',
      pediatrics: 'बाल रोग',
      available: 'अभी उपलब्ध',
      offline: 'ऑफलाइन',
      busy: 'व्यस्त',
      rating: 'रेटिंग',
      experience: 'वर्ष अनुभव',
      consultationFee: 'परामर्श शुल्क',
      bookNow: 'अभी बुक करें',
      instantConsult: 'तत्काल परामर्श',
      scheduleAppointment: 'अपॉइंटमेंट शेड्यूल करें',
      languages: 'भाषाएं',
      qualifications: 'योग्यताएं',
      nextAvailable: 'अगली उपलब्धता',
      today: 'आज',
      tomorrow: 'कल'
    }
  };

  const t = translations[language as keyof typeof translations];

  const specialties = [
    { id: 'all', label: t.allSpecialties, icon: User },
    { id: 'general', label: t.generalMedicine, icon: Heart },
    { id: 'cardiology', label: t.cardiology, icon: Heart },
    { id: 'neurology', label: t.neurology, icon: Brain },
    { id: 'orthopedics', label: t.orthopedics, icon: Bone },
    { id: 'ophthalmology', label: t.ophthalmology, icon: Eye },
    { id: 'pediatrics', label: t.pediatrics, icon: Baby }
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      specialty: 'Cardiology',
      experience: 15,
      rating: 4.8,
      reviews: 234,
      fee: 500,
      status: 'available',
      languages: ['Hindi', 'English'],
      qualifications: 'MBBS, MD Cardiology',
      nextSlot: '2:30 PM Today',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Dr. Rajesh Kumar',
      specialty: 'General Medicine',
      experience: 12,
      rating: 4.6,
      reviews: 189,
      fee: 300,
      status: 'available',
      languages: ['Hindi', 'English', 'Punjabi'],
      qualifications: 'MBBS, MD Internal Medicine',
      nextSlot: '3:00 PM Today',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Dr. Anita Gupta',
      specialty: 'Pediatrics',
      experience: 18,
      rating: 4.9,
      reviews: 312,
      fee: 600,
      status: 'busy',
      languages: ['Hindi', 'English'],
      qualifications: 'MBBS, MD Pediatrics',
      nextSlot: '10:00 AM Tomorrow',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Dr. Amit Singh',
      specialty: 'Neurology',
      experience: 20,
      rating: 4.7,
      reviews: 156,
      fee: 800,
      status: 'available',
      languages: ['Hindi', 'English'],
      qualifications: 'MBBS, DM Neurology',
      nextSlot: '4:15 PM Today',
      image: 'https://images.pexels.com/photos/6749771/pexels-photo-6749771.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Dr. Sunita Verma',
      specialty: 'Ophthalmology',
      experience: 14,
      rating: 4.5,
      reviews: 98,
      fee: 450,
      status: 'offline',
      languages: ['Hindi', 'English'],
      qualifications: 'MBBS, MS Ophthalmology',
      nextSlot: '9:00 AM Tomorrow',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const filteredDoctors = doctors.filter(doctor => 
    selectedSpecialty === 'all' || doctor.specialty.toLowerCase().includes(selectedSpecialty)
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-600';
      case 'busy': return 'bg-yellow-100 text-yellow-600';
      case 'offline': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return t.available;
      case 'busy': return t.busy;
      case 'offline': return t.offline;
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        {/* Consultation Types */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setConsultationType('video')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                consultationType === 'video'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Video className="h-5 w-5" />
              <span>{t.videoCall}</span>
            </button>
            <button
              onClick={() => setConsultationType('voice')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                consultationType === 'voice'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Phone className="h-5 w-5" />
              <span>{t.voiceCall}</span>
            </button>
            <button
              onClick={() => setConsultationType('chat')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                consultationType === 'chat'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <MessageCircle className="h-5 w-5" />
              <span>{t.chat}</span>
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder={t.searchDoctor}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty) => {
                const IconComponent = specialty.icon;
                return (
                  <button
                    key={specialty.id}
                    onClick={() => setSelectedSpecialty(specialty.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                      selectedSpecialty === specialty.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="hidden sm:inline">{specialty.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                    <p className="text-sm text-gray-600">{doctor.experience} {t.experience}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(doctor.status)}`}>
                    {getStatusText(doctor.status)}
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-sm text-gray-600">({doctor.reviews})</span>
                  </div>
                  <div className="text-lg font-semibold text-green-600">
                    ₹{doctor.fee}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">{t.qualifications}:</div>
                  <div className="text-sm font-medium">{doctor.qualifications}</div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">{t.languages}:</div>
                  <div className="flex flex-wrap gap-1">
                    {doctor.languages.map((lang, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{t.nextAvailable}: {doctor.nextSlot}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  {doctor.status === 'available' ? (
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      {t.instantConsult}
                    </button>
                  ) : (
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      {t.scheduleAppointment}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No doctors found for the selected specialty</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationPage;