import React from 'react';

export const metadata = {
  title: 'Request a Quote | VM SQUARE',
  description: 'Request a customized security quote from VM SQUARE.',
};

export default function RequestQuotePage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-vmnavy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-vmgold mb-4">Request a Quote</h1>
            <p className="text-lg text-gray-300">
              Provide us with details about your security needs, and our experts will craft a tailored solution for you.
            </p>
          </div>

          <div className="bg-white text-vmdark p-8 md:p-12 rounded-2xl shadow-xl">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vmnavy focus:border-vmnavy transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vmnavy focus:border-vmnavy transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vmnavy focus:border-vmnavy transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vmnavy focus:border-vmnavy transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service of Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vmnavy focus:border-vmnavy transition-all bg-white">
                  <option>Physical Security</option>
                  <option>Cyber Security</option>
                  <option>Risk Assessment</option>
                  <option>Executive Protection</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vmnavy focus:border-vmnavy transition-all" placeholder="Please describe your security requirements..."></textarea>
              </div>

              <button type="submit" className="w-full bg-vmgold text-vmdark font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all text-lg shadow-lg">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
