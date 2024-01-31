import React, { useState } from "react";

const Newsletter = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    try {
      const response = await fetch('http://localhost:3001/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log(data);

      emailInput.value = '';

      if (response.status === 200) {
        setSuccessMessage(alert('Email subscribed successfully'));
      } else {
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error('Error:', error);
  
      setSuccessMessage(null); 
    }
  };

  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-2xl text-xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up for our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              id="email"
              className="p-3 w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button
              onClick={handleSubmit}
              className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-black hover:bg-black hover:text-[#00df9a] active:bg-[#00df9a] active:text-black"
            >
              Notify me
            </button>
          </div>
          {successMessage && <p className="text-[#00df9a]">{successMessage}</p>}
          <p>
            We care about the protection of your data. Read our{' '}
            <span className="text-[#00df9a] underline cursor-pointer">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
