"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const services = [
  {
    id: 1,
    name: "Website Design & Development",
    description:
      "We build lightning-fast, responsive, and SEO-ready websites that are custom-crafted to reflect your brand and convert visitors into customers. Whether it's a landing page or a full-stack web app, we’ve got you covered.",
  },
  {
    id: 2,
    name: "Brand Identity & Design",
    description:
      "From logos to complete visual systems, we design brands that tell your story, connect emotionally, and stand out in crowded markets. Cohesive, modern, and unforgettable.",
  },
  {
    id: 3,
    name: "Performance Marketing",
    description:
      "We create data-backed ad campaigns across Meta, Google, and LinkedIn that focus on ROI, not just reach. Paid ads, remarketing, sales funnels — everything optimized for conversion.",
  },
  {
    id: 4,
    name: "Social Media Strategy",
    description:
      "We don’t just post — we build digital communities. From content calendars to influencer collaborations, we help you grow, engage, and monetize your social presence organically and via paid tactics.",
  },
  {
    id: 5,
    name: "SEO & Content Marketing",
    description:
      "We help you rank, resonate, and generate leads. With targeted content strategies and advanced SEO practices, we improve visibility and bring in traffic that actually converts.",
  },
  {
    id: 6,
    name: "UI/UX & Product Design",
    description:
      "We design intuitive user experiences and stunning interfaces that keep users engaged and drive conversions. Built with research, tested with real users.",
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

            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="https://calendly.com/adyadigitalofficial/free-consultation-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg transition"
              >
                Book a Free Consultation
              </a>
            </div>

            {/* Why Adya Digital */}
            <div className="mt-12">
              <div className="bg-white text-black rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Why Choose Adya Digital?
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Full-Service Team Across Design, Tech & Marketing</li>
                  <li>Strategies Built for Results, Not Just Looks</li>
                  <li>Agile, Transparent and Client-Centric</li>
                  <li>Affordable Packages for Every Business Stage</li>
                  <li>Hands-On Support from Start to Scale</li>
                </ul>

                {/* Second CTA Button */}
                <div className="mt-6">
                  <a
                    href="https://calendly.com/adyadigitalofficial/free-consultation-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg transition"
                  >
                    Let's Discuss Your Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
