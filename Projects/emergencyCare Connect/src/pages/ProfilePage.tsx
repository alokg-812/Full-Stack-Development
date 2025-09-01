import React, { useState } from 'react';
import { 
  User, 
  Heart, 
  FileText, 
  Shield, 
  Phone, 
  Mail, 
  Calendar,
  MapPin,
  Edit,
  Plus,
  Download,
  Eye,
  Clock,
  Activity
} from 'lucide-react';

interface ProfilePageProps {
  language: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState('profile');

  const translations = {
    en: {
      title: 'My Profile',
      subtitle: 'Manage your health information and emergency contacts',
      personalInfo: 'Personal Information',
      medicalHistory: 'Medical History',
      emergencyContacts: 'Emergency Contacts',
      insurance: 'Insurance',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone Number',
      dateOfBirth: 'Date of Birth',
      bloodGroup: 'Blood Group',
      address: 'Address',
      editProfile: 'Edit Profile',
      addMedicalRecord: 'Add Medical Record',
      allergies: 'Allergies',
      medications: 'Current Medications',
      conditions: 'Medical Conditions',
      recentConsultations: 'Recent Consultations',
      downloadReport: 'Download Report',
      viewDetails: 'View Details',
      primaryContact: 'Primary Contact',
      secondaryContact: 'Secondary Contact',
      addContact: 'Add Contact',
      relationship: 'Relationship',
      insuranceProvider: 'Insurance Provider',
      policyNumber: 'Policy Number',
      expiryDate: 'Expiry Date',
      status: 'Status',
      active: 'Active',
      spouse: 'Spouse',
      parent: 'Parent',
      sibling: 'Sibling',
      child: 'Child',
      friend: 'Friend'
    },
    hi: {
      title: 'मेरी प्रोफाइल',
      subtitle: 'अपनी स्वास्थ्य जानकारी और आपातकालीन संपर्कों का प्रबंधन करें',
      personalInfo: 'व्यक्तिगत जानकारी',
      medicalHistory: 'चिकित्सा इतिहास',
      emergencyContacts: 'आपातकालीन संपर्क',
      insurance: 'बीमा',
      name: 'पूरा नाम',
      email: 'ईमेल',
      phone: 'फोन नंबर',
      dateOfBirth: 'जन्म तिथि',
      bloodGroup: 'रक्त समूह',
      address: 'पता',
      editProfile: 'प्रोफाइल संपादित करें',
      addMedicalRecord: 'चिकित्सा रिकॉर्ड जोड़ें',
      allergies: 'एलर्जी',
      medications: 'वर्तमान दवाएं',
      conditions: 'चिकित्सा स्थितियां',
      recentConsultations: 'हाल के परामर्श',
      downloadReport: 'रिपोर्ट डाउनलोड करें',
      viewDetails: 'विवरण देखें',
      primaryContact: 'प्राथमिक संपर्क',
      secondaryContact: 'द्वितीयक संपर्क',
      addContact: 'संपर्क जोड़ें',
      relationship: 'रिश्ता',
      insuranceProvider: 'बीमा प्रदाता',
      policyNumber: 'पॉलिसी नंबर',
      expiryDate: 'समाप्ति दिथि',
      status: 'स्थिति',
      active: 'सक्रिय',
      spouse: 'पति/पत्नी',
      parent: 'माता-पिता',
      sibling: 'भाई-बहन',
      child: 'बच्चा',
      friend: 'मित्र'
    }
  };

  const t = translations[language as keyof typeof translations];

  const userData = {
    name: 'राज कुमार',
    email: 'raj.kumar@email.com',
    phone: '+91 98765 43210',
    dateOfBirth: '15/03/1985',
    bloodGroup: 'O+',
    address: 'Sector 15, Noida, Uttar Pradesh - 201301',
    profilePicture: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  };

  const medicalHistory = {
    allergies: ['Penicillin', 'Shellfish', 'Pollen'],
    medications: ['Metformin 500mg - Twice daily', 'Lisinopril 10mg - Once daily'],
    conditions: ['Type 2 Diabetes', 'Hypertension'],
    consultations: [
      {
        date: '2024-01-15',
        doctor: 'Dr. Priya Sharma',
        specialty: 'Cardiology',
        type: 'Video Call',
        diagnosis: 'Regular checkup - BP stable'
      },
      {
        date: '2024-01-10',
        doctor: 'Dr. Rajesh Kumar',
        specialty: 'General Medicine',
        type: 'Chat',
        diagnosis: 'Diabetes monitoring - HbA1c 7.2%'
      }
    ]
  };

