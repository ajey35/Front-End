import Header from "../components/Header";
import Button from "../components/Button";
const RecipientDashboard = () => {
    const availableDonations = [
        { id: 1, type: 'Vegetables', quantity: '7 kg', location: 'City Center' },
        { id: 2, type: 'Cereal', quantity: '15 packs', location: 'Downtown' },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header title="Recipient Dashboard" subtitle="Accept donations" />
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8 mt-6">
                <h2 className="text-2xl font-bold mb-4">Available Donations</h2>
                <ul className="space-y-4">
                    {availableDonations.map((donation) => (
                        <li
                            key={donation.id}
                            className="p-4 border rounded-lg flex justify-between items-center"
                        >
                            <div>
                                <p className="font-semibold">Type: {donation.type}</p>
                                <p>Quantity: {donation.quantity}</p>
                                <p>Location: {donation.location}</p>
                            </div>
                            <Button label="Accept" className="bg-blue-500 hover:bg-blue-600" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecipientDashboard;
