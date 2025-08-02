import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Zap, Award, ArrowRight, Building, Code, Search } from 'lucide-react';

const About: React.FC = () => {
  const teamStats = [
    {
      icon: Users,
      number: '10',
      label: 'Team Members',
      description: '5 recruiters + 5 job application specialists'
    },
    {
      icon: Target,
      number: '500+',
      label: 'Developers Placed',
      description: 'Successfully placed in high-paying roles'
    },
    {
      icon: Zap,
      number: '18',
      label: 'Average Days',
      description: 'From signup to job offer'
    },
    {
      icon: Award,
      number: '$145K',
      label: 'Average Salary',
      description: 'Mean placement salary across all roles'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Performance-Driven',
      description: 'We only succeed when you succeed. Our compensation is directly tied to your career outcomes, ensuring complete alignment of interests.'
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'While others take months, we deliver results in weeks. Our streamlined process eliminates bottlenecks and accelerates your job search.'
    },
    {
      icon: Users,
      title: 'Personal Partnership',
      description: 'You\'re not just a candidate to us. We build genuine relationships and invest in your long-term career success beyond just one placement.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Martinez',
      role: 'Lead Recruiter',
      specialty: 'Frontend & Full-Stack',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      experience: '8 years in tech recruitment'
    },
    {
      name: 'Marcus Chen',
      role: 'Senior Recruiter',
      specialty: 'Backend & DevOps',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      experience: '6 years at top tech companies'
    },
    {
      name: 'Jennifer Park',
      role: 'Application Manager',
      specialty: 'Job Matching & Outreach',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      experience: '5 years in talent acquisition'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              We're Not a Traditional Agency
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're your dedicated job acquisition team, committed to transforming how developers find high-paying opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="card p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-6">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Born from frustration with traditional recruitment
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  The Problem We Saw
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Traditional recruitment agencies charge developers thousands upfront with no guarantee of results. 
                    They submit generic applications, provide minimal support, and often leave talented developers 
                    stuck in lengthy, frustrating job searches.
                  </p>
                  <p>
                    Meanwhile, developers spend countless hours writing cover letters, filling out applications, 
                    and navigating job boards—time that could be better spent preparing for interviews and 
                    improving their skills.
                  </p>
                </div>
              </div>
              <div className="card p-8 bg-blue-50 dark:bg-blue-900/20">
                <div className="text-center">
                  <Building className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Westernpress Division
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    While Westernpress operates in multiple sectors, our Tech Talent division is 
                    exclusively focused on developer recruitment with a revolutionary approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00c896] text-white rounded-full mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Dedicated professionals with deep tech industry experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="card p-8 text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-[#00c896] font-medium mb-2">
                  {member.role}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {member.specialty}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-xs">
                  {member.experience}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-blue-50 dark:bg-blue-900/20 px-6 py-4 rounded-lg">
              <Code className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="text-gray-900 dark:text-white font-medium">
                Plus 5 dedicated job application specialists working behind the scenes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How We're Different
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A fundamentally new approach to developer recruitment
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="card p-6 bg-[#00c896] text-white text-center">
                    <Search className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Daily Applications</h3>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    We Apply, You Interview
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    While traditional agencies might submit a few applications per week, our team applies to 
                    20-50 carefully selected positions for you every single day. We handle the tedious work 
                    so you can focus on what matters: landing the job.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/3">
                  <div className="card p-6 bg-blue-600 text-white text-center">
                    <Target className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold">No Upfront Fees</h3>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Risk-Free Partnership
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Unlike agencies that charge thousands upfront, we only get paid when you successfully 
                    land a job. This means we're genuinely invested in your success—we literally can't 
                    succeed unless you do first.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="card p-6 bg-purple-600 text-white text-center">
                    <Users className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Dedicated Team</h3>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Your Personal Job Acquisition Squad
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    You get a dedicated recruiter plus access to our application specialists. We're not 
                    juggling hundreds of candidates—we limit our client base to ensure personalized, 
                    high-quality service for every developer we work with.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the developers who've transformed their careers with our dedicated approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/get-started" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
            <a 
              href="https://wa.me/15127049060"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600"
            >
              Chat with Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;