import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will respond shortly.');
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header title="Contact Us" subtitle="We'd love to hear from you!" />
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mt-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name:</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Message:</label>
                        <textarea
                            name="message"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        ></textarea>
                    </div>
                    <Button type="submit" label="Send Message" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
