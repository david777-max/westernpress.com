import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  RefreshCw,
  Brain,
  Target,
  Rocket,
  Clock,
  Users,
  CheckCircle,
  Sparkles,
  ShieldCheck
} from "lucide-react";

const Home: React.FC = () => {
  const heroImages = {
    bg: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2400&auto=format&fit=crop", // modern dev workspace
    overlayPortrait:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop", // confident professional (woman)
  };

  const logos = [
    "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
  ];

  const features = [
    {
      icon: RefreshCw,
      title: "Daily Job Applications",
      description:
        "We apply to dozens of relevant positions for you every single day—no spam, only matches.",
      badge: "Done-for-you"
    },
    {
      icon: Brain,
      title: "Curated Job Matching",
      description:
        "Matching based on skills, stack, location, and salary band using human + AI review.",
      badge: "Smart"
    },
    {
      icon: Target,
      title: "Focus Only on Interviews",
      description:
        "Skip the tedious grind. We prep you and route interviews straight to your inbox.",
      badge: "Focused"
    },
    {
      icon: Rocket,
      title: "Hired or We Don’t Get Paid",
      description:
        "Completely performance-based—our incentives are aligned with yours.",
      badge: "Aligned"
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Sign Agreement",
      description:
        "Quick, performance-based contract. Takes ~5 minutes to get rolling.",
    },
    {
      step: "02",
      title: "We Apply Daily",
      description:
        "20–50 curated applications per day to roles you’d actually take.",
    },
    {
      step: "03",
      title: "Get Interviews",
      description:
        "We handle follow-ups; you get interviews delivered to your inbox.",
    },
    {
      step: "04",
      title: "Live Interview Support",
      description:
        "Real-time help on recruiter screens, coding tests, system design, and behavioral rounds.",
    },
    {
      step: "05",
      title: "Land Your Job",
      description:
        "Negotiate confidently. We’ll help with comp strategy and timing.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior React Developer",
      company: "TechCorp",
      salary: "$145K",
      quote:
        "I got three solid interviews in the first week and an offer in 12 days. All I did was prep.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      name: "Alejandra Gómez",
      role: "Full-Stack Engineer",
      company: "GrowthHQ",
      salary: "$158K",
      quote:
        "They surfaced roles I wouldn’t have found. The mock interviews were clutch.",
      avatar:
        "https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      name: "Jennifer Park",
      role: "DevOps Engineer",
      company: "CloudTech",
      salary: "$155K",
      quote:
        "Under three weeks from contract to offer. Minimal context switching, maximum signal.",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&h=300&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* --- HERO --- */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages.bg})` }}
          aria-hidden
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-white/70 to-white dark:from-gray-950/70 dark:via-gray-950/80 dark:to-gray-950" />
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="container mx-auto max-w-7xl px-6 pt-28 pb-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-sm text-gray-700 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-300">
                <Sparkles className="h-4 w-4" />
                New: Interview day live support
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-6xl dark:text-white">
                Land Your Dream Developer Job in{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  15 Days
                </span>{" "}
                — Guaranteed
              </h1>

              <p className="mt-5 text-lg text-gray-700 md:text-xl dark:text-gray-300">
                Skip job boards. We apply **for** you—then coach you through
                every interview so you can focus on performing, not paperwork.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/get-started"
                  className="group inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-white shadow-lg transition hover:translate-y-[-1px] hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Get Started — No Upfront Fees
                  <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/70 px-6 py-3 text-gray-900 backdrop-blur transition hover:bg-white dark:border-gray-700 dark:bg-gray-900/50 dark:text-white dark:hover:bg-gray-900"
                >
                  Learn How It Works
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> 15-Day Guarantee
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> 500+ Developers Placed
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> No Upfront Fees
                </div>
              </div>
            </div>

            {/* Hero portrait card */}
            <div className="relative mx-auto w-full max-w-md md:max-w-lg">
              <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-2xl backdrop-blur dark:border-gray-800/60 dark:bg-gray-900/50">
                <img
                  src={heroImages.overlayPortrait}
                  alt="Happy engineer after receiving an offer"
                  className="h-[420px] w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-gray-200 bg-white/90 p-4 text-sm shadow-md backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      “Offer received 🎉”
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      +$25K vs. previous
                    </span>
                  </div>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    We coach comp strategy so you don’t leave money on the table.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo strip */}
          <div className="mt-14 grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-4">
            {logos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Partner logo"
                className="h-10 w-full rounded-md object-cover grayscale"
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section className="section-padding bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Why Developers Choose Us
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
              A polished pipeline from application to offer—with coaching that
              actually moves the needle.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    {f.badge}
                  </div>
                  <f.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (timeline) --- */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              How It Works
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
              From contract to offer—supported end-to-end.
            </p>
          </div>

          <ol className="relative mx-auto max-w-3xl space-y-8 border-l border-gray-200 pl-6 dark:border-gray-800">
            {steps.map((s, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[37px] flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                  {s.step}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">{s.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex justify-center">
            <Link
              to="/get-started"
              className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition hover:bg-blue-700"
            >
              Start in 5 Minutes <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Success Stories
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
              Real developers. Real offers. Real momentum.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={`${t.name} — ${t.role}`}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t.role} @ {t.company}
                    </p>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {t.salary} offer
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  “{t.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-emerald-500 py-16 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Land Your Next Role?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/90">
            Join hundreds of developers who accelerated their job hunt with our
            done-for-you system and live interview support.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/get-started"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold text-gray-900 shadow-md transition hover:bg-gray-100"
            >
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center rounded-xl border border-white/80 px-6 py-3 font-medium text-white/95 backdrop-blur transition hover:bg-white/10"
            >
              See the Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
