import React, { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
const AdminDashboard = () => {
    const [donations, setDonations] = useState([
        { id: 1, type: 'Rice', quantity: '10 kg', status: 'Pending', donor: 'John Doe' },
        { id: 2, type: 'Vegetables', quantity: '5 kg', status: 'Accepted', donor: 'Jane Smith' },
    ]);

    const handleVerifyDonation = (id) => {
        setDonations((prevDonations) =>
            prevDonations.map((donation) =>
                donation.id === id ? { ...donation, status: 'Verified' } : donation
            )
        );
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header title="Admin Dashboard" />
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8 mt-6">
                <h2 className="text-2xl font-bold mb-4">Manage Donations</h2>
                <ul className="space-y-4">
                    {donations.map((donation) => (
                        <li
                            key={donation.id}
                            className="p-4 border rounded-lg flex justify-between items-center"
                        >
                            <div>
                                <p className="font-semibold">Type: {donation.type}</p>
                                <p>Quantity: {donation.quantity}</p>
                                <p>Status: {donation.status}</p>
                                <p>Donor: {donation.donor}</p>
                            </div>
                            {donation.status === 'Pending' && (
                                <Button
                                    label="Verify"
                                    onClick={() => handleVerifyDonation(donation.id)}
                                    className="bg-blue-500 hover:bg-blue-600"
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;
