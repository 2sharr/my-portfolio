import React from 'react';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="text-purple-600" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-purple-600" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-purple-600" />
                <span>tusharshinde186306@gmail.com</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4"></h4>
              <SocialLinks />
            </div>

            <div className="rounded-lg overflow-hidden h-64 shadow-md">
              <iframe
                title="Location"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995646221!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710401105065!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}