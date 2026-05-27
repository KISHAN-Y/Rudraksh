import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { Send, Loader2 } from 'lucide-react';
import Button from '../common/Button';

// Validation schema
const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Please enter a valid email address').or(z.literal('')),
  service: z.string().min(1, 'Please select a treatment'),
  date: z.string().optional(),
  message: z.string().optional()
});

// API Endpoint URL configuration:
// - Local Dev fallback: 'http://localhost:3000'
// - Production: Set VITE_API_URL in your hosting platform (GitHub Actions / Vercel env vars)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.meta?.error || 'Something went wrong');
      }

      toast.success('Message sent! Dr. Malkesh will contact you soon.');
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(error.message || 'Failed to send message. Please try calling us instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-surface-alt border border-border rounded-xl px-4 py-3 outline-none text-text-primary transition-all duration-300 focus:border-primary focus:ring-3 focus:ring-primary/20 hover:border-primary/50";
  const labelClass = "block text-sm font-medium text-text-secondary mb-1.5";

  const servicesList = [
    "Dental Implants", "Root Canal", "Braces", "Teeth Whitening",
    "Crowns & Bridges", "Cosmetic Dentistry", "General Checkup", "Other"
  ];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-border card-shadow w-full">
      <h3 className="text-2xl font-bold font-heading text-text-primary mb-6">Book an Appointment</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Full Name <span className="text-accent">*</span></label>
            <input 
              {...register('fullName')} 
              type="text" 
              placeholder="John Doe"
              className={inputClass}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1 animate-slide-up-fade">{errors.fullName.message}</p>}
          </div>
          
          <div>
            <label className={labelClass}>Phone Number <span className="text-accent">*</span></label>
            <input 
              {...register('phone')} 
              type="tel" 
              placeholder="9876543210"
              className={inputClass}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1 animate-slide-up-fade">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Email Address</label>
            <input 
              {...register('email')} 
              type="email" 
              placeholder="john@example.com"
              className={inputClass}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 animate-slide-up-fade">{errors.email.message}</p>}
          </div>
          
          <div>
            <label className={labelClass}>Treatment Interested In <span className="text-accent">*</span></label>
            <select 
              {...register('service')} 
              className={inputClass}
            >
              <option value="">Select a treatment...</option>
              {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.service && <p className="text-red-500 text-xs mt-1 animate-slide-up-fade">{errors.service.message}</p>}
          </div>
        </div>

        <div>
          <label className={labelClass}>Preferred Appointment Date</label>
          <input 
            {...register('date')} 
            type="date" 
            className={inputClass}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div>
          <label className={labelClass}>Additional Notes</label>
          <textarea 
            {...register('message')} 
            rows="3"
            placeholder="Describe your dental concern..."
            className={`${inputClass} resize-none`}
          ></textarea>
        </div>

        <Button 
          type="submit" 
          fullWidth 
          disabled={isSubmitting}
          className="mt-4 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <><Loader2 size={20} className="animate-spin" /> Sending...</>
          ) : (
            <>Submit Request <Send size={18} /></>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
