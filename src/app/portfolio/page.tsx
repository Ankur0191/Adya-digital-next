"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

type Category = {
  name: string;
  projects: Project[];
};

const categories: Category[] = [
  {
    name: "Web Development",
    projects: [
      {
        title: "CMatrix AI",
        description: "A cutting-edge AI startup website built with Next.js and animations.",
        image: "/portfolio/cmatrix.jpg",
        link: "https://cmatrix.ai",
      },
      {
        title: "Edumind",
        description: "A dynamic educational platform for mock tests and live classes.",
        image: "/portfolio/edumind.jpg",
        link: "https://edumind.in",
      },
    ],
  },
  {
    name: "Branding & Design",
    projects: [
      {
        title: "NutraGenix",
        description: "Complete branding including logo, packaging and social identity.",
        image: "/portfolio/nutragenix.jpg",
        link: "#",
      },
      {
        title: "Ananta Threads",
        description: "A clothing brand designed with unique identity and modern color palette.",
        image: "/portfolio/ananta.jpg",
        link: "#",
      },
    ],
  },
  {
    name: "E-Commerce",
    projects: [
      {
        title: "UrbanFlex Store",
        description: "Full Shopify store with custom theme for urban fashion.",
        image: "/portfolio/urbanflex.jpg",
        link: "https://urbanflex.shop",
      },
      {
        title: "GlowCare Beauty",
        description: "WooCommerce skincare store built with Elementor + WordPress.",
        image: "/portfolio/glowcare.jpg",
        link: "#",
      },
    ],
  },
  {
    name: "Marketing Campaigns",
    projects: [
      {
        title: "WictroniX Launch Campaign",
        description: "Meta and Google campaigns that drove 2.5x ROI in 60 days.",
        image: "/portfolio/wictronix-campaign.jpg",
        link: "#",
      },
      {
        title: "TechFest College Promo",
        description: "Animated video ads and influencer push across North India.",
        image: "/portfolio/techfest.jpg",
        link: "#",
      },
    ],
  },
];

const PortfolioPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="w-full px-6 md:px-20 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            From startups to scale-ups, here’s a glimpse of what we’ve built with passion and precision.
          </p>
        </div>

        {categories.map((category, index) => (
          <section key={index} className="mb-20">
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 border-l-4 border-emerald-500 pl-4">
              {category.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {category.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl overflow-hidden transition"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-300 mt-2">{project.description}</p>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline inline-block mt-4"
                    >
                      Visit Project →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
