'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { Map } from '../map/map';



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    resturant: 'Checkpoint Charlie'
  });

  const [status, setStatus] = useState({ success: false, message: '' });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus({ success: false, message: '' });

    try {
      const response = await fetch('https://tapas.kcspages.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resturant: formData.resturant,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          subject: 'Inquiry regarding Checkpoint Charlie',
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', phone: '', email: '', message: '', resturant: 'Checkpoint Charlie' });
      } else {
        setStatus({ success: false, message: result.message || 'Something went wrong. Try again!' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Network error. Please try again later.' });
    }
  };

  return (
    <section className="py-40 bg-[#121f25]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {/* Contact Information */}
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <Image
                  width={500}
                  height={500}
                  src="/image/about-bg.jpg"
                  alt="Contact Us"
                  style={{ objectFit: 'cover',backgroundPosition:'center' }}
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply"
                />
                <h1 className="absolute top-11 left-11 text-white text-4xl font-bold">Contact us</h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-[rgba(0,0,0,0.6)] rounded-lg p-6">
                    <a href="tel:03025294284" className="flex items-center mb-2">
                      <span className="ml-5 text-white text-base font-normal flex "><FaPhone className='m-1'/> &nbsp;+49 30 25294284</span>
                    </a>
                    <a href="mailto:info@mundo.berlin" className="flex items-center mb-2">
                      <span className="ml-5 text-white text-base font-normal flex "><MdOutlineMailOutline className='m-1'/> &nbsp;info@mundo.berlin</span>
                    </a>
                    <span className="flex items-center">
                      <span className="ml-5 mb-5 text-white text-base font-normal flex ">
                        <IoLocationOutline className='m-1'/> &nbsp;Checkpoint Charlie, Zimmerstraße 19, 10969 Berlin, Germany
                      </span>
                    </span>
                    <Map/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-[#ffca0a] text-4xl font-semibold mb-11">Send Us A Message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-12 text-white placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-full border border-gray-200 focus:outline-none pl-4 mb-6"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 text-white placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-full border border-gray-200 focus:outline-none pl-4 mb-6"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 text-white placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-full border border-gray-200 focus:outline-none pl-4 mb-6"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-28 text-white placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-xl border border-gray-200 focus:outline-none pl-4 pt-2 mb-6"
                required
              />
             
              {status.message && (
                <p className={`text-lg ${status.success ? 'text-green-600' : 'text-red-600'} mb-4`}>
                  {status.message}
                </p>
              )}
              <button
                type="submit"
                className="w-full h-12 bg-[#ffca0a] text-white text-lg font-semibold rounded-full hover:bg-indigo-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
