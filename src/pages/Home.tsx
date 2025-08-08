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
      "data:image/jpeg;base64,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", // confident professional (woman)
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
