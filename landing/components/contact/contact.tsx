"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CustomDropdown = ({ value, onChange }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Alt Mariendorf", "Checkpoint Charlie", "Potsdamer Platz"];

  return (
    <div className="relative w-full">
      <div
        className="flex items-center justify-between bg-transparent text-white p-4 rounded-full shadow-sm cursor-pointer border border-gray-200 focus:outline-none focus:border-gold-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value || "Select a location"}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <ul className="absolute w-full bg-white shadow-md rounded-lg mt-2 overflow-hidden border border-gray-300 z-10">
          {options.map((option) => (
            <li
              key={option}
              className="py-3 px-4 text-gray-700 cursor-pointer transition-all hover:bg-gold-500 hover:text-gold-900"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ContactForms = () => {
  const [formData, setFormData] = useState({
    resturant: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ success: false, message: "" });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDropdownChange = (value:any) => {
    setFormData({ ...formData, resturant: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setStatus({ success: false, message: "" });
    try {
      const response = await fetch("https://tapas.kcspages.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, subject: `Inquiry regarding ${formData.resturant}` }),
      });
      const result = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormData({ resturant: "", name: "", phone: "", email: "", message: "" });
      } else {
        setStatus({ success: false, message: result.message || "Something went wrong. Try again!" });
      }
    } catch (error) {
      setStatus({ success: false, message: "Network error. Please try again later." });
    }
  };

  return (
    <section className="py-40 bg-[#121f25]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex m-auto">
          <div className="p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-[#ffca0a] text-4xl font-semibold mb-11">Send Us A Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6">
                <CustomDropdown value={formData.resturant} onChange={handleDropdownChange} />
              </div>
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
                <p className={`text-lg ${status.success ? "text-green-600" : "text-red-600"} mb-4`}>
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

export default ContactForms;
