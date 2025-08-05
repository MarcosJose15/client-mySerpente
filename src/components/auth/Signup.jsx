import React, { useState } from "react";

export default function Signup({ onSubmit }) {
  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpar erro quando usuário começar a digitar
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validações básicas
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.cpf.trim()) newErrors.cpf = "CPF é obrigatório";
    if (!formData.email.trim()) newErrors.email = "Email é obrigatório";
    if (!formData.phone.trim()) newErrors.phone = "Telefone é obrigatório";
    if (!formData.birthDate)
      newErrors.birthDate = "Data de nascimento é obrigatória";
    if (!formData.password) newErrors.password = "Senha é obrigatória";
    if (formData.password.length < 6)
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Senhas não coincidem";
    }

    // Validações de endereço
    if (!formData.street.trim()) newErrors.street = "Rua é obrigatória";
    if (!formData.number.trim()) newErrors.number = "Número é obrigatório";
    if (!formData.district.trim()) newErrors.district = "Bairro é obrigatório";
    if (!formData.city.trim()) newErrors.city = "Cidade é obrigatória";
    if (!formData.state.trim()) newErrors.state = "Estado é obrigatório";
    if (!formData.zipCode.trim()) newErrors.zipCode = "CEP é obrigatório";

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      // Preparar dados para envio (removendo confirmPassword)
      const { confirmPassword: _, ...submitData } = formData;

      if (onSubmit) {
        await onSubmit(submitData);
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const errorStyle = "text-red-500 text-sm mt-1";

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Cadastro de Tutor</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Dados Pessoais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputStyle}
              placeholder="Digite seu nome completo"
            />
            {errors.name && <p className={errorStyle}>{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CPF *
            </label>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              className={inputStyle}
              placeholder="000.000.000-00"
            />
            {errors.cpf && <p className={errorStyle}>{errors.cpf}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputStyle}
              placeholder="seu@email.com"
            />
            {errors.email && <p className={errorStyle}>{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputStyle}
              placeholder="(11) 99999-9999"
            />
            {errors.phone && <p className={errorStyle}>{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Data de Nascimento *
          </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className={inputStyle}
          />
          {errors.birthDate && <p className={errorStyle}>{errors.birthDate}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha *
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={inputStyle}
              placeholder="Mínimo 6 caracteres"
            />
            {errors.password && <p className={errorStyle}>{errors.password}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar Senha *
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={inputStyle}
              placeholder="Confirme sua senha"
            />
            {errors.confirmPassword && (
              <p className={errorStyle}>{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        {/* Endereço */}
        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
          Endereço
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rua *
            </label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className={inputStyle}
              placeholder="Nome da rua"
            />
            {errors.street && <p className={errorStyle}>{errors.street}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Número *
            </label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className={inputStyle}
              placeholder="Nº"
            />
            {errors.number && <p className={errorStyle}>{errors.number}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Complemento
          </label>
          <input
            type="text"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className={inputStyle}
            placeholder="Apartamento, casa, etc."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bairro *
            </label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className={inputStyle}
              placeholder="Nome do bairro"
            />
            {errors.district && <p className={errorStyle}>{errors.district}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CEP *
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className={inputStyle}
              placeholder="00000-000"
            />
            {errors.zipCode && <p className={errorStyle}>{errors.zipCode}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cidade *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={inputStyle}
              placeholder="Nome da cidade"
            />
            {errors.city && <p className={errorStyle}>{errors.city}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estado *
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={inputStyle}
              placeholder="SP"
            />
            {errors.state && <p className={errorStyle}>{errors.state}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}
