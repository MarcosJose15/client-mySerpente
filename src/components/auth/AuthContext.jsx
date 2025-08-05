import React, { useState, useEffect } from "react";
import { authAPI } from "./authAPI";
import { AuthContext } from "./AuthContextDefinition";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se há token salvo quando a aplicação carrega
    const token = authAPI.getToken();
    if (token && authAPI.isLoggedIn()) {
      // Se há token válido, você pode decodificar para obter dados do usuário
      // ou fazer uma chamada para verificar/obter dados do usuário
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUser({
          id: payload.nameid,
          email: payload.email,
        });
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
        authAPI.removeToken();
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await authAPI.login(email, password);

      // Salvar token
      authAPI.saveToken(response.token);

      // Definir usuário
      setUser(response.tutor);

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setLoading(true);
      const response = await authAPI.register(userData);

      // Salvar token
      authAPI.saveToken(response.token);

      // Definir usuário
      setUser(response.tutor);

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authAPI.removeToken();
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
