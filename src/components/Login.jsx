import React, { useState } from 'react';
import Button from './Button';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Login data submitted:', formData);
        // Add API call logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
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
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <Button type="submit" label="Login" className="w-full" />
            </form>
        </div>
    );
};

export default Login;
