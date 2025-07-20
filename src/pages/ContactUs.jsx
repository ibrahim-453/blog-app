import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users } from 'lucide-react';
import Footer from "../components/Footer"
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Validate Form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'support@myblog.com', href: 'mailto:support@myblog.com' },
    { icon: Phone, label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
    { icon: MapPin, label: 'Address', value: '123 Blog Street, NY, USA', href: 'https://maps.google.com' }
  ];

  const stats = [
    { icon: Clock, label: 'Response Time', value: '< 24 hrs' },
    { icon: Users, label: 'Happy Clients', value: '10,000+' },
    { icon: CheckCircle, label: 'Success Rate', value: '99.9%' }
  ];

  return (
    <>
    <div className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 min-h-screen text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Page Header */}
      <div className="relative text-center py-12 sm:py-16 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-white">
          Contact Us
        </h1>
        <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Got questions, suggestions, or feedback? We're here to help you every step of the way!
        </p>
      </div>

      {/* Stats Section */}
      <div className="relative max-w-6xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-center hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl hover:bg-white/15 transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 flex items-center gap-2">
            <Send className="w-6 h-6 text-yellow-300" />
            Send us a message
          </h2>

          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-white/80">Thank you for reaching out. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className={`w-full p-3 sm:p-4 rounded-xl text-black bg-white focus:ring-2 focus:ring-yellow-300 outline-none ${
                      errors.name ? 'ring-2 ring-red-400' : ''
                    }`}
                  />
                  {errors.name && <p className="text-red-300 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className={`w-full p-3 sm:p-4 rounded-xl text-black bg-white focus:ring-2 focus:ring-yellow-300 outline-none ${
                      errors.email ? 'ring-2 ring-red-400' : ''
                    }`}
                  />
                  {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className={`w-full p-3 sm:p-4 rounded-xl text-black bg-white focus:ring-2 focus:ring-yellow-300 outline-none ${
                    errors.subject ? 'ring-2 ring-red-400' : ''
                  }`}
                />
                {errors.subject && <p className="text-red-300 text-xs mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..."
                  rows="5"
                  className={`w-full p-3 sm:p-4 rounded-xl text-black bg-white focus:ring-2 focus:ring-yellow-300 outline-none resize-none ${
                    errors.message ? 'ring-2 ring-red-400' : ''
                  }`}
                />
                {errors.message && <p className="text-red-300 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-6">
          {/* Info */}
          <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-white/80 mb-6">
              We’re available via email, phone, or at our office. Choose what works best for you!
            </p>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="bg-yellow-400/20 p-3 rounded-lg">
                    <info.icon className="w-5 h-5 text-yellow-300" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">{info.label}</div>
                    <div className="text-white font-semibold">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-xl">
            <iframe
              title="Our Location"
              className="w-full h-64 sm:h-80 rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13619.802176277974!2d73.1231109!3d31.41548865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1753007400338!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
