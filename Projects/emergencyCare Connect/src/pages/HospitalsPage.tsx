import React, { useState } from 'react';
import { MapPin, Phone, Clock, Bed, Star, Navigation, Filter } from 'lucide-react';

interface HospitalsPageProps {
  language: string;
}

const HospitalsPage: React.FC<HospitalsPageProps> = ({ language }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const translations = {
    en: {
      title: 'Find Hospitals Near You',
      subtitle: 'Locate nearby hospitals with real-time availability',
      searchPlaceholder: 'Search hospitals or specialties...',
      filterAll: 'All',
      filterEmergency: 'Emergency',
      filterSpecialist: 'Specialist',
      filterPrivate: 'Private',
      filterGovernment: 'Government',
      available: 'Available',
      full: 'Full',
      limited: 'Limited',
      emergency: 'Emergency',
      distance: 'km away',
      beds: 'beds available',
      rating: 'Rating',
      callNow: 'Call Now',
      directions: 'Get Directions',
      viewDetails: 'View Details',
      openNow: 'Open 24/7',
      emergency24: '24/7 Emergency',
      specialists: 'Specialists Available'
    },
    hi: {
      title: 'अपने आस-पास अस्पताल खोजें',
      subtitle: 'रियल-टाइम उपलब्धता के साथ नजदीकी अस्पताल का पता लगाएं',
      searchPlaceholder: 'अस्पताल या विशेषताएं खोजें...',
      filterAll: 'सभी',
      filterEmergency: 'आपातकालीन',
      filterSpecialist: 'विशेषज्ञ',
      filterPrivate: 'निजी',
      filterGovernment: 'सरकारी',
      available: 'उपलब्ध',
      full: 'भरा हुआ',
      limited: 'सीमित',
      emergency: 'आपातकालीन',
      distance: 'किमी दूर',
      beds: 'बेड उपलब्ध',
      rating: 'रेटिंग',
      callNow: 'अभी कॉल करें',
      directions: 'दिशा निर्देश',
      viewDetails: 'विवरण देखें',
      openNow: '24/7 खुला',
      emergency24: '24/7 आपातकालीन',
      specialists: 'विशेषज्ञ उपलब्ध'
    }
  };

  const t = translations[language as keyof typeof translations];

  const hospitals = [
    {
      id: 1,
      name: 'Apollo Hospital',
      type: 'private',
      distance: 2.3,
      address: 'Sector 26, Noida',
      phone: '+91-120-4567890',
      rating: 4.5,
      beds: 45,
      status: 'available',
      emergency: true,
      specialties: ['Cardiology', 'Neurology', 'Oncology'],
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Max Super Speciality Hospital',
      type: 'private',
      distance: 3.1,
      address: 'Press Enclave Road, Saket',
      phone: '+91-11-2651-5050',
      rating: 4.7,
      beds: 12,
      status: 'limited',
      emergency: true,
      specialties: ['Cardiac Surgery', 'Orthopedics', 'Emergency Care'],
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Fortis Hospital',
      type: 'private',
      distance: 4.2,
      address: 'B-22, Sector 62, Noida',
      phone: '+91-120-4567891',
      rating: 4.3,
      beds: 0,
      status: 'full',
      emergency: true,
      specialties: ['Emergency Medicine', 'Gastroenterology', 'Urology'],
      image: 'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'Safdarjung Hospital',
      type: 'government',
      distance: 5.8,
      address: 'Ring Road, Safdarjung Enclave',
      phone: '+91-11-2673-0000',
      rating: 3.9,
      beds: 120,
      status: 'available',
      emergency: true,
      specialties: ['General Medicine', 'Surgery', 'Pediatrics'],
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 5,
      name: 'BLK Super Speciality Hospital',
      type: 'private',
      distance: 6.4,
      address: 'Pusa Road, Rajinder Nagar',
      phone: '+91-11-3040-3040',
      rating: 4.4,
      beds: 28,
      status: 'available',
      emergency: true,
      specialties: ['Liver Transplant', 'Kidney Transplant', 'Neurosurgery'],
      image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesFilter = selectedFilter === 'all' || 
                         hospital.type === selectedFilter ||
                         (selectedFilter === 'emergency' && hospital.emergency);
    
    const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hospital.specialties.some(spec => 
                           spec.toLowerCase().includes(searchQuery.toLowerCase())
                         );
    
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-600 bg-green-100';
      case 'limited': return 'text-yellow-600 bg-yellow-100';
      case 'full': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return t.available;
      case 'limited': return t.limited;
      case 'full': return t.full;
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

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-2">
              {['all', 'emergency', 'private', 'government'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    selectedFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t[`filter${filter.charAt(0).toUpperCase() + filter.slice(1)}` as keyof typeof t]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredHospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={hospital.image}
                alt={hospital.name}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{hospital.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{hospital.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{hospital.distance} {t.distance}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{hospital.address}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(hospital.status)}`}>
                    {getStatusText(hospital.status)}
                  </span>
                  {hospital.emergency && (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                      {t.emergency24}
                    </span>
                  )}
                </div>
                
                {hospital.beds > 0 && (
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Bed className="h-4 w-4 mr-2" />
                    <span>{hospital.beds} {t.beds}</span>
                  </div>
                )}
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">{t.specialists}:</div>
                  <div className="flex flex-wrap gap-1">
                    {hospital.specialties.slice(0, 2).map((specialty, index) => (
                      <span key={index} className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                    {hospital.specialties.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        +{hospital.specialties.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>{t.callNow}</span>
                  </button>
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                    <Navigation className="h-4 w-4" />
                    <span>{t.directions}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No hospitals found matching your criteria</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalsPage;