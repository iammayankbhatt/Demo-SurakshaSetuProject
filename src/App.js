import React, { useState, useEffect } from 'react';

// --- SVG Icons ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ShieldCheckIcon = ({ className = "h-12 w-12" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path>
    </svg>
);

const SmartphoneIcon = ({ className = "h-12 w-12" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
);

const MapPinIcon = ({ className = "h-12 w-12" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const MessageCircleIcon = ({ className = "h-12 w-12" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

const BellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gray-500 hover:text-gray-700"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
);

const UserCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-gray-500"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"></path><circle cx="12" cy="10" r="3"></circle><circle cx="12" cy="12" r="10"></circle></svg>
);

// --- Icons for Tourist App Mock ---
const HomeIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const MapIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>;
const MessageSquareIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
const SettingsIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
const AlertTriangleIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
const SirenIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"></path><path d="M12 13a3 3 0 1 0-3-3"></path><path d="M18.66 12A10.5 10.5 0 0 0 12 5.55a10.51 10.51 0 0 0-7.16 7.16"></path><path d="M12 2a4 4 0 0 0-4 4v1h8V6a4 4 0 0 0-4-4z"></path></svg>;
const UsersIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;


// --- Components for Landing Site ---

const Header = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Tourist App', page: 'touristApp' },
    { name: 'Dashboard', page: 'dashboard' },
    { name: 'About', page: 'about' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setPage('home')}>
            <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-800">SmartSafar</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link.page} href="#" onClick={(e) => {e.preventDefault(); setPage(link.page)}} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <a key={link.page} href="#" onClick={(e) => {e.preventDefault(); setPage(link.page); setIsOpen(false);}} className="text-gray-700 hover:bg-blue-50 rounded-lg p-2 text-center transition-colors duration-300">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="bg-blue-50">
    <div className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">Safe Journeys, Smart Monitoring</h2>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">Introducing a revolutionary platform to ensure tourist safety with cutting-edge technology. Explore new destinations with peace of mind.</p>
      <div className="mt-8 flex justify-center space-x-4">
        <a href="#" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">Get Started</a>
        <a href="#" className="bg-white text-gray-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300">Learn More</a>
      </div>
    </div>
  </section>
);

const Features = () => {
  const featuresList = [
    { icon: <ShieldCheckIcon />, title: 'Blockchain Digital ID', description: 'Secure, verifiable, and time-limited digital identities for tourists, ensuring privacy and trust.' },
    { icon: <SmartphoneIcon />, title: 'Panic Button & Alerts', description: 'Instantly alert authorities and loved ones with a single tap. Get geo-fenced safety alerts in risky zones.' },
    { icon: <MapPinIcon />, title: 'Real-Time Monitoring', description: 'Advanced dashboard for authorities to view tourist clusters, heatmaps, and respond to incidents swiftly.' },
    { icon: <MessageCircleIcon />, title: 'AI-Powered Chatbot', description: '24/7 multilingual assistance for tourists, providing guidance, FAQs, and emergency support.' },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12"><h3 className="text-3xl font-bold text-gray-800">Core Features</h3><p className="text-gray-600 mt-2">Everything you need for a secure travel experience.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Screenshots = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12"><h3 className="text-3xl font-bold text-gray-800">Powerful & Intuitive Interface</h3><p className="text-gray-600 mt-2">Designed for ease of use for both tourists and authorities.</p></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center"><h4 className="text-2xl font-semibold text-gray-800 mb-4">Tourist Mobile App</h4><div className="bg-white p-4 rounded-3xl shadow-2xl max-w-sm mx-auto"><div className="aspect-w-9 aspect-h-19 rounded-2xl overflow-hidden bg-gray-200"><img src="/mobiless.png" alt="Mobile App Screenshot" className="w-full h-full object-cover" /></div></div></div>
        <div className="text-center"><h4 className="text-2xl font-semibold text-gray-800 mb-4">Police & Admin Dashboard</h4><div className="bg-white p-4 rounded-xl shadow-2xl"><div className="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden bg-gray-200"><img src="/dashboardss.png" alt="Dashboard Screenshot" className="w-full h-full object-cover" /></div></div></div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div><h5 className="font-bold text-lg mb-2">SmartSafar</h5><p className="text-gray-400">Your trusted partner in travel safety. A project by Team Suraksha Setu.</p></div>
        <div><h5 className="font-bold text-lg mb-2">Quick Links</h5><ul className="space-y-2"><li><a href="#" className="text-gray-400 hover:text-white">Home</a></li><li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li><li><a href="#" className="text-gray-400 hover:text-white">Features</a></li></ul></div>
        <div><h5 className="font-bold text-lg mb-2">Contact Us</h5><p className="text-gray-400">Charkhamba, Clement Town, Dehradun, India</p><p className="text-gray-400">contact@smartsafar.gov</p></div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500"><p>&copy; {new Date().getFullYear()} SmartSafar Initiative. All Rights Reserved.</p></div>
    </div>
  </footer>
);

// --- Landing Site Pages ---
const HomePage = () => (<><Hero /><Features /><Screenshots /></>);
const AboutPage = () => (
    <div className="bg-white py-20 px-4"><div className="container mx-auto"><h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About SmartSafar</h2><div className="max-w-3xl mx-auto text-gray-600 space-y-6 text-lg"><p>SmartSafar is a conceptual project by <strong>Team Suraksha Setu</strong>, designed to demonstrate the potential of modern technology in enhancing tourist safety. Our goal is to create a comprehensive ecosystem that connects tourists, authorities, and local communities to build a safer travel environment for everyone.</p><p>This frontend demo showcases the user interface for the tourist mobile app and the administrative dashboard. It is built using React.js and Tailwind CSS and is designed to be a static, hostable mock-up for presentation and feedback purposes.</p><p>All data presented here is fictional and for demonstration only. No real-time tracking or data processing is happening. We believe that with a focus on privacy, security, and user-centric design, a system like SmartSafar can make a real difference in the world of travel.</p></div></div></div>
);

// --- Tourist App Demo ---
const TouristAppMockPage = ({ setPage }) => {
    const [activeTab, setActiveTab] = useState('home');

    const AppHeader = () => (
        <div className="bg-gray-50 p-3 flex justify-between items-center text-xs text-gray-600 border-b">
            <div>
                <span className="font-semibold">11:35 AM</span>
            </div>
            <div className="w-24 h-5 bg-black rounded-full"></div>
            <div className="flex items-center space-x-1">
                <span>📶</span>
                <span>LTE</span>
                <span className="text-green-500">🔋</span>
            </div>
        </div>
    );
    
    const HomeScreen = () => (
      <div className="p-4 space-y-4 bg-white">
        <div>
          <p className="text-gray-500">Welcome back,</p>
          <h2 className="text-2xl font-bold text-gray-800">Jane Doe</h2>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-xl shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">Current Location</p>
              <p className="font-bold">Dehradun, UK</p>
            </div>
            <div className="text-right">
               <p className="text-sm opacity-80">Safety Status</p>
               <p className="font-bold bg-green-500/80 px-2 py-0.5 rounded-full text-xs">SAFE</p>
            </div>
          </div>
        </div>

        <div className="text-center">
             <button className="w-28 h-28 bg-red-500 text-white rounded-full flex flex-col items-center justify-center text-2xl font-bold shadow-2xl animate-pulse transform hover:scale-105 transition-transform duration-300 mx-auto">
                <SirenIcon className="w-10 h-10 mb-1" />
                <span>SOS</span>
            </button>
            <p className="text-gray-500 mt-2 text-xs">Press and hold for 3 seconds</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
             <div className="bg-blue-50 p-3 rounded-lg flex items-center space-x-3"><SirenIcon className="w-6 h-6 text-blue-500"/><span className="text-sm font-medium">Nearby Police</span></div>
             <div className="bg-green-50 p-3 rounded-lg flex items-center space-x-3"><UsersIcon className="w-6 h-6 text-green-500"/><span className="text-sm font-medium">My Contacts</span></div>
             <div className="bg-yellow-50 p-3 rounded-lg flex items-center space-x-3"><AlertTriangleIcon className="w-6 h-6 text-yellow-500"/><span className="text-sm font-medium">Report Incident</span></div>
             <div className="bg-indigo-50 p-3 rounded-lg flex items-center space-x-3"><MessageSquareIcon className="w-6 h-6 text-indigo-500"/><span className="text-sm font-medium">Translator</span></div>
          </div>
        </div>
      </div>
    );

    const MapScreen = () => (
        <div className="flex-grow bg-gray-300 relative">
            <img src="https://placehold.co/375x600/A0AEC0/4A5568?text=Live+Map+View" className="w-full h-full object-cover" alt="Map View"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><div className="w-4 h-4 bg-blue-500 rounded-full ring-8 ring-blue-500/30"></div></div>
        </div>
    );
    
    const ChatScreen = () => (
         <div className="p-4 h-full flex flex-col justify-end bg-gray-100">
            <div className="space-y-4">
                <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">AI</div>
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-lg text-sm max-w-[70%]">Hello! How can I help you today? Ask about safe places, local laws, or emergency contacts.</div>
                </div>
                 <div className="flex justify-end">
                    <div className="bg-white text-gray-800 p-2 rounded-lg text-sm max-w-[70%]">Where is the nearest hospital?</div>
                </div>
            </div>
         </div>
    );
    
    const SettingsScreen = () => (
      <div className="p-4 bg-gray-50 h-full">
        <h3 className="font-bold text-xl mb-4">Settings</h3>
        <ul className="divide-y divide-gray-200 bg-white rounded-lg">
          <li className="p-3">Manage Emergency Contacts</li>
          <li className="p-3">Language</li>
          <li className="p-3">Privacy Settings</li>
          <li className="p-3">Notifications</li>
          <li className="p-3 text-red-500">Log Out</li>
        </ul>
      </div>
    );

    const renderContent = () => {
        switch(activeTab) {
            case 'map': return <MapScreen />;
            case 'chat': return <ChatScreen />;
            case 'settings': return <SettingsScreen />;
            default: return <HomeScreen />;
        }
    }
    
    const navItems = [
      { id: 'home', icon: HomeIcon, label: 'Home' },
      { id: 'map', icon: MapIcon, label: 'Map' },
      { id: 'chat', icon: MessageSquareIcon, label: 'Chat' },
      { id: 'settings', icon: SettingsIcon, label: 'Settings' }
    ];

    return (
        <div className="bg-gray-800 min-h-screen bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop')"}}>
             <header className="bg-black/30 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">Tourist App Demo</h2>
                    <button onClick={() => setPage('home')} className="bg-white/90 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-white shadow-lg transition-transform transform hover:scale-105">
                        &larr; Back to Main Site
                    </button>
                </div>
            </header>
            <div className="py-12 px-4">
                 <div className="max-w-sm mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden border-[10px] border-black">
                    <div className="h-[750px] flex flex-col">
                        <AppHeader />
                        <div className="flex-grow overflow-y-auto">
                            {renderContent()}
                        </div>
                        <div className="bg-white border-t border-gray-200 p-2 grid grid-cols-4 gap-2 text-xs text-center text-gray-500">
                          {navItems.map(item => (
                            <div key={item.id} onClick={() => setActiveTab(item.id)} className={`p-1 rounded-md cursor-pointer ${activeTab === item.id ? 'text-blue-600 bg-blue-50' : ''}`}>
                                <item.icon className={`w-6 h-6 mx-auto ${activeTab === item.id ? '' : 'opacity-70'}`} />
                                <p className="mt-1 text-[10px]">{item.label}</p>
                            </div>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Dashboard Demo ---
const DashboardMockPage = ({ setPage }) => {
    const alerts = [
        { id: 'A001', tourist: 'John Doe', type: 'Panic Button', location: 'Connaught Place, Delhi', time: '2 mins ago', status: 'Active' },
        { id: 'A002', tourist: 'Jane Smith', type: 'Geo-fence Breach', location: 'Restricted Area X', time: '15 mins ago', status: 'Resolved' },
        { id: 'A003', tourist: 'Sam Wilson', type: 'Anomaly Detected', location: 'Near Red Fort', time: '30 mins ago', status: 'Investigating' },
    ];
    return (
        <div className="bg-gray-100 min-h-screen">
             <header className="bg-white shadow-sm w-full sticky top-0 z-40">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <div className="flex items-center space-x-3"><ShieldCheckIcon className="h-8 w-8 text-blue-600" /><h1 className="text-xl font-bold text-gray-800">SmartSafar Dashboard</h1></div>
                    <div className="flex items-center space-x-4">
                        <BellIcon />
                        <UserCircleIcon />
                        <button onClick={() => setPage('home')} className="text-sm text-gray-600 hover:text-blue-600 font-semibold">Exit Dashboard</button>
                    </div>
                </div>
            </header>
            <div className="p-6">
                <div className="bg-white rounded-lg shadow-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-blue-50 p-4 rounded-lg text-center"><h4 className="text-gray-500 text-sm font-medium">Active Tourists</h4><p className="text-3xl font-bold text-blue-600">1,452</p></div>
                        <div className="bg-red-50 p-4 rounded-lg text-center"><h4 className="text-gray-500 text-sm font-medium">Active Alerts</h4><p className="text-3xl font-bold text-red-600">3</p></div>
                        <div className="bg-green-50 p-4 rounded-lg text-center"><h4 className="text-gray-500 text-sm font-medium">Safe Zones</h4><p className="text-3xl font-bold text-green-600">128</p></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 bg-gray-200 rounded-lg p-4 min-h-[400px]"><img src="https://placehold.co/800x500/CBD5E0/4A5568?text=Real-time+Heatmap+of+Tourists" className="w-full h-full object-cover rounded-md" alt="Heatmap"/></div>
                        <div className="bg-gray-50 p-4 rounded-lg"><h4 className="font-semibold text-gray-700 mb-4">Verify Digital ID</h4><input type="text" placeholder="Enter Tourist ID..." className="w-full p-2 border rounded-md mb-2"/><button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Verify</button><div className="mt-4 text-sm text-gray-600 p-2 bg-blue-100 rounded-md hidden"><p><strong>Name:</strong> John Doe</p><p><strong>Status:</strong> <span className="text-green-600 font-bold">Verified</span></p><p><strong>Valid Until:</strong> 25/12/2025</p></div></div>
                    </div>
                    <div className="mt-8">
                        <h4 className="font-semibold text-gray-700 mb-4 text-xl">Incident Alerts</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left table-auto">
                                <thead className="bg-gray-100"><tr><th className="p-3">ID</th><th className="p-3">Tourist</th><th className="p-3">Type</th><th className="p-3">Location</th><th className="p-3">Time</th><th className="p-3">Status</th></tr></thead>
                                <tbody>
                                    {alerts.map(alert => (
                                        <tr key={alert.id} className="border-b hover:bg-gray-50">
                                            <td className="p-3">{alert.id}</td><td className="p-3">{alert.tourist}</td><td className="p-3">{alert.type}</td><td className="p-3">{alert.location}</td><td className="p-3">{alert.time}</td>
                                            <td className="p-3"><span className={`px-2 py-1 rounded-full text-xs font-semibold ${alert.status === 'Active' ? 'bg-red-200 text-red-800' : alert.status === 'Resolved' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>{alert.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main App Component
export default function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderContent = () => {
    switch (page) {
      case 'touristApp':
        return <TouristAppMockPage setPage={setPage} />;
      case 'dashboard':
        return <DashboardMockPage setPage={setPage} />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  const showMainLayout = page === 'home' || page === 'about';

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {showMainLayout && <Header setPage={setPage} />}
      <main>
        {renderContent()}
      </main>
      {showMainLayout && <Footer />}
    </div>
  );
}

