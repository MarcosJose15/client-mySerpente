import React from "react";
import { useForm } from "react-hook-form";

function EmailInput({ register, error }) {
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: "O email é obrigatório" })}
      />
      {error && <span style={{ color: "red" }}>{error.message}</span>}
    </div>
  );
}

function PasswordInput({ register, error }) {
  return (
    <div style={{ marginTop: 10 }}>
      <input
        type="password"
        placeholder="Senha"
        {...register("password", { required: "A senha é obrigatória" })}
      />
      {error && <span style={{ color: "red" }}>{error.message}</span>}
    </div>
  );
}

function SubmitButton() {
  return (
    <button type="submit" style={{ marginTop: 20 }}>
      Entrar
    </button>
  );
}

export default function Login({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    onSubmit && onSubmit(data);
  };

  return (
    <div style={{ maxWidth: 320, margin: "auto", padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <EmailInput register={register} error={errors.email} />
        <PasswordInput register={register} error={errors.password} />
        <SubmitButton />
      </form>
    </div>
  );
}
