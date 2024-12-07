import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="bg-gray-100 min-h-screen">
        <header className="bg-green-500 text-white text-center py-10">
            <h1 className="text-4xl font-bold">Hunger 🔗 Chain</h1>
            <p className="text-lg mt-2">
                Connecting donors with surplus food to NGOs and orphanages in need.
            </p>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-10">
            <section className="text-center">
                <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white shadow-md rounded-lg">
                        <h3 className="font-semibold">Step 1</h3>
                        <p>Donors submit surplus food information.</p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg">
                        <h3 className="font-semibold">Step 2</h3>
                        <p>NGOs and orphanages get notified and accept donations.</p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg">
                        <h3 className="font-semibold">Step 3</h3>
                        <p>Together, we reduce food waste and fight hunger!</p>
                    </div>
                </div>
                <Link
                    to="/donation-form"
                    className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600"
                >
                    Donate Now
                </Link>
            </section>
        </main>
    </div>
);

export default Home;
