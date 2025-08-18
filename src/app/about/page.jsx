"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-red-50 via-red-100 to-red-50 min-h-screen py-12 px-4 md:px-20">
      
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-red-700 mb-4">
          Welcome to Travel Guru
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          Your ultimate companion for exploring hidden gems and iconic destinations. Discover, plan, and enjoy every journey with Travel Guru.
        </p>
      </div>

    
      <div className="flex justify-center mb-16">
        <img
          src="https://i.ibb.co/5W7PZXW5/sainmartin.jpg"
          alt="Travel Adventure"
          className="rounded-3xl shadow-lg w-full max-w-4xl object-cover"
        />
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-red-600 mb-4">🌟 Our Vision</h2>
          <p className="text-gray-600">
            At Travel Guru, our vision is to inspire and empower travelers to explore the world with curiosity and confidence. We provide insightful guides, exciting itineraries, and trusted advice for unforgettable adventures.
          </p>
        </div>

    
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-red-600 mb-4">🤝 Join Travel Guru</h2>
          <p className="text-gray-600">
            Travel is best when shared. Join our community of explorers, share experiences, tips, and stories, and help others discover the magic of every destination.
          </p>
        </div>

    
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-red-600 mb-4">💡 Our Promise</h2>
          <p className="text-gray-600">
            We promise to provide the most accurate, helpful, and inspiring travel content. Every journey with Travel Guru is a step toward adventure, discovery, and unforgettable memories.
          </p>
        </div>
      </div>

   
      <div className="mt-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
          Ready to Explore?
        </h2>
        <p className="text-gray-700 mb-6">
          Start your journey with Travel Guru today. Discover destinations, plan trips, and make memories that last a lifetime.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
          Explore Now
        </button>
      </div>
    </div>
  );
}
