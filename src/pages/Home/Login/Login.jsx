import { useState } from "react";
import axios from "axios";

const Login = () => {
  // State for form data (email, password)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State for handling error messages
  const [error, setError] = useState("");

  // Handle input changes and update state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to login API with form data
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/login",
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      // Store token for further authentication
      const { token } = response.data;
      localStorage.setItem("authToken", token); // Store token in localStorage or in a state management system like Redux
      console.log("Login successful! Token:", token);
      // Optionally handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Input Field */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 mb-3 border border-gray-300 rounded-md"
        />
        {/* Password Input Field */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        {/* Display error if login fails */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
