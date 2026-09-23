import React from 'react';

export const metadata = {
  title: 'Our Services | VM SQUARE',
  description: 'Explore the comprehensive security services offered by VM SQUARE, including physical security, cybersecurity, and risk management.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-vmnavy mb-8 text-center">Our Services</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          We offer a full spectrum of security solutions tailored to meet the unique challenges of your business environment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for service list */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-vmnavy/10 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-vmdark mb-2">Service #{i}</h3>
              <p className="text-gray-600">
                Detailed description of the security service provided, highlighting the benefits and methodologies used to ensure safety.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
