import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RefreshCw, Brain, Target, Rocket, Clock, Users, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: RefreshCw,
      title: 'Daily Job Applications',
      description: 'We apply to dozens of relevant positions for you every single day'
    },
    {
      icon: Brain,
      title: 'Curated Job Matching',
      description: 'Smart matching based on your skills, experience, and salary expectations'
    },
    {
      icon: Target,
      title: 'Focus Only on Interviews',
      description: 'Skip the tedious application process and focus on what matters most'
    },
    {
      icon: Rocket,
      title: 'Hired or We Don\'t Get Paid',
      description: 'Completely performance-based - we only succeed when you do'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Sign Agreement',
      description: 'Quick 5-minute setup with our simple performance-based contract'
    },
    {
      step: '02',
      title: 'We Apply Daily',
      description: 'Our team applies to 20-50 relevant jobs for you every day'
    },
    {
      step: '03',
      title: 'Get Interviews',
      description: 'Receive forwarded interview opportunities directly to your inbox'
    },
    {
      step: '04',
      title: 'Land Your Job',
      description: 'Focus on interviews while we handle everything else'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior React Developer',
      company: 'TechCorp',
      salary: '$145K',
      quote: 'Landed my dream job in just 12 days. The team handled everything while I focused on preparing for interviews.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Full Stack Engineer',
      company: 'StartupXYZ',
      salary: '$160K',
      quote: 'Best decision I made for my career. No more endless job applications - just quality interview opportunities.',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Jennifer Park',
      role: 'DevOps Engineer',
      company: 'CloudTech',
      salary: '$155K',
      quote: 'They found opportunities I never would have discovered on my own. Incredible results in under 3 weeks.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-24">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Land Your Dream Developer Job in{' '}
              <span className="text-blue-600 dark:text-blue-400">15–20 Days</span>{' '}
              — Guaranteed
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Skip the job boards. Let us do the applying while you focus on interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/get-started" className="btn-primary text-lg px-8 py-4">
                Get Started — No Upfront Fees
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary text-lg px-8 py-4 text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400">
                Learn How It Works?
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                15-20 Day Guarantee
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                500+ Developers Placed
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                No Upfront Fees
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Service?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're not just another recruitment agency. We're your dedicated job acquisition team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 text-center hover:transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined process gets you from application to offer in record time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00c896] text-white rounded-full text-xl font-bold mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-gray-300 dark:text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-primary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real developers, real results, real career transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.role}</p>
                    <p className="text-[#00c896] font-semibold text-sm">{testimonial.salary} at {testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of developers who've accelerated their careers with our proven system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/get-started" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
            <a 
              href="https://wa.me/15127049060"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600"
            >
              Talk to Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;