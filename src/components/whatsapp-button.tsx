// components/whatsapp-button.tsx
"use client";

import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function WhatsAppButton() {
  const phoneNumber = "918081733365"; // Replace with your number

  return (
    <Link
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50"
    >
      <div className="relative bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 shine">
        <FaWhatsapp size={28} />
      </div>
    </Link>
  );
}
