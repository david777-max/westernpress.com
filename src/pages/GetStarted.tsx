import React, { useState } from 'react';
import { Upload, Calendar, MessageCircle, CheckCircle, ArrowRight, Code, Mail, User, FileText, MapPin, Globe } from 'lucide-react';
import emailjs from 'emailjs-com';

const GetStarted: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    github: '',
    experience: '',
    skills: '',
    salary: '',
    location: '',
    resume: null as File | null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS (you'll need to set up your EmailJS account)
      emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

      const templateParams = {
        to_email: 'david@westernpress.com.au',
        from_name: formData.name,
        from_email: formData.email,
        dob: formData.dob,
        street_address: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        zip_code: formData.zipCode,
        country: formData.country,
        github: formData.github,
        experience: formData.experience,
        skills: formData.skills,
        salary: formData.salary,
        location: formData.location,
        resume_name: formData.resume?.name || 'No resume uploaded',
        message: `New application from ${formData.name}
        
Contact Details:
- Email: ${formData.email}
- Date of Birth: ${formData.dob}
- Address: ${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}, ${formData.country}

Professional Details:
- GitHub/Portfolio: ${formData.github}
- Experience Level: ${formData.experience}
- Target Salary: ${formData.salary}
- Location Preference: ${formData.location}
- Skills: ${formData.skills}
- Resume: ${formData.resume?.name || 'Not provided'}`
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting your application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextSteps = [
    {
      icon: CheckCircle,
      title: 'Application Review',
      description: 'Our team reviews your profile within 24 hours',
      timeframe: '24 hours'
    },
    {
      icon: MessageCircle,
      title: 'Initial Consultation',
      description: 'Quick 15-minute call to discuss your goals and preferences',
      timeframe: '2-3 days'
    },
    {
      icon: Code,
      title: 'Profile Setup',
      description: 'We create your optimized job search profile and strategy',
      timeframe: '3-5 days'
    },
    {
      icon: ArrowRight,
      title: 'Applications Begin',
      description: 'Daily job applications start immediately after setup',
      timeframe: '5-7 days'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#00c896] text-white rounded-full mb-8">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Application Submitted Successfully!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Thank you for choosing Westernpress Tech Talent. We'll review your application and get back to you within 24 hours.
              </p>
              
              <div className="card p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  What Happens Next?
                </h2>
                <div className="space-y-6">
                  {nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
                          <step.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {step.description}
                        </p>
                        <span className="text-[#00c896] text-xs font-medium">
                          {step.timeframe}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/15127049060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </a>
                <a 
                  href="mailto:david@westernpress.com.au"
                  className="btn-secondary text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Get You Started
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Fill out the form below to begin your accelerated job search. No upfront fees, no commitments until you're hired.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
          
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Prefer to Talk First?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We understand that choosing a recruitment partner is a big decision. Feel free to reach out with any questions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://wa.me/15127049060"
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  WhatsApp Chat
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Quick start? Chat with us instantly on WhatsApp
                </p>
                <div className="mt-4 text-[#00c896] font-medium">
                  +1 (512) 704-9060
                </div>
              </a>

              <a 
                href="mailto:david@westernpress.com.au"
                className="card p-6 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <Mail className="h-12 w-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Send us a detailed message about your situation
                </p>
                <div className="mt-4 text-[#00c896] font-medium">
                  david@westernpress.com.au
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Response Time:</strong> We typically respond within 2-4 hours during business hours (9 AM - 6 PM EST)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;