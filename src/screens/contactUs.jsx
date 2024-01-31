import React, { useState } from "react";

const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your logic to handle the form submission (e.g., send an email, save to a database)

    // For this example, let's just show a success message
    setSuccessMessage('Message sent successfully');
  };

  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-2xl text-xl">Contact Us</h1>
          <p>Have a question or suggestion? Reach out to us!</p>
        </div>
        <div className="my-4">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                id="name"
                className="p-3 w-full rounded-md text-black my-2"
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                id="email"
                className="p-3 w-full rounded-md text-black my-2"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <textarea
              id="message"
              className="p-3 w-full rounded-md text-black my-2"
              placeholder="Your Message"
              required
            />
            <button
              type="submit"
              className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-black hover:bg-black hover:text-[#00df9a] active:bg-[#00df9a] active:text-black"
            >
              Send Message
            </button>
            {successMessage && <p className="text-[#00df9a] my-2">{successMessage}</p>}
          </form>
          <p>
            We value your feedback! Read our{' '}
            <span className="text-[#00df9a] underline cursor-pointer">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
