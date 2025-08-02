import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Search,
  Send,
  Calendar,
  CheckCircle,
  DollarSign,
  ArrowRight,
  MonitorCheck,
  Code,
  MessageCircleHeart
} from 'lucide-react';

const HowItWorks: React.FC = () => {
  const detailedSteps = [
    {
      icon: FileText,
      title: 'Sign Simple Agreement',
      description: 'Complete our quick 5-minute onboarding process with a straightforward performance-based contract.',
      details: [
        'No upfront fees or hidden costs',
        'Clear 70/30 income split structure',
        'Cancel anytime with 30-day notice',
        'Legal protection for both parties'
      ]
    },
    {
      icon: Search,
      title: 'Daily Job Applications',
      description: 'Our dedicated team applies to 20-50 carefully selected positions for you every single day.',
      details: [
        '5 dedicated job application specialists',
        'Custom cover letters for each application',
        'Target companies matching your criteria',
        'Track all applications in real-time'
      ]
    },
    {
      icon: Send,
      title: 'Interview Forwarding',
      description: 'We handle all initial communications and forward qualified interview opportunities directly to you.',
      details: [
        'Pre-screened interview opportunities',
        'Company research and prep materials',
        'Interview scheduling coordination',
        'Salary negotiation guidance'
      ]
    },
    {
      icon: MonitorCheck,
      title: 'Live Interview Support',
      description: 'We join your interviews live (if allowed), or provide real-time coaching, notes, and tech answers from recruiter screen to final interview.',
      details: [
        'Support from recruiter call to final culture interview',
        'Live help for HackerRank/coding tests',
        'Help with system design, algorithm, and frontend challenges',
        'Real-time personal question coaching (e.g. “Tell me about yourself”)'
      ]
    },
    {
      icon: Calendar,
      title: 'Focus on Interviews',
      description: 'Spend your time preparing for and attending interviews instead of writing applications.',
      details: [
        'Mock interviews available anytime',
        'Technical challenge rehearsal',
        'Behavioral/soft skill coaching',
        'Interview recap & debrief guidance'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Land Your Job',
      description: 'Accept your ideal offer while we handle contract negotiations and onboarding logistics.',
      details: [
        'Salary negotiation support',
        'Contract review assistance',
        'Onboarding coordination',
        'Ongoing career support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How Our Process Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A transparent, step-by-step breakdown of how we help you land high-paying developer jobs in 15–20 days—including real-time interview support.
          </p>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="section-padding">
        <div className="container-custom space-y-16">
          {detailedSteps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
              <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mr-4">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#00c896] uppercase tracking-wider">
                      Step {index + 1}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h2>
                  </div>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-[#00c896] mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="card p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 shadow-md rounded-xl">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-white dark:bg-gray-800 rounded-full shadow-lg mb-6">
                      <step.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 opacity-20">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Example Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Real Example
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Here's how the financial arrangement works in practice
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Example: $160K Annual Salary
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-semibold text-gray-900 dark:text-white">Your Monthly Take-Home:</span>
                    <span className="text-xl font-bold text-[#00c896]">$9,333</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="font-semibold text-gray-900 dark:text-white">Our Monthly Fee:</span>
                    <span className="text-xl font-bold text-blue-600">$4,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-2 border-gray-200 dark:border-gray-600">
                    <span className="font-semibold text-gray-900 dark:text-white">Total Monthly Gross:</span>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">$13,333</span>
                  </div>
                </div>
              </div>
              <div className="text-center space-y-6">
                <DollarSign className="h-16 w-16 text-[#00c896] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300">
                  You keep 70% of your salary permanently. We earn 30% performance-based.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            No upfront fees, no risk. We only succeed when you land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/get-started" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Job Search
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
            <Link to="/pricing" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
              View Pricing Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
