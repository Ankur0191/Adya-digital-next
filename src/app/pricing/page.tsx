"use client";

import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const plans = [
  {
    name: "Kickstart Plan",
    price: "₹8,499/month",
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
    price: "₹17,499/month",
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
    price: "₹35,599/month",
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

          <p className="text-sm text-neutral-400 px-4 max-w-xl mb-6 italic">
            We prefer calling it <strong>“Investment”</strong> — because you’ll definitely see returns.
          </p>

          <p className="text-sm text-yellow-400 italic max-w-xl mb-10">
            ⚙️ The <strong>first month</strong> focuses on setup, strategy planning, and initial infrastructure — execution begins from Month 2.
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

        <div className="overflow-x-auto max-w-7xl mx-auto">
          <table className="min-w-full border border-neutral-800 text-sm text-left text-neutral-300 rounded-xl overflow-hidden">
            <thead className="bg-black/20 text-neutral-200">
              <tr>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Starting Price</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tech", "Website", "₹8,999"],
                ["Tech", "Software Dev (Web & Mobile App)", "₹44,999"],
                ["Tech", "AI & ML Solutions", "₹60,999"],
                ["Tech", "Cybersecurity Audit", "₹18,999"],
                ["Tech", "Cloud Management", "₹6,000/month"],
                ["Tech", "IT Consultancy", "₹9,499"],

                ["Marketing", "SEO", "₹6,499/month"],
                ["Marketing", "Social Media Marketing", "₹4,999/month"],
                ["Marketing", "Email/WhatsApp Marketing", "₹4,595/month"],
                ["Marketing", "Ad Campaigns", "5% of Ad Spend"],
                ["Marketing", "Personal Branding", "₹3,499/month"],

                ["Design", "Logo, Brochure, Business Card", "₹1,299"],
                ["Design", "Pitch Deck", "₹1,549"],
                ["Design", "Photo & Video Editing", "₹4,699"],

                ["Strategy & Research", "Strategy Consulting", "₹20,499"],
                ["Strategy & Research", "Competitor/Market Research", "₹6,499"],

                ["Content & Legal", "Copywriting", "₹1,942/month"],
                ["Content & Legal", "Articles & Blogs", "₹2,499/month"],
                ["Content & Legal", "Guest Posting", "₹1,699/month"],
                ["Content & Legal", "Company Registration", "₹8,549"],
                ["Content & Legal", "GST Filings", "₹1,999/month"],
                ["Content & Legal", "Legal Compliances", "₹15,840"],
                ["Content & Legal", "Fundraising & Investment Support", "₹16,640"],

                ["Miscellaneous", "HR – Hiring Candidates", "₹2,999"],
                ["Miscellaneous", "Event Management", "₹14,999"],
              ].map(([category, service, price], index) => (
                <tr key={index} className="border-t border-neutral-800 hover:bg-black/20 transition-all">
                  <td className="px-4 py-3 font-medium text-emerald-300">{category}</td>
                  <td className="px-4 py-3">{service}</td>
                  <td className="px-4 py-3 text-yellow-300">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-xs text-neutral-400 text-center mt-12">
          All prices are starting rates and may vary based on scope. GST applicable.
        </div>
        <div className="mt-12"></div>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
