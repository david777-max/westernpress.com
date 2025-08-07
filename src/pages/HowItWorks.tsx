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
  Headphones,
  Code,
  MessageCircle,
  Users,
  Monitor,
  Zap,
  Award,
  Clock
} from 'lucide-react';

const HowItWorks: React.FC = () => {
  const detailedSteps = [
    {
      icon: FileText,
      title: 'Sign Simple Agreement',
      description: 'Complete our quick 5-minute onboarding process with a straightforward performance-based contract.',
      details: [
        'No upfront fees or hidden costs',
        'Clear 85/15 income split structure',
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
      title: 'Interview Scheduling',
      description: 'We handle all initial communications and forward qualified interview opportunities directly to you.',
      details: [
        'Pre-screened interview opportunities',
        'Company research and prep materials',
        'Interview scheduling coordination',
        'Comprehensive interview preparation'
      ]
    },
    {
      icon: Headphones,
      title: 'Live Interview Support',
      description: 'Real-time assistance during every single interview - technical, behavioral, and cultural fit.',
      details: [
        'Live technical question support',
        'Real-time coding test assistance',
        'Behavioral question coaching',
        'Instant expert guidance via earpiece'
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

  const interviewTypes = [
    {
      icon: Code,
      title: 'Technical Interviews',
      description: 'Live coding challenges, system design, and technical deep-dives',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Live coding support', 'Algorithm assistance', 'System design guidance', 'Code review help']
    },
    {
      icon: MessageCircle,
      title: 'Behavioral Interviews',
      description: 'Personal questions, situation-based scenarios, and soft skills assessment',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['STAR method coaching', 'Real-time answer structuring', 'Confidence building', 'Professional communication']
    },
    {
      icon: Users,
      title: 'Culture Fit Interviews',
      description: 'Team dynamics, company values alignment, and final decision rounds',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Company culture insights', 'Team compatibility', 'Values alignment', 'Executive presence coaching']
    },
    {
      icon: Monitor,
      title: 'Online Assessments',
      description: 'HackerRank, CodeSignal, and platform-specific coding tests',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Platform-specific strategies', 'Time management', 'Optimization techniques', 'Debug assistance']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              How Our <span className="text-[#00c896]">Live Interview Support</span> Works
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Real-time expert assistance during every interview - from technical challenges to final culture fits. 
              Never face an interview alone again.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00c896]">15-20</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Days to Job</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00c896]">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Live Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00c896]">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Interview Support Hero */}
      <section className="section-padding bg-gradient-to-r from-[#00c896] to-blue-600">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Live Interview Support That Changes Everything
              </h2>
              <p className="text-lg mb-8 opacity-95">
                Our expert team provides real-time assistance during your interviews through discrete earpiece technology. 
                Get instant answers to technical questions, perfect responses to behavioral queries, and confidence-boosting 
                support throughout every interview.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Zap className="h-6 w-6 mr-3" />
                  <span>Instant Technical Support</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 mr-3" />
                  <span>Expert Guidance</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-3" />
                  <span>Real-time Assistance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3" />
                  <span>100% Success Rate</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional interview support" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#00c896] rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Live Support Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Types */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Interview Coverage
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From initial recruiter calls to final executive interviews, we provide live support for every type of interview you'll encounter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interviewTypes.map((type, index) => (
              <div key={index} className="group card hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <div className="bg-[#00c896] p-2 rounded-lg mr-3">
                      <type.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{type.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-[#00c896] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Complete Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From signup to job offer - here's exactly how we make it happen
            </p>
          </div>
          
          <div className="space-y-16">
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
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-5 w-5 text-[#00c896] mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {index === 3 && (
                    <div className="mt-6 p-4 bg-[#00c896]/10 rounded-lg border border-[#00c896]/20">
                      <p className="text-sm text-[#00c896] font-semibold mb-2">★ Our Secret Weapon</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Discrete earpiece technology allows our experts to provide real-time answers during your interviews, 
                        ensuring you never stumble on technical questions or behavioral scenarios.
                      </p>
                    </div>
                  )}
                </div>
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="card p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-xl transition-shadow duration-300">
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
        </div>
      </section>

      {/* Success Statistics */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Results
            </h2>
            <p className="text-xl opacity-90">
              Our live interview support delivers exceptional outcomes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00c896] mb-2">98%</div>
              <div className="text-sm opacity-90">Interview Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00c896] mb-2">15</div>
              <div className="text-sm opacity-90">Average Days to Offer</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00c896] mb-2">$145K</div>
              <div className="text-sm opacity-90">Average Salary Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00c896] mb-2">500+</div>
              <div className="text-sm opacity-90">Developers Placed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
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
                    Example: $150K Annual Salary
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <span className="font-semibold text-gray-900 dark:text-white">Your Monthly Take-Home:</span>
                      <span className="text-xl font-bold text-[#00c896]">$10,600</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="font-semibold text-gray-900 dark:text-white">Our Monthly Fee:</span>
                      <span className="text-xl font-bold text-blue-600">$1,800</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-2 border-gray-200 dark:border-gray-600">
                      <span className="font-semibold text-gray-900 dark:text-white">Total Monthly Gross:</span>
                      <span className="text-xl font-bold text-gray-900 dark:text-white">$12,400</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="text-center">
                    <DollarSign className="h-16 w-16 text-[#00c896] mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      You keep 85% of your salary permanently. We earn 15%.
                    </p>
                    <div className="bg-[#00c896]/10 p-4 rounded-lg">
                      <p className="text-sm text-[#00c896] font-semibold">
                        Includes unlimited live interview support for life!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#00c896] to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Never Fail an Interview Again?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of developers who've landed their dream jobs with our live interview support. 
            No upfront fees, no risk - we only succeed when you do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-[#00c896] font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              View Pricing Details
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Available 24/7
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;