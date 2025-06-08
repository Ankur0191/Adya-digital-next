"use client";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToWebsiteDesign?: () => void;
  scrollToGraphicDesign?: () => void;
  scrollToShopifyStores?: () => void;
  scrollToBrands?: () => void;
  scrollToServices?: () => void;
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices,
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div className="mb-10">
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        {/* Replaced logo image with bold text */}
        <div>
          <Link href="/" className="cursor-pointer text-white font-extrabold text-xl md:text-2xl tracking-wide">
            ADYA.DIGITAL
          </Link>
        </div>

        <div
          className="cursor-pointer hidden md:flex space-x-10 items-center
             text-slate-300 text-center bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50"
        >
          <Link href='/' className="hover:text-gray-50">
            Home 
          </Link>
          <Link href='/services' className="hover:text-gray-50">
            Services 
          </Link>
          <div onClick={() => scrollToShopifyStores?.()} className="hover:text-gray-50">
            Portfolio
          </div>
          <div onClick={() => scrollToBrands?.()} className="hover:text-gray-50">
            Clients 
          </div>
          <Link href="/pricing" className="hover:text-gray-50">
            Pricing
          </Link>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div onClick={toggleDropDown} className="w-8 h-8 text-slate-300 cursor-pointer">
              <X />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify onClick={toggleDropDown} className="w-8 h-8 text-slate-300 cursor-pointer" />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="https://calendly.com/adyadigitalofficial/free-consultation-call?fbclid=PAZXh0bgNhZW0CMTEAAafqgFWB1LLwl9rWh_7TBYJUVSYnD8n6pH1lQel2ZbR31lEgmbsRt3dfFOUrfA_aem_2VPHUFdG3VoxIY5mA-7OWQ"
            className="inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
            focus:ring-offset-slate-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
