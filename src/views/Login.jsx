import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VTextInput } from "../components/VTextInput";
import { login } from "../api/auth";
import { useAuth } from "../contexts/AuthProvider";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setToken } = useAuth();

  const clearFormData = () => {
    setFormData({
      username: "",
      password: "",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await login(formData);
      setToken(response.data.tokenJwt);
      setError("");
      clearFormData();
    } catch (err) {
      const message =
        err?.response?.data?.message || "Failed accessing account.";
      setError(message);
      //clearFormData();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 sm:p-10">
        <h2 className="text-2xl sm:text-xl font-bold text-center text-gray-800 mb-6">
          Access your account
        </h2>

        <form onSubmit={handleLogin} className="space-y-5" autoComplete="off">
          {error && <p className="text-red-500 text-sm">{error}</p>}
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

          <button
            type="submit"
            className={`cursor-pointer w-full  hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ${
              loading ? "bg-gray-800" : "bg-gray-600"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have account?{" "}
          <Link to="/register" className="text-cyan-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
