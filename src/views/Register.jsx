import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VTextInput } from "../components/VTextInput";
import { register } from "../api/auth";

const Register = () => {
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const clearFormData = () => {
    setFormData({
      email: "",
      username: "",
      password: "",
    });
    setPasswordConfirmation("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== passwordConfirmation) {
      setError("Password not matches");
      setLoading(false);
      return;
    }

    try {
      await register(formData);
      setError("");
      clearFormData();
      navigate("/login");
    } catch (err) {
      const message =
        err?.response?.data?.message || "Failed creating account.";
      setError(message);
    } finally {
      setLoading(false);
    }
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
          autoComplete="off"
        >
          {error && <p className="text-red-500 text-sm">{error}</p>}
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
            className={`cursor-pointer w-full ${
              loading ? "bg-gray-800 " : "bg-gray-600"
            }  hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300`}
          >
            {loading ? "Creating your account..." : "Save account"}
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
