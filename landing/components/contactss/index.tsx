'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const ACCOUNT_SID = process.env.NEXT_PUBLIC_ACCOUNT_SID!; // Replace with your Twilio Account SID
    const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN!; // Replace with your Twilio Auth Token
    const TWILIO_WHATSAPP_NUMBER =
      process.env.NEXT_PUBLIC_TWILIO_WHATSAPP_NUMBER!; // Your Twilio WhatsApp number
    const YOUR_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_YOUR_WHATSAPP_NUMBER!; // Replace with your actual WhatsApp number

    const message = `New Contact Form Submission:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;

    const auth =
      'Basic ' + Buffer.from(`${ACCOUNT_SID}:${AUTH_TOKEN}`).toString('base64');

    try {
      const response = await fetch(
        'https://api.twilio.com/2010-04-01/Accounts/' +
          ACCOUNT_SID +
          '/Messages.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: auth,
          },
          body: new URLSearchParams({
            From: TWILIO_WHATSAPP_NUMBER,
            To: YOUR_WHATSAPP_NUMBER,
            Body: message,
          }),
        }
      );

      if (response.ok) {
        alert('Message sent to WhatsApp successfully!');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message to WhatsApp.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='p-6  rounded-lg max-w-md mx-auto'
    >
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>Please fill the details</div>
        <input
          type='text'
          name='fullName'
          placeholder='Full Name'
          value={formData.fullName}
          onChange={handleChange}
          required
          className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
          className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          type='text'
          name='phone'
          placeholder='Phone Number'
          value={formData.phone}
          onChange={handleChange}
          required
          className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <textarea
          name='message'
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
          required
          className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
        />
        <motion.button
          type='submit'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='w-full bg-[gold] py-2 rounded-lg  transition duration-300'
        >
          Send
        </motion.button>
      </form>
    </motion.div>
  );
}
