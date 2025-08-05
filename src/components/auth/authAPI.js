const API_BASE_URL = "http://localhost:5133/api"; // URL da API .NET

export const authAPI = {
  async login(email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || "Erro no login");
      }

      return await response.json();
    } catch (error) {
      console.error("Erro no login:", error);
      throw error;
    }
  },

  async register(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || "Erro no cadastro");
      }

      return await response.json();
    } catch (error) {
      console.error("Erro no cadastro:", error);
      throw error;
    }
  },

  // Função para salvar token no localStorage
  saveToken(token) {
    localStorage.setItem("token", token);
  },

  // Função para obter token do localStorage
  getToken() {
    return localStorage.getItem("token");
  },

  // Função para remover token do localStorage
  removeToken() {
    localStorage.removeItem("token");
  },

  // Função para verificar se usuário está logado
  isLoggedIn() {
    const token = this.getToken();
    if (!token) return false;

    try {
      // Verifica se o token não expirou
      const payload = JSON.parse(atob(token.split(".")[1]));
      return Date.now() < payload.exp * 1000;
    } catch {
      return false;
    }
  },
};
