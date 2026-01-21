import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="w-full px-10 py-6 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center gap-3">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
            <path d="M20 20H80L40 80H80" stroke="#1F2937" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40 20V80" stroke="#CBB89D" strokeWidth="8" strokeLinecap="round" />
          </svg>
          <div className="leading-tight">
            <h1 className="text-xl font-semibold tracking-wide">ZENVERA</h1>
            <p className="text-[10px] tracking-widest text-gray-500">PROPERTY SOLUTION</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm tracking-wide">
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl px-6 text-white">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Property Solutions<br />You Can Trust
          </h2>
          <p className="text-lg text-gray-200 mb-10">
            Reliable property services designed to protect, manage, and elevate your investment.
          </p>
          <a href="#contact" className="inline-block px-10 py-4 bg-white text-gray-900 text-sm tracking-widest uppercase">
            Contact Us
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-10 py-24 max-w-7xl mx-auto">
        <h3 className="text-3xl font-light text-center mb-16">Our Services</h3>
        <div className="grid md:grid-cols-4 gap-10">
          {[
            { title: "Property Maintenance", img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea" },
            { title: "Tenant Coordination", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
            { title: "Investment Consulting", img: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc" },
            { title: "Property Turnovers", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
          ].map(service => (
            <div key={service.title} className="text-center">
              <img src={service.img} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="font-medium">{service.title}</h4>
              <p className="text-sm text-gray-600">Professional, dependable service.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 px-10 py-20 text-center">
        <h3 className="text-3xl font-light mb-4">Get In Touch</h3>
        <p>Email: customercare@zenverallc.com</p>
        <p>Phone: (510) 362-4169</p>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
        © {new Date().getFullYear()} Zenvera Property Solution
      </footer>
    </div>
  );
}

