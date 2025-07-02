import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VTextInput } from "../components/VTextInput";

const Register = () => {
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 sm:p-10">
        <h2 className="text-2xl sm:text-xl font-bold text-center text-gray-800 mb-6">
          Create your account
        </h2>
        <form
          onSubmit={handleRegister}
          className="space-y-5"
          autoComplete="off'"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <VTextInput
              name="email"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <VTextInput
              name="username"
              placeholder="Username"
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <VTextInput
              name="password"
              placeholder="********"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>

            <VTextInput
              name="passwordConfirmation"
              placeholder="********"
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Save account
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have account?{" "}
          <Link to="/login" className="text-cyan-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
