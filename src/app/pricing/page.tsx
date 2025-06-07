"use client";

import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";
import Navbar from "@/components/navbar";

const plans = [
  {
    name: "Kickstart Plan",
    price: "Setup: ₹7,499 | Monthly: ₹8,499",
    features: [
      "Responsive Website for All Screens",
      "Design + Development",
      "Private Communication Channel",
      "1–3 Days Turnaround Time",
    ],
    description: "Ideal for solopreneurs & small businesses launching their digital journey.",
    button: "Buy Now",
    link: "https://buy.stripe.com/test_8wM15jgAm4iV2UE7ss",
  },
  {
    name: "Growth Plan",
    price: "Setup: ₹14,500 | Monthly: ₹17,499",
    features: [
      "Fully Responsive on All Devices",
      "React / Next.js / Tailwind Codebase",
      "Design + Development",
      "Private Communication Channel",
      "24hr Support Response",
      "3–5 Days Turnaround Time",
    ],
    description: "Perfect for growing startups & teams looking to scale with robust tech and design.",
    button: "Buy Now",
    link: "https://buy.stripe.com/test_4gw4hv0Bo4iV3YIfYZ",
  },
  {
    name: "Acceleration Plan",
    price: "Setup: ₹32,000 | Monthly: ₹35,599",
    features: [
      "Custom Website & Software Development",
      "React / Next.js / Tailwind Codebase",
      "Unlimited Revisions",
      "Dedicated Project Manager",
      "24hr Priority Support",
      "Private Communication Channel",
      "Performance & Conversion Optimization",
    ],
    description: "Designed for established businesses looking to accelerate performance & digital transformation.",
    button: "Contact Us",
    link: "/contact",
  },
];

const Pricing = () => {
  return (
    <>
      {/* Pricing Plans */}
      <div className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Navbar
          scrollToWebsiteDesign={() => {}}
          scrollToGraphicDesign={() => {}}
          scrollToShopifyStores={() => {}}
          scrollToBrands={() => {}}
          scrollToServices={() => {}}
        />

        <div className="flex flex-col items-center justify-center text-center mt-10 px-4 sm:px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl pb-6 md:pb-10 text-slate-300 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
            Get a Whole Team at the Price of One!
          </h1>

          <p className="text-base text-neutral-400 px-2 md:px-0 max-w-3xl mb-2">
            💥 <strong>New FY Discount</strong>: <u>Flat 15% OFF</u> on all plans <br />
            ⏳ <strong>Valid Until:</strong> 31st March, 2025
          </p>

          <p className="text-sm text-neutral-400 px-4 max-w-xl mb-10 italic">
            We prefer calling it <strong>“Investment”</strong> — because you’ll definitely see returns.
          </p>

          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-4 sm:px-6 md:px-10 md:w-4/5 2xl:w-3/4 pb-20">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="border border-neutral-800 hover:border-neutral-700 transition-all duration-300 p-6 rounded-3xl flex flex-col justify-between bg-black/10 backdrop-blur"
              >
                <div className="text-2xl font-semibold text-white mb-2">{plan.name}</div>
                <div className="text-lg text-neutral-300 mb-3">{plan.price}</div>
                <p className="text-sm text-neutral-400 mb-4">{plan.description}</p>

                <ul className="text-left mb-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-base flex items-center text-neutral-200">
                      <PiCheckCircleFill className="text-green-400 mr-2 text-lg" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.link}
                  className={`rounded-3xl mt-4 py-2 text-white w-full flex justify-center font-medium ${
                    plan.button === "Contact Us"
                      ? "bg-gradient-to-r from-purple-500 to-blue-300"
                      : "bg-gradient-to-r from-emerald-500 to-blue-300"
                  }`}
                >
                  {plan.button}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-xs text-neutral-400 px-6 text-center max-w-3xl pb-20">
            <p>📝 Plans are billed monthly. Prices shown are pre-discount. GST applicable.</p>
          </div>
        </div>
      </div>

      {/* Individual Services Section */}
      <div className="bg-neutral-950 text-white px-6 py-20 w-full mt-10">
        <h2 className="text-3xl md:text-5xl text-center mb-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Individual Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-sm px-2">
          {[
            {
              title: "Tech",
              color: "text-emerald-400",
              items: [
                "Website – ₹8,999",
                "Software Dev (Web & Mobile App) – ₹44,999",
                "AI & ML Solutions – ₹60,999",
                "Cybersecurity Audit – ₹18,999",
                "Cloud Management – ₹6,000/month",
                "IT Consultancy – ₹9,499",
              ],
            },
            {
              title: "Marketing",
              color: "text-pink-400",
              items: [
                "SEO – ₹6,499/month",
                "Social Media Marketing – ₹4,999/month",
                "Email/WhatsApp Marketing – ₹4,595/month",
                "Ad Campaigns – 5% of Ad Spend",
                "Personal Branding – ₹3,499/month",
              ],
            },
            {
              title: "Design",
              color: "text-yellow-400",
              items: [
                "Logo, Brochure, Business Card – ₹1,299",
                "Pitch Deck – ₹1,549",
                "Photo & Video Editing – ₹4,699",
              ],
            },
            {
              title: "Strategy & Research",
              color: "text-blue-400",
              items: [
                "Strategy Consulting – ₹20,499",
                "Competitor/Market Research – ₹6,499",
              ],
            },
            {
              title: "Content & Legal",
              color: "text-purple-400",
              items: [
                "Copywriting – ₹1,942/month",
                "Articles & Blogs – ₹2,499/month",
                "Guest Posting – ₹1,699/month",
                "Company Registration – ₹8,549",
                "GST Filings – ₹1,999/month",
                "Legal Compliances – ₹15,840",
                "Fundraising & Investment Support – ₹16,640",
              ],
            },
            {
              title: "Miscellaneous",
              color: "text-orange-400",
              items: [
                "HR – Hiring Candidates – ₹2,999",
                "Event Management – ₹14,999",
              ],
            },
          ].map((block, i) => (
            <div
              key={i}
              className="bg-black/10 border border-neutral-800 hover:border-neutral-700 p-6 rounded-xl space-y-3 transition-all duration-300"
            >
              <h3 className={`text-xl font-semibold mb-3 border-b border-neutral-800 pb-2 ${block.color}`}>
                {block.title}
              </h3>
              <ul className="text-neutral-300 space-y-2">
                {block.items.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-xs text-neutral-400 text-center mt-12">
          All prices are starting prices and may vary based on requirements. GST applicable.
        </div>
      </div>
    </>
  );
};

export default Pricing;
