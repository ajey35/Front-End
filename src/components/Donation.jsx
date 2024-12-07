import React, { useState } from 'react';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import api from '../api/api';
import Button from './Button';

const libraries = ['places'];

const DonationForm = () => {
    const [formData, setFormData] = useState({
        type: '',
        quantity: '',
        location: '',
        contactInfo: '',
    });

    const [autocomplete, setAutocomplete] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey:"AIzaSyD0V20e7IgJ_iDfUp8J5TqyPs6l-4TGT3c",
        libraries,
    });

    const handlePlaceSelected = () => {
        if (autocomplete) {
            const place = autocomplete.getPlace();
            setFormData({ ...formData, location: place.formatted_address });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!formData.type || !formData.quantity || !formData.location || !formData.contactInfo) {
            setError('All fields are required.');
            setLoading(false);
            return;
        }

        try {
            await api.post('/donations/create', formData);
            alert('Donation submitted successfully!');
        } catch (err) {
            console.error(err);
            setError('Failed to submit donation. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            {isLoaded ? (
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Donate Food</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="mb-4">
                        <label className="block text-gray-700">Food Type:</label>
                        <input
                            type="text"
                            name="type"
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Quantity:</label>
                        <input
                            type="text"
                            name="quantity"
                            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Location:</label>
                        <Autocomplete
                            onLoad={(autoCompleteInstance) => setAutocomplete(autoCompleteInstance)}
                            onPlaceChanged={handlePlaceSelected}
                        >
                            <input
                                type="text"
                                placeholder="Enter location"
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                        </Autocomplete>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Contact Info:</label>
                        <input
                            type="text"
                            name="contactInfo"
                            onChange={(e) =>
                                setFormData({ ...formData, contactInfo: e.target.value })
                            }
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    <Button
                        type="submit"
                        label={loading ? 'Submitting...' : 'Submit Donation'}
                        disabled={loading}
                        className="w-full"
                    />
                </form>
            ) : (
                <p>Loading Google Maps...</p>
            )}
        </div>
    );
};

export default DonationForm;
