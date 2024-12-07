import Header from "../components/Header";
import Button from "../components/Button";
const DonorDashboard = () => {
    const donations = [
        { id: 1, type: 'Bread', quantity: '10 loaves', status: 'Pending' },
        { id: 2, type: 'Rice', quantity: '15 kg', status: 'Accepted' },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header title="Donor Dashboard" subtitle="Track your donations" />
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8 mt-6">
                <h2 className="text-2xl font-bold mb-4">Your Donations</h2>
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
                            </div>
                            <span
                                className={`px-4 py-2 rounded-lg ${
                                    donation.status === 'Accepted'
                                        ? 'bg-green-500 text-white'
                                        : 'bg-yellow-500 text-white'
                                }`}
                            >
                                {donation.status}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DonorDashboard;
