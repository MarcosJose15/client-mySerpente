import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";

import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  // URL da sua API .NET
  const API_URL = "https://sua-api-dotnet.com/api/auth/login";

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      // Exemplo: salvar token e navegar
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Usuário ou senha inválidos");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <section className="w-full flex flex-col items-center">
        <a href="/sign-up" target="_blank">
          <img src={logo} className="mx-auto w-50" alt="logo" />
        </a>
        <h2 className="font-bold mb-4 text-2xl text-center">Sign In</h2>
        <p className="text-lg font-normal text-blue-gray-700 text-center">
          Enter your email and password to Sign In.
        </p>
        <form
          className="mt-8 mb-2 flex flex-col items-center w-80"
          onSubmit={handleLogin}
        >
          <div className="mb-1 flex flex-col gap-6 w-full">
            <label
              htmlFor="email"
              className="-mb-3 font-medium text-blue-gray-700"
            >
              Your email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@mail.com"
              className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="password"
              className="-mb-3 font-medium text-blue-gray-700 mt-4"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="flex items-center gap-2 w-full mb-2">
            <Checkbox label={false} containerProps={{ className: "p-0 m-0" }} />
            <span className="flex items-center gap-2">
              I agree
              <a
                href="#"
                className="font-normal text-black transition-colors hover:text-gray-900 underline"
                style={{ display: "inline", verticalAlign: "middle" }}
              >
                Terms and Conditions
              </a>
            </span>
          </div>
          <br />
          {error && (
            <div className="text-red-600 text-center mb-2">{error}</div>
          )}
          <div className="flex flex-col gap-4 items-center mt-6 w-full">
            <button
              type="submit"
              disabled={loading}
              className="w-80 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200"
            >
              {loading ? "Entrando..." : "Login"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/sign-up")}
              className="w-80 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200"
            >
              Sign Up
            </button>
          </div>
        </form>
      </section>
      <br />
      <br />
      <footer className="w-80 mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-80 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200"
        >
          Back
        </button>
      </footer>

      <br />
    </div>
  );
}

export default SignIn;
