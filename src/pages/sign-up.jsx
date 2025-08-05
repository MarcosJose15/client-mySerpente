import { useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.png";
import React from "react";
import { useAuth } from "../components/auth/useAuth";

export function SignUp() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = React.useState({
    name: "",
    cpf: "",
    email: "",
    phone: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
    street: "",
    number: "",
    additionalInfo: "",
    district: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem");
      setLoading(false);
      return;
    }

    try {
      // Preparar dados para envio (removendo confirmPassword)
      const { confirmPassword: _, ...submitData } = formData;

      const result = await register(submitData);

      if (result.success) {
        navigate("/"); // Redireciona para a página inicial após cadastro
      } else {
        setError(result.error || "Erro no cadastro");
      }
    } catch (err) {
      setError("Erro inesperado. Tente novamente.");
      console.error("Erro no cadastro:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <section className="w-full max-w-2xl">
        <a href="/" target="_self">
          <img
            src={logo}
            className="flex justify-center mx-auto w-50 mb-4"
            alt="logo"
          />
        </a>

        <h2 className="font-bold mb-4 text-2xl text-center">
          Cadastro de Tutor
        </h2>

        <form
          className="mt-8 mb-2 flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-4 w-full max-w-2xl px-4">
            {/* Dados Pessoais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="font-medium text-blue-gray-700"
                >
                  Nome Completo *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Nome completo"
                  className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2 w-full"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="cpf" className="font-medium text-blue-gray-700">
                  CPF *
                </label>
                <input
                  id="cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2 w-full"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="font-medium text-blue-gray-700"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2 w-full"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="font-medium text-blue-gray-700"
                >
                  Telefone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2 w-full"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="birthDate"
                className="font-medium text-blue-gray-700"
              >
                Data de Nascimento *
              </label>
              <input
                id="birthDate"
                type="date"
                className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2 w-full"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="password"
                  className="font-medium text-blue-gray-700"
                >
                  Senha *
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2 w-full"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="font-medium text-blue-gray-700"
                >
                  Confirmar Senha *
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirme sua senha"
                  className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2 w-full"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Endereço */}
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
              Endereço
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label
                  htmlFor="street"
                  className="font-medium text-blue-gray-700"
                >
                  Rua *
                </label>
                <input
                  id="street"
                  type="text"
                  placeholder="Nome da rua"
                  className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2 w-full"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="number"
                  className="font-medium text-blue-gray-700"
                >
                  Número *
                </label>
                <input
                  id="number"
                  type="text"
                  placeholder="Nº"
                  className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2 w-full"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="additionalInfo"
                className="font-medium text-blue-gray-700"
              >
                Complemento
              </label>
              <input
                id="additionalInfo"
                type="text"
                placeholder="Apartamento, casa, etc."
                className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2 w-full"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="district"
                  className="font-medium text-blue-gray-700"
                >
                  Bairro *
                </label>
                <input
                  id="district"
                  type="text"
                  placeholder="Nome do bairro"
                  className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2 w-full"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="zipCode"
                  className="font-medium text-blue-gray-700"
                >
                  CEP *
                </label>
                <input
                  id="zipCode"
                  type="text"
                  placeholder="00000-000"
                  className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2 w-full"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="font-medium text-blue-gray-700"
                >
                  Cidade *
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Nome da cidade"
                  className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2 w-full"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="font-medium text-blue-gray-700"
                >
                  Estado *
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="SP"
                  className="border border-blue-gray-200 focus:border-gray-900 rounded px-3 py-2 w-full"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-center mb-4 bg-red-50 border border-red-200 px-4 py-2 rounded w-full max-w-2xl">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-2 w-full max-w-md mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md shadow-md transition-colors duration-200"
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/sign-in")}
              className="w-full border border-blue-gray-200 bg-white text-blue-gray-700 font-semibold py-3 rounded-md shadow-md transition-colors duration-200 hover:bg-gray-50"
            >
              Já tenho conta - Entrar
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-full border border-blue-gray-200 bg-white text-blue-gray-700 font-semibold py-3 rounded-md shadow-md transition-colors duration-200 hover:bg-gray-50"
            >
              Voltar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default SignUp;
