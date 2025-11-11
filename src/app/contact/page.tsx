import React from "react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { FaSignalMessenger } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">
          Contact
        </h1>

        {/* Contact icons */}
        <div className="flex items-center justify-center gap-6 mb-2">
          <a
            href="https://wa.me/917970731851"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            <FaWhatsapp size={40} />
          </a>
          <a
            href="https://t.me/yourtelegramusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition-colors"
          >
            <FaTelegram size={40} />
          </a>
          <a
            href="#"
            className="hover:text-indigo-500 transition-colors"
            title="Signal"
          >
            <FaSignalMessenger size={40} />
          </a>
        </div>

        <p className="text-center text-gray-800 dark:text-gray-200 mb-6">
          +91 7970731851
        </p>

        {/* Email */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <a
            href="mailto:contact@wish-light.com"
            className="hover:text-red-500 transition-colors"
          >
            <MdEmail size={40} />
          </a>
        </div>
        <p className="text-center text-gray-800 dark:text-gray-200">
          contact@wish-light.com
        </p>
      </div>
    </div>
  );
};

export default Page;