  const emergencyContacts = [
    {
      name: 'सुनीता कुमार',
      relationship: t.spouse,
      phone: '+91 98765 43211',
      isPrimary: true
    },
    {
      name: 'अमित कुमार',
      relationship: t.sibling,
      phone: '+91 98765 43212',
      isPrimary: false
    }
  ];

  const insuranceInfo = {
    provider: 'Max Bupa Health Insurance',
    policyNumber: 'MB2024567890',
    expiryDate: '2025-03-15',
    status: 'Active',
    coverageAmount: '₹5,00,000'
  };

  const tabs = [
    { id: 'profile', label: t.personalInfo, icon: User },
    { id: 'medical', label: t.medicalHistory, icon: Heart },
    { id: 'contacts', label: t.emergencyContacts, icon: Phone },
    { id: 'insurance', label: t.insurance, icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={userData.profilePicture}
              alt={userData.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
              <p className="text-gray-600">{userData.email}</p>
              <p className="text-gray-600">{userData.phone}</p>
              <div className="flex items-center justify-center md:justify-start space-x-4 mt-2">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  {userData.bloodGroup}
                </span>
                <span className="text-gray-600 text-sm">{userData.dateOfBirth}</span>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
              <Edit className="h-4 w-4" />
              <span>{t.editProfile}</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {/* Personal Information Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.name}
                    </label>
                    <input
                      type="text"
                      value={userData.name}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      value={userData.email}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.phone}
                    </label>
                    <input
                      type="tel"
                      value={userData.phone}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.bloodGroup}
                    </label>
                    <input
                      type="text"
                      value={userData.bloodGroup}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      readOnly
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.address}
                  </label>
                  <textarea
                    value={userData.address}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                </div>
              </div>
            )}

            {/* Medical History Tab */}
            {activeTab === 'medical' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{t.medicalHistory}</h3>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>{t.addMedicalRecord}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-3">{t.allergies}</h4>
                    <div className="space-y-2">
                      {medicalHistory.allergies.map((allergy, index) => (
                        <span key={index} className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                          {allergy}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3">{t.medications}</h4>
                    <div className="space-y-2">
                      {medicalHistory.medications.map((medication, index) => (
                        <div key={index} className="text-sm text-blue-800">
                          • {medication}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-3">{t.conditions}</h4>
                  <div className="space-y-2">
                    {medicalHistory.conditions.map((condition, index) => (
                      <span key={index} className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">{t.recentConsultations}</h4>
                  <div className="space-y-4">
                    {medicalHistory.consultations.map((consultation, index) => (
                      <div key={index} className="border border-gray-200 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-medium">{consultation.doctor}</div>
                            <div className="text-sm text-gray-600">{consultation.specialty}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{consultation.date}</div>
                            <div className="text-sm text-gray-600">{consultation.type}</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-700 mb-3">{consultation.diagnosis}</div>
                        <div className="flex space-x-2">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{t.viewDetails}</span>
                          </button>
                          <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors flex items-center space-x-1">
                            <Download className="h-3 w-3" />
                            <span>{t.downloadReport}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Emergency Contacts Tab */}
            {activeTab === 'contacts' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{t.emergencyContacts}</h3>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>{t.addContact}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="border border-gray-200 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="font-semibold text-lg">{contact.name}</div>
                          <div className="text-gray-600">{contact.relationship}</div>
                        </div>
                        {contact.isPrimary && (
                          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                            {t.primaryContact}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <Phone className="h-4 w-4" />
                        <span>{contact.phone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Insurance Tab */}
            {activeTab === 'insurance' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">{t.insurance}</h3>
                
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xl font-semibold">{insuranceInfo.provider}</div>
                      <div className="text-gray-600">{insuranceInfo.coverageAmount} Coverage</div>
                    </div>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      {t.active}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">{t.policyNumber}</div>
                      <div className="font-medium">{insuranceInfo.policyNumber}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">{t.expiryDate}</div>
                      <div className="font-medium">{insuranceInfo.expiryDate}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;