import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Search,
  Send,
  Calendar,
  CheckCircle,
  DollarSign,
  ArrowRight,
  Headphones,
  Code,
  MessageCircle,
  Users,
  Monitor,
  Zap,
  Award,
  Clock,
  ShieldCheck,
  Sparkles
} from "lucide-react";

const HowItWorks: React.FC = () => {
  const heroImages = {
    bg: "https://images.unsplash.com/photo-1529336953121-a0ce123b4e7b?q=80&w=2400&auto=format&fit=crop", // modern office
    side:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop", // professional woman on laptop
  };

  const interviewTypes = [
    {
      icon: Code,
      title: "Technical Interviews",
      description:
        "Live prep for coding challenges, architecture deep-dives, and debugging walkthroughs.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
      features: [
        "Coding challenge dry-runs",
        "Algorithm strategy",
        "System design scaffolds",
        "Code review practice",
      ],
    },
    {
      icon: MessageCircle,
      title: "Behavioral Interviews",
      description:
        "Confident, succinct stories using STAR. Practice delivery, tone, and follow-ups.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
      features: [
        "STAR coaching",
        "Clear structure & timing",
        "Follow-up tactics",
        "Nerves → confidence",
      ],
    },
    {
      icon: Users,
      title: "Culture & Team Fit",
      description:
        "Learn how to show alignment with values, mission, and collaboration style.",
      image:
        "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1600&auto=format&fit=crop",
      features: [
        "Company research briefs",
        "Values mapping",
        "Executive presence tips",
        "Stakeholder alignment",
      ],
    },
    {
      icon: Monitor,
      title: "Online Assessments",
      description:
        "Platform-specific strategies for HackerRank/CodeSignal-style assessments.",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop",
      features: [
        "Timeboxing plans",
        "Edge-case checklists",
        "Refactor heuristics",
        "Debugging playbook",
      ],
    },
  ];

  const detailedSteps = [
    {
      icon: FileText,
      title: "Sign Simple Agreement",
      description:
        "Five-minute onboarding with a clear performance-based contract.",
      details: [
        "No upfront fees or hidden costs",
        "Transparent 80/20 split",
        "Cancel anytime with 30-day notice",
        "Mutual legal protection",
      ],
    },
    {
      icon: Search,
      title: "Daily Job Applications",
      description:
        "We apply to 20–50 curated roles daily that match your stack and salary band.",
      details: [
        "Specialists + AI-assisted matching",
        "Tailored cover letters",
        "Company targeting by your criteria",
        "Live app tracking dashboard",
      ],
    },
    {
      icon: Send,
      title: "Interview Routing",
      description:
        "We handle initial comms, screen opportunities, and route interviews to you.",
      details: [
        "Pre-screened invites only",
        "Company briefs & prep packs",
        "Calendar coordination",
        "Pre-interview warmup call",
      ],
    },
    {
      icon: Headphones,
      title: "Live Interview Support",
      description:
        "On-demand coaches for practice sessions & real-time Slack/voice standby.",
      details: [
        "Mock interviews that mirror your pipeline",
        "Live coding and system design practice",
        "Behavioral rehearsal with feedback",
        "On-call coach during interview window",
      ],
      note: {
        title: "Our Approach",
        body:
          "We focus on ethical, real-time coaching and preparation. No covert devices—just expert guidance that builds genuine skill and confidence.",
      },
    },
    {
      icon: CheckCircle,
      title: "Land Your Job",
      description:
        "Offer guidance, salary/comp strategy, and onboarding support.",
      details: [
        "Compensation playbook & counters",
        "Offer review + risks & perks",
        "Start-date & relocation guidance",
        "Ongoing career support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-16">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages.bg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/85 via-white/80 to-white dark:from-gray-950/70 dark:via-gray-950/85 dark:to-gray-950" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="container-custom">
          <div className="grid items-center gap-10 pt-20 pb-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-sm text-gray-700 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-300">
                <Sparkles className="h-4 w-4" />
                End-to-end job hunt, done right
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl dark:text-white">
                How Our{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  Live Interview Support
                </span>{" "}
                Works
              </h1>

              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                Real-time prep, on-call coaching, and role-specific practice for
                each interview stage. You’ll never walk in unprepared again.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/pricing"
                  className="group inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-white shadow-lg transition hover:translate-y-[-1px] hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  View Pricing
                  <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/get-started"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/70 px-6 py-3 text-gray-900 backdrop-blur transition hover:bg-white dark:border-gray-700 dark:bg-gray-900/50 dark:text-white dark:hover:bg-gray-900"
                >
                  Get Started
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Avg. 15 days to offer
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> Ethical coaching
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4" /> On-call support
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-2xl backdrop-blur dark:border-gray-800/60 dark:bg-gray-900/50">
                <img
                  src={heroImages.side}
                  alt="Engineer preparing for interview"
                  className="h-[420px] w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-gray-200 bg-white/90 p-4 text-sm shadow-md backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      “Ready when you are”
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      Mock done · Notes synced
                    </span>
                  </div>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    You get a role-specific prep pack for every interview.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-3 gap-6 rounded-2xl border border-gray-200 bg-white/70 p-6 text-center shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
            <div>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                15
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Avg. Days to Offer
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Live Human Coaching
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                24/7
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                On-Call Availability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE SUPPORT EXPLAINER */}
      <section className="section-padding bg-gradient-to-r from-emerald-500 to-blue-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Live Support That Actually Moves the Needle
              </h2>
              <p className="text-lg mb-8 opacity-95">
                We pair you with an engineer-coach for role-specific practice,
                then stay on standby during your interview window via Slack/voice
                for quick clarifications or follow-ups.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Zap className="mr-3 h-6 w-6" />
                  Instant clarifications
                </div>
                <div className="flex items-center">
                  <Award className="mr-3 h-6 w-6" />
                  Senior-level coaches
                </div>
                <div className="flex items-center">
                  <Clock className="mr-3 h-6 w-6" />
                  Real-time standby
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="mr-3 h-6 w-6" />
                  Ethical & transparent
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1600&auto=format&fit=crop"
                alt="Coaching session"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 rounded-lg bg-white p-4 text-gray-900 shadow-lg dark:bg-gray-800 dark:text-white">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-500" />
                  <span className="text-sm font-semibold">Coach on standby</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERVIEW TYPES */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Complete Interview Coverage
            </h2>
            <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
              From recruiter screens to final exec rounds, we’ve got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {interviewTypes.map((type, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="relative h-48">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <div className="mr-3 rounded-lg bg-emerald-500 p-2">
                      <type.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{type.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-emerald-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED PROCESS (ZIG-ZAG) */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Our Complete Process
            </h2>
            <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
              From signup to signed offer—step by step.
            </p>
          </div>

          <div className="space-y-16">
            {detailedSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-10 lg:flex-row"
              >
                {/* text */}
                <div className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="mb-6 flex items-center">
                    <div className="mr-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                        Step {index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((d, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-emerald-500" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {"note" in step && step.note && (
                    <div className="mt-6 rounded-lg border border-emerald-300/30 bg-emerald-50/50 p-4 dark:border-emerald-800/40 dark:bg-emerald-900/20">
                      <p className="mb-1 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                        {step.note.title}
                      </p>
                      <p className="text-sm text-emerald-900 dark:text-emerald-200">
                        {step.note.body}
                      </p>
                    </div>
                  )}
                </div>

                {/* visual */}
                <div className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-950">
                    <div className="mx-auto mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-md dark:bg-gray-900">
                      <step.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h4>
                    <div className="text-6xl font-bold text-blue-600/20 dark:text-blue-400/20">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Proven Results</h2>
            <p className="mt-2 text-xl opacity-90">
              Coaching that compounds across your entire pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-emerald-300">98%</div>
              <div className="text-sm opacity-90">Pass to next-round (after mock)</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-emerald-300">15</div>
              <div className="text-sm opacity-90">Average Days to Offer</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-emerald-300">$145K</div>
              <div className="text-sm opacity-90">Avg. Salary Outcomes*</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-emerald-300">500+</div>
              <div className="text-sm opacity-90">Developers Placed</div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs opacity-75">
            *Based on recent cohorts; actual outcomes vary by market, seniority, and location.
          </p>
        </div>
      </section>

      {/* EXAMPLE */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Real Example
            </h2>
            <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
              How the 80/20 financial arrangement works.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="card p-8 md:p-12">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                    Example: $150K Annual Salary
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/20">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Your Monthly Take-Home:
                      </span>
                      <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                        $10,000
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Our Monthly Fee:
                      </span>
                      <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        $2,500
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border-2 border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Total Monthly Gross:
                      </span>
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        $12,500
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-center">
                  <DollarSign className="mx-auto mb-4 h-16 w-16 text-emerald-500" />
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    You keep 80% of salary. We earn 20%.
                  </p>
                  <div className="rounded-lg bg-emerald-500/10 p-4">
                    <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                      Includes unlimited interview prep & on-call support.
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Figures shown are simplified; taxes/benefits vary by location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Walk Into Every Interview Prepared?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl">
            Join hundreds of developers who’ve leveled up their interview game
            with structured prep and on-call coaching.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/get-started"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold text-gray-900 shadow-md transition hover:bg-gray-100"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center rounded-xl border border-white/80 px-6 py-3 font-medium text-white/95 backdrop-blur transition hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-4 text-sm opacity-80">Available 24/7 worldwide</p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
