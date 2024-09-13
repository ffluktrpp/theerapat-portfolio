import React, { useState } from "react";

const ContactForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:theerapat.sric@gmail.com?subject=Contact%20Form&body=Hello%20Theerapat,%0A%0AYou%20have%20a%20new%20contact%20form%20submission.%0A%0AHere%20are%20the%20details:%0A%0AFull%20Name:%20${encodeURIComponent(
      formData.fullName
    )}%0AEmail:%20${encodeURIComponent(
      formData.email
    )}%0APhone:%20${encodeURIComponent(
      formData.phone
    )}%0ACompany:%20${encodeURIComponent(
      formData.company
    )}%0AMessage:%20${encodeURIComponent(formData.message)}%0A%0AThank%20you!`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="text-black text-lg font-bold float-right"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-black">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-black"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-black"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-primarySubContent rounded-md text-white hover:bg-primaryContent"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
