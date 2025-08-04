import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-in"); // navega para a página sign-in
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={logo} className="w-32 mx-auto" alt="logo" />
        </a>
      </div>
      <h1>MySerpente</h1>
      <button
        type="button"
        onClick={handleClick}
        className="w-40 mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200 mt-6"
      >
        Sign In
      </button>
      <button
        type="button"
        onClick={() => navigate("/sign-up")}
        className="w-40 mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200 mt-6"
      >
        Sign Up
      </button>
    </div>
  );
}

export default App;
