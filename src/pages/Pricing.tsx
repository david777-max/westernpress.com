import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, HelpCircle, ArrowRight, DollarSign, Shield, Clock } from 'lucide-react';

const Pricing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is this legal?',
      answer: 'Absolutely. Our performance-based recruitment model is completely legal and regulated. We operate as a licensed recruitment agency under Westernpress, and our contracts are reviewed by employment law attorneys. This model is widely used in sales and recruitment industries.'
    },
    {
      question: 'What if I don\'t get hired?',
      answer: 'If you don\'t receive a job offer within 60 days, you owe us nothing. We only get paid when you successfully land a position. There are no upfront fees, application costs, or penalties if the process doesn\'t work out.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, That is possible, but currently, we focus on US-based positions and developers authorized to work in the United States. This includes US citizens, permanent residents, and those with valid work authorization (H1B, EAD, etc.).'
    },
    {
      question: 'How long does the 15% fee last?',
      answer: 'Our 15% fee is collected only until the candidate’s contract end date.'
    },
    {
      question: 'What if I want to change jobs after being placed?',
      answer: 'You\'re free to change jobs at any time. Our agreement covers the initial placement only. If you want our help finding your next role asap, we can discuss a new agreement.'
    },
    {
      question: 'Do you guarantee specific salary ranges?',
      answer: 'While we can\'t guarantee specific numbers, we focus on positions that align with your experience level and market rates. Our goal is to maximize your earning potential within realistic market expectations.'
    }
  ];

  const benefits = [
    'No upfront fees or costs',
    'Daily job applications (20-50 per day)',
    'Curated job matching',
    'Interview preparation support',
    'Salary negotiation assistance',
    'Contract review and guidance',
    'Dedicated recruiter team',
    '60-day placement guarantee'
  ];

  const traditionalAgencyDrawbacks = [
    'High upfront fees ($2,000-$5,000)',
    'Limited daily applications',
    'Generic job matching',
    'Basic interview prep',
    'Minimal negotiation support',
    'Standard contract terms',
    'Shared recruiter resources',
    'No guarantee policies'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Only Pay When You're Hired
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              100% performance-based pricing. No upfront fees, no hidden costs, no risk.
            </p>
            <div className="inline-flex items-center bg-[#00c896] text-white px-6 py-3 rounded-full font-semibold">
              <Shield className="h-5 w-5 mr-2" />
              60-Day Success Guarantee
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our 85/15 income split model aligns our success with yours
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Your Share */}
              <div className="card p-8 text-center border-2 border-[#00c896]">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00c896] text-white rounded-full mb-6">
                  <span className="text-2xl font-bold">85%</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  You Keep
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  85% of your salary goes directly to you, permanently
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-[#00c896] mr-2" />
                    Your money, your control
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-[#00c896] mr-2" />
                    Immediate access to funds
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-[#00c896] mr-2" />
                    No deductions or fees
                  </li>
                </ul>
              </div>

              {/* Our Share */}
              <div className="card p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-6">
                  <span className="text-2xl font-bold">15%</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  We Earn
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  15%
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4 text-blue-600 mr-2" />
                    Until the expiration of the candidate’s contract.
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <DollarSign className="h-4 w-4 text-blue-600 mr-2" />
                    Performance-based only
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Shield className="h-4 w-4 text-blue-600 mr-2" />
                    No upfront costs
                  </li>
                </ul>
              </div>

              {/* After 12 Months */}
              <div className="card p-8 text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-6">
                  <span className="text-xl font-bold">100%</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Then You Keep
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  100% of your salary forever after
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    No ongoing fees
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Complete salary ownership
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Freedom to job hop
                  </li>
                </ul>
              </div>
            </div>

            {/* Example Calculation */}
            <div className="card p-8 bg-blue-50 dark:bg-blue-900/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Example: $150K Annual Salary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00c896] mb-2">$10,600</div>
                  <div className="text-gray-600 dark:text-gray-300">Your Monthly Take-Home</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">85%</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$1,800</div>
                  <div className="text-gray-600 dark:text-gray-300">Our Monthly Fee</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">(15% for 12 months)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2"></div>
                  <div className="text-gray-600 dark:text-gray-300">Your Full Salary After Year 1</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">(100% forever)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How We Compare
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See why our model is different from traditional recruitment agencies
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Our Service */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Westernpress Tech Talent
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-[#00c896] mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Traditional Agencies */}
              <div className="card p-8 opacity-75">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Traditional Agencies
                </h3>
                <ul className="space-y-3">
                  {traditionalAgencyDrawbacks.map((drawback, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                      {drawback}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get answers to common questions about our pricing model
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    <HelpCircle className={`h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 transform transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Earning More?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            No upfront costs, no hidden fees. We only succeed when you land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/get-started" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;