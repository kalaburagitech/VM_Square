import React from 'react';

export const metadata = {
  title: 'About Us | VM SQUARE',
  description: 'Learn about VM SQUARE, our history, mission, and the team behind our premier security services.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-vmlight">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-vmnavy mb-8">About VM SQUARE</h1>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 text-vmdark">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded with a vision to revolutionize the security industry, VM SQUARE has grown into a leading provider of comprehensive security solutions. Our journey began with a simple yet powerful mission: to provide unparalleled protection and peace of mind to our clients.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-vmdark">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To deliver world-class security services through a combination of highly trained personnel, cutting-edge technology, and unwavering dedication to our clients' safety.
          </p>
        </div>
      </div>
    </main>
  );
}
