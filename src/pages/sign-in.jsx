import { useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.png";
import React from "react";
import { useAuth } from "../components/auth/useAuth";

export function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await login(email, password);

      if (result.success) {
        navigate("/"); // Redireciona para a página inicial após login
      } else {
        setError(result.error || "Erro no login");
      }
    } catch (err) {
      setError("Erro inesperado. Tente novamente.");
      console.error("Erro no login:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <section className="w-full flex flex-col items-center">
        <a href="/" target="_self">
          <img src={logo} className="mx-auto w-50" alt="logo" />
        </a>
        <h2 className="font-bold mb-4 text-2xl text-center">Entrar</h2>
        <p className="text-lg font-normal text-blue-gray-700 text-center">
          Digite seu email e senha para entrar.
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
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
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
              Senha
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
          {error && (
            <div className="text-red-600 text-center mb-2 bg-red-50 border border-red-200 px-4 py-2 rounded w-full">
              {error}
            </div>
          )}
          <div className="flex flex-col gap-4 items-center mt-6 w-full">
            <button
              type="submit"
              disabled={loading}
              className="w-80 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/sign-up")}
              className="w-80 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200"
            >
              Cadastrar-se
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
          className="w-80 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200"
        >
          Voltar
        </button>
      </footer>

      <br />
    </div>
  );
}

export default SignIn;
