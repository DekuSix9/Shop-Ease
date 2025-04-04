import { useState } from "react";

const Subscriber = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="bg-orange-600 text-white h-[400px] w-[90%] mx-auto my-12 rounded-lg flex flex-col items-center justify-center">
      <h2 className="text-[42px] font-semibold mb-6 text-[#FFFFFF]">Subscribe to our newsletter</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 justify-center">
        <input
          type="text"
          name="name"
          placeholder="First name"
          value={formData.name}
          onChange={handleChange}
          className="h-[70px] w-[350px] px-4 rounded-md text-white placeholder-white  border border-white outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="h-[70px] w-[350px] px-4 rounded-md text-white placeholder-white  border border-white outline-none"
          required
        />
        <button
          type="submit"
          className="h-[70px] w-[350px] bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
};

export default Subscriber;
