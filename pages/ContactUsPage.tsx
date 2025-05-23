import React, { useState, useEffect } from 'react';
import { CONTACT_DETAILS } from '../constants';
import Button from '../components/ui/Button';
import PageHeader from '../components/layout/PageHeader';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const courseTitle = params.get('course');
    const batchName = params.get('batch');
    let subjectText = '';
    if (batchName && courseTitle) {
      subjectText = `Inquiry about ${batchName} (${courseTitle})`;
    } else if (courseTitle) {
      subjectText = `Inquiry about ${courseTitle} course`;
    }
    if (subjectText) {
      setFormData(prev => ({ ...prev, subject: subjectText }));
    }
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    
    const prefilledSubject = formData.subject.startsWith("Inquiry about") ? formData.subject : '';
    setFormData({ name: '', email: '', message: '', subject: prefilledSubject });
    
    if (!location.search.includes('course=') && !location.search.includes('batch=')) {
        setFormData(prev => ({ ...prev, subject: '' }));
    }

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <PageHeader 
        title="Get In Touch"
        subtitle="We'd love to hear from you! Reach out with any questions or to start your learning journey."
      />
      <section className="py-16 bg-kyp-section-background text-kyp-text-on-light"> {/* Light background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-kyp-card-background p-8 rounded-xl shadow-xl animate-slide-in-left">
              <h2 className="text-2xl font-poppins font-semibold text-kyp-magenta mb-6">Send Us a Message</h2>
              {isSubmitted && (
                <div className="mb-4 p-3 bg-kyp-green-accent/20 text-kyp-green-accent border border-kyp-green-accent/30 rounded-md">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-kyp-text-on-light/90">Full Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kyp-yellow focus:border-kyp-yellow sm:text-sm text-kyp-text-on-light" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-kyp-text-on-light/90">Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kyp-yellow focus:border-kyp-yellow sm:text-sm text-kyp-text-on-light" />
                </div>
                 <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-kyp-text-on-light/90">Subject</label>
                  <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kyp-yellow focus:border-kyp-yellow sm:text-sm text-kyp-text-on-light" placeholder="e.g., Course Inquiry" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-kyp-text-on-light/90">Message</label>
                  <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kyp-yellow focus:border-kyp-yellow sm:text-sm text-kyp-text-on-light"></textarea>
                </div>
                <div>
                  <Button type="submit" variant="primary" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Details & Map */}
            <div className="space-y-8 animate-slide-in-right">
              <div className="bg-kyp-card-background p-8 rounded-xl shadow-xl">
                <h2 className="text-2xl font-poppins font-semibold text-kyp-magenta mb-6">Contact Information</h2>
                <div className="space-y-4 text-kyp-text-on-light/90">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="flex-shrink-0 h-6 w-6 text-kyp-pink-accent mr-3 mt-1" />
                    <span>{CONTACT_DETAILS.address}</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="flex-shrink-0 h-5 w-5 text-kyp-pink-accent mr-3" />
                    <a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-kyp-magenta">{CONTACT_DETAILS.phone}</a>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="flex-shrink-0 h-5 w-5 text-kyp-pink-accent mr-3" />
                    <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-kyp-magenta">{CONTACT_DETAILS.email}</a>
                  </div>
                </div>
              </div>
              <div className="relative bg-kyp-card-background rounded-xl shadow-xl overflow-hidden aspect-video">
                 <iframe
                    src={CONTACT_DETAILS.mapEmbedUrl}
                    style={{ border:0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="KYP Center Location"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
