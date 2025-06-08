"use client";

import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import WebsiteDesign from "./website-desing";
import GraphicDesign from "./graphic-desing";
import ShopifyStores from "./shopify-stores";
import Brands from "./brands";
import Services from "./services";
import { useRef } from "react";
import FAQS from "./faq";
import Footer from "@/components/footer";

export default function Home() {
  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <Spotlight className="hidden md:flex md:-top-80 left-80" fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Empowering Businesses <br /> Through Digital Innovation
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-xl text-center mx-auto px-4">
          At Adya Digital, we specialize in crafting tailored digital marketing strategies that drive real results. Whether it’s SEO, social media, web design, or branding — we help your business grow online with clarity and purpose.
        </p>

        <Link
          href={"https://calendly.com/adyadigitalofficial/free-consultation-call?fbclid=PAZXh0bgNhZW0CMTEAAafqgFWB1LLwl9rWh_7TBYJUVSYnD8n6pH1lQel2ZbR31lEgmbsRt3dfFOUrfA_aem_2VPHUFdG3VoxIY5mA-7OWQ"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-60 p-2 mx-auto my-6 text-white"
        >
          Get Free Consultation
        </Link>

        <div className="w-full pt-20">
          <SliderOne />
        </div>
        <div ref={websiteDesignRef}>
          <WebsiteDesign />
        </div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
        </div>
        <div ref={shopifyStoresRef}>
          <ShopifyStores />
        </div>
        <div ref={brandsRef}>
          <Brands />
        </div>
        <div id="services">
          <Services />
        </div>
        <FAQS />
        <Footer />
      </div>
    </div>
  );
}
