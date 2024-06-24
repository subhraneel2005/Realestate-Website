// components/HomePage.js

import React from 'react';

const HomePage = () => {
    return (
        <div className="homepage">
            <section className="intro-section bg-blue-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center">
                        <div className="max-w-lg">
                            <h1 className="text-4xl font-bold mb-4">Welcome to James Charles Realty</h1>
                            <p className="text-lg mb-6">James Charles Realty offers exceptional service in the [City/Region] real estate market. With over [number] years of experience, James Charles is dedicated to helping you find your dream home or sell your property seamlessly.</p>
                            <div className="flex space-x-4">
                                <button className="bg-white text-blue-900 hover:bg-blue-800 hover:text-white py-3 px-6 rounded-lg shadow-md focus:outline-none focus:shadow-outline">Contact James</button>
                                <button className="bg-blue-500 text-white hover:bg-blue-600 py-3 px-6 rounded-lg shadow-md focus:outline-none focus:shadow-outline">View Listings</button>
                                {/* Replace with actual functionality or links */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured-properties-section py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Example property card */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="/house1.jpg" alt="House" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Modern Downtown Apartment</h3>
                                <p className="text-gray-700 mb-2">Price: $500,000</p>
                                <p className="text-gray-700">Bedrooms: 2 | Bathrooms: 2</p>
                                {/* Add more details or image */}
                            </div>
                        </div>
                        {/* Add more property cards as needed */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
