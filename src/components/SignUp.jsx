import React, { useState } from "react";

const SignUp = ({ toggle }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up with:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-96 bg-white p-6 rounded-lg shadow"
    >
      <h1 className="text-xl font-bold text-gray-900 mb-4">
        Create an account
      </h1>
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-900"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          placeholder="Your Full Name"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          placeholder="youremailname@gmail.com"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          placeholder="••••••••"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-900"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          placeholder="••••••••"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Sign up
      </button>
      <p className="text-sm mt-3">
        Already have an account?{" "}
        <button
          type="button"
          onClick={toggle}
          className="text-blue-500 hover:underline"
        >
          Sign in
        </button>
      </p>
    </form>
  );
};

export default SignUp;
