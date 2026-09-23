import React from 'react';

export const metadata = {
  title: 'Industries We Serve | VM SQUARE',
  description: 'Discover how VM SQUARE provides specialized security solutions for various industries including Corporate, Healthcare, and Aviation.',
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-vmdark text-vmlight">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-vmgold mb-8 text-center">Industries We Serve</h1>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
          Every industry faces unique security challenges. Our sector-specific expertise allows us to design and implement highly effective protection strategies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Placeholder for industry list */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-6 bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 shrink-0 bg-vmnavy rounded-lg border border-vmgold flex items-center justify-center text-vmgold font-bold text-xl">
                {i}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Industry Sector {i}</h3>
                <p className="text-gray-400">
                  Tailored security protocols addressing the specific compliance and risk factors inherent to this industry sector. We deploy specialized teams trained for these exact environments.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
