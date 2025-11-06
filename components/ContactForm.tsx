import React, { useState } from 'react';
import Button from './Button';
import SpinnerIcon from './icons/SpinnerIcon';
import { submitContactForm, ContactFormData } from '../services/contactService';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMessage('');
    try {
      const response = await submitContactForm(formData);
      setResponseMessage(response.message);
      if (response.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      setResponseMessage('An unexpected error occurred. Please try again.');
    }
  };
  
  const inputClasses = "w-full px-4 py-3 bg-brand-background border border-brand-accent rounded-md font-sans focus:ring-2 focus:ring-brand-primary focus:outline-none transition-colors duration-300";

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-primary font-sans mb-1">Full Name</label>
          <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-primary font-sans mb-1">Email Address</label>
          <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-primary font-sans mb-1">Message</label>
          <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className={inputClasses}></textarea>
        </div>
        <div>
          <Button type="submit" disabled={status === 'loading'} className="w-full flex justify-center items-center">
            {status === 'loading' ? <SpinnerIcon /> : 'Send Message'}
          </Button>
        </div>
      </form>
      {responseMessage && (
        <div className={`mt-4 text-center p-3 rounded-md font-sans ${status === 'success' ? 'text-green-800 bg-green-100' : 'text-red-800 bg-red-100'}`}>
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default ContactForm;