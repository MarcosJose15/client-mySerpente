import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-in"); // navega para a página sign-in
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={logo} className="w-30" alt="Vite logo" />
        </a>
      </div>
      <h1>LINK PARA SIGN</h1>
      
      <button
        type="button"
        onClick={handleClick}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-md shadow-md transition-colors duration-200"
      >
        Sign In
      </button>

      <div className="card">
        <p>Edit</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
