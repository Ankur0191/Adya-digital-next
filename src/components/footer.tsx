"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Adya Digital</h2>
          <p className="text-sm text-gray-300">
            Modern Valley, Kharar, Mohali<br />
            Phone: 0000000000<br />
            Email: <a href="mailto:info@adyadigital.com" className="underline">info@adyadigital.com</a><br />
            Support: <a href="mailto:support@adyadigital.com" className="underline">support@adyadigital.com</a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:underline">Refund Policy</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-sm text-gray-300 mb-4">
            Get updates about new services, offers, and insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="px-4 py-2 rounded-md text-black w-full sm:w-auto flex-grow"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Adya Digital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
