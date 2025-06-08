'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    resturant: 'Checkpoint Charlie',
    subject: 'Inquiry regarding Checkpoint Charlie',
  });

  const [status, setStatus] = useState({ success: false, message: '' });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setStatus({ success: false, message: '' });

    try {
      const response = await fetch('https://tapas.kcspages.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, subject: 'Inquiry regarding Alt Mariendorf' }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', phone: '', email: '', message: '',subject: 'Inquiry regarding Checkpoint Charlie', resturant: 'Checkpoint Charlie' });
      } else {
        setStatus({ success: false, message: result.message || 'Something went wrong. Try again!' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Network error. Please try again later.' });
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-6 rounded-lg max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>Please fill the details</div>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        {status.message && (
          <p className={`text-lg ${status.success ? 'text-green-600' : 'text-red-600'} mb-4`}>
            {status.message}
          </p>
        )}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-yellow-500 text-white py-2 rounded-lg transition duration-300"
        >
          Send
        </motion.button>
      </form>
    </motion.div>
  );
}