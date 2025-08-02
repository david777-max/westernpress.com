import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const GetStarted: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] text-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/background-pattern.svg')] opacity-10 bg-cover" />

      {/* Fashion background images */}
      <div className="absolute inset-0 z-0 bg-[url('/fashion-banner.jpg')] bg-cover bg-center opacity-20 mix-blend-multiply" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[url('/model-pose.png')] bg-contain bg-no-repeat opacity-30 hidden md:block" />

      <div className="relative z-10 container mx-auto px-6 max-w-2xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Get Started?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Connect with us today to kickstart your journey to a better job — no forms, no fuss.
        </motion.p>

        <div className="flex flex-col gap-6 items-center justify-center">
          <motion.a 
            href="mailto:david@westernpress.com.au" 
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Mail className="w-5 h-5 mr-2" />
            david@westernpress.com.au
          </motion.a>

          <motion.a 
            href="https://wa.me/15806094589" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-105"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp: +1 (512) 704 9060
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
