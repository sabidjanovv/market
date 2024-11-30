import React, { useState } from "react";

const SignIn = ({ toggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle SignIn logic
    console.log("Sign In with:", { email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-96 bg-white p-6 rounded-lg shadow"
    >
      <h1 className="text-xl font-bold text-gray-900 mb-4">
        Sign in to your account
      </h1>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="••••••••"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Sign in
      </button>
      <p className="text-sm mt-3">
        Don’t have an account yet?{" "}
        <button
          type="button"
          onClick={toggle}
          className="text-blue-500 hover:underline"
        >
          Sign up
        </button>
      </p>
    </form>
  );
};

export default SignIn;
