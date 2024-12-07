import React from 'react';
import Header from './Header';

const About = () => (
    <div className="bg-gray-100 min-h-screen">
        <Header title="About Us" subtitle="Learn more about Hunger 🔗 Chain" />
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8 mt-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-6 text-gray-700">
                Hunger 🔗 Chain is a platform designed to connect food donors with NGOs and
                orphanages, reducing food waste and fighting hunger. Our mission is to create a
                sustainable food ecosystem where surplus is shared and no one goes to bed hungry.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="mb-6 text-gray-700">
                A world where every meal is valued and shared, making food waste a thing of the past.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-700">
                A passionate group of individuals committed to making a difference in the fight
                against hunger. We are always looking for more hands to join us in this journey.
            </p>
        </div>
    </div>
);

export default About;
