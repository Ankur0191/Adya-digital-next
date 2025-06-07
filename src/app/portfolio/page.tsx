"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const services = [
  {
    id: 1,
    name: "Web Development",
    description:
      "From landing pages to full-stack web apps, we develop responsive and lightning-fast websites tailored to your brand's needs.",
  },
  {
    id: 2,
    name: "Graphic Design",
    description:
      "We design logos, brand kits, and creative assets that give your business a unique and professional identity.",
  },
  {
    id: 3,
    name: "Digital Marketing",
    description:
      "SEO, Social Media, Performance Marketing – we make sure your audience finds you everywhere online.",
  },
  {
    id: 4,
    name: "UI/UX Design",
    description:
      "We create beautiful, intuitive user interfaces backed by solid UX research that keeps users engaged.",
  },
  {
    id: 5,
    name: "Brand Strategy",
    description:
      "Beyond just design—we help shape your story, voice, and mission into a compelling brand identity.",
  },
];

export default function PortfolioPage() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="flex flex-col md:flex-row w-full h-[calc(100vh-100px)]">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/5 border-r border-white/10 bg-black p-4 md:p-6">
          <h2 className="text-xl font-semibold mb-6 text-center md:text-left">
            Services
          </h2>
          <ul className="space-y-3">
            {services.map((service) => (
              <li
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`cursor-pointer px-4 py-2 rounded-lg transition duration-300 ${
                  selectedService.id === service.id
                    ? "bg-white text-black font-bold"
                    : "hover:bg-white/10"
                }`}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content Area */}
        <div className="w-full md:w-4/5 bg-black p-6 md:p-10 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-white">
              {selectedService.name}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {selectedService.description}
            </p>

            {/* Optional: Add Images, Stats, or CTA Buttons Here */}
            <div className="mt-10">
              <div className="bg-white text-black rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Why Choose Adya Digital?
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>End-to-End Integration</li>
                  <li>Innovative and Creative Approach</li>
                  <li>Fast Turnaround Time</li>
                  <li>Custom Solutions for Every Business</li>
                  <li>Expert Team Across Domains</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
