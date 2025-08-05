import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./components/auth/useAuth";

function App() {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  if (isAuthenticated && user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white">
        <div>
          <img src={logo} className="w-32 mx-auto" alt="logo" />
        </div>
        <h1 className="text-3xl font-bold mb-4">MySerpente</h1>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-800">
            Bem-vindo, <strong>{user.name || user.email}</strong>!
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={() => navigate("/home-map")}
            className="w-40 mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200"
          >
            Mapa Inicial
          </button>
          <button
            type="button"
            onClick={() => navigate("/species-list")}
            className="w-40 mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200"
          >
            Lista de Espécies
          </button>
          <button
            type="button"
            onClick={handleSignOut}
            className="w-40 mx-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200"
          >
            Sair
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div>
        <img src={logo} className="w-32 mx-auto" alt="logo" />
      </div>
      <h1 className="text-3xl font-bold mb-6">MySerpente</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Sistema de gerenciamento de serpentes. Faça login ou cadastre-se para
        começar.
      </p>

      <div className="flex flex-col gap-4">
        <button
          type="button"
          onClick={() => navigate("/sign-in")}
          className="w-40 mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200"
        >
          Entrar
        </button>
        <button
          type="button"
          onClick={() => navigate("/sign-up")}
          className="w-40 mx-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200"
        >
          Cadastrar
        </button>
        <button
          type="button"
          onClick={() => navigate("/home-map")}
          className="w-40 mx-auto bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200"
        >
          Visualizar Mapa
        </button>
        <button
          type="button"
          onClick={() => navigate("/species-list")}
          className="w-40 mx-auto bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200"
        >
          Ver Espécies
        </button>
      </div>
    </div>
  );
}

export default App;
