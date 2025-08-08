import React from "react";
import { Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const GetStarted: React.FC = () => {
  const portraits = [
    
  ];

  return (
    <section className="relative overflow-hidden py-24">
      {/* BG: gradient + noise + blobs */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-rose-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900" />
      <div className="pointer-events-none absolute -top-24 -left-16 -z-10 h-96 w-96 rounded-full bg-pink-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 -z-10 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.05),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]" />

      <div className="container mx-auto max-w-6xl px-6">
        {/* Headline block */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl dark:text-white">
            Ready to <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">Get Started</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-700 dark:text-gray-300">
            DM or email us and we’ll kick off your job hunt today—no forms, no fuss.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="mailto:david@westernpress.com.au"
              className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="mr-2 h-5 w-5" />
              david@westernpress.com.au
            </motion.a>

            <a
              href="mailto:david@westernpress.com.au?subject=I%20want%20to%20start"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white/70 px-6 py-3 text-gray-900 backdrop-blur transition hover:bg-white dark:border-gray-700 dark:bg-gray-900/50 dark:text-white dark:hover:bg-gray-900"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask a quick question
            </a>
          </div>
        </motion.div>

        {/* Collage — “unregular” layout with rotation/clip */}
        <div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-12 gap-4">
          {/* skewed backdrop card */}
          <div className="pointer-events-none absolute -inset-x-8 top-8 -z-10 h-40 -skew-y-3 rounded-3xl bg-white/60 shadow-xl backdrop-blur-md dark:bg-gray-900/50" />

          {portraits.map((src, i) => (
            <motion.div
              key={src}
              className={[
                "overflow-hidden rounded-2xl border border-white/50 bg-white/60 shadow-lg backdrop-blur dark:border-gray-800/60 dark:bg-gray-900/60",
                // irregular sizing
                i % 6 === 0 ? "col-span-7 row-span-2" :
                i % 6 === 1 ? "col-span-5 row-span-1" :
                i % 6 === 2 ? "col-span-4 row-span-1" :
                i % 6 === 3 ? "col-span-8 row-span-2" :
                i % 6 === 4 ? "col-span-4 row-span-1" :
                "col-span-6 row-span-1",
              ].join(" ")}
              initial={{ opacity: 0, y: 24, rotate: i % 2 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? -0.5 : 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
            >
              <img
                src={src}
                alt="Client fashion/portrait"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-emerald-300/40 bg-gradient-to-r from-emerald-500 to-blue-600 p-[1px] shadow-xl">
            <div className="rounded-[22px] bg-white/80 p-6 backdrop-blur dark:bg-gray-950/70">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-center text-lg font-semibold text-gray-900 sm:text-left dark:text-white">
                  We’ll start applying **today** and line up interviews this week.
                </p>
                <a
                  href="mailto:david@westernpress.com.au?subject=Start%20my%20applications"
                  className="inline-flex items-center rounded-full bg-white px-5 py-3 font-semibold text-gray-900 shadow-md transition hover:bg-gray-100 sm:bg-gray-900 sm:text-white sm:hover:bg-gray-800 dark:sm:bg-white dark:sm:text-gray-900 dark:sm:hover:bg-gray-200"
                >
                  Email to start
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
            By reaching out you agree to be contacted about roles and interview prep. No spam, ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
