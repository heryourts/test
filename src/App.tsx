import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Search, Menu, Home, User, PlusSquare, Calendar, Tag, X } from 'lucide-react';
import Directory from './components/Directory';
import Social from './components/Social';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import CreateContent from './components/CreateContent';
import Events from './components/Events';
import SearchPage from './components/SearchPage';
import Profile from './components/Profile';
import SideMenu from './components/SideMenu';

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 pb-16">
        <Navbar onMenuClick={() => setIsSideMenuOpen(true)} />
        <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Social />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/create" element={<CreateContent />} />
            <Route path="/events" element={<Events />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;