import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register';
import DonationForm from './components/Donation';
import DonorDashboard from './Dashboards/DonarDashboard';
import RecipientDashboard from './Dashboards/RecipientDashboard';
import AdminDashboard from './Dashboards/AdminDashboard';
import ContactUs from './components/ContactUs';
import Blog from './Dashboards/Blog';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/donation-form" element={<DonationForm />} />
                <Route path="/donor-dashboard" element={<DonorDashboard />} />
                <Route path="/recipient-dashboard" element={<RecipientDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </Router>
    );
}

export default App;