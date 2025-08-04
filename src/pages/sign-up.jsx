import { useNavigate, Link } from "react-router-dom";
import logo from "/src/assets/logo.png";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function SignUp() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sign-in"); // navega para a página sign-in
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <section>
        <a href="/sign-in" target="_blank">
          <img
            src={logo}
            className="flex justify-center mx-auto w-50"
            alt="logo"
          />
        </a>

        <form className="mt-8 mb-2 flex flex-col items-center justify-center">
          <div className="mb-1 flex flex-col gap-4 w-80">
            {/* Name */}
            <label htmlFor="name" className="font-medium text-blue-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2"
              name="name"
            />

            {/* CPF */}
            <label htmlFor="cpf" className="font-medium text-blue-gray-700">
              CPF
            </label>
            <input
              id="cpf"
              type="text"
              placeholder="CPF"
              className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2"
              name="cpf"
            />

            {/* Date of birth */}
            <label htmlFor="birth" className="font-medium text-blue-gray-700">
              Date of birth
            </label>
            <input
              id="birth"
              type="date"
              placeholder="Date of birth"
              className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2"
              name="birth"
            />

            {/* Email */}
            <label htmlFor="email" className="font-medium text-blue-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2"
              name="email"
            />

            {/* Password */}
            <label
              htmlFor="password"
              className="font-medium text-blue-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2"
              name="password"
            />

            {/* Confirm password */}
            <label
              htmlFor="confirmPassword"
              className="font-medium text-blue-gray-700"
            >
              Confirm password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2"
              name="confirmPassword"
            />

            {/* Switch */}
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="creator"
                className="toggle toggle-success"
              />
              <label
                htmlFor="creator"
                className="font-medium text-blue-gray-700"
              >
                I am Creator Commercial
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full mt-6">
            <button
              type="button"
              onClick={handleClick}
              className="w-full border border-blue-gray-200 bg-white text-blue-gray-700 font-semibold py-3 rounded-md shadow-md transition-colors duration-200 hover:bg-blue-600 hover:text-white"
            >
              Login
            </button>
            <button
              type="submit"
              onClick={() => navigate("/")}
              className="w-full border border-blue-gray-200 bg-white text-blue-gray-700 font-semibold py-3 rounded-md shadow-md transition-colors duration-200 hover:bg-blue-600 hover:text-white"
            >
              Back
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default SignUp;
