import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [leg, setLeg] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    
    e.preventDefault();
        
        if (leg === "2744" && password === "senales") {
                navigate("/Dashboard"); // redirige al componente Dashboard
        } else {
        setError("Legajo o contraseña incorrectos.");
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        }
27
  }; 

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Ingreso</h2>

        <label className="block mb-2 text-sm font-medium">Legajo</label>
        <input
          type="number"
          value={leg}
          onChange={(e) => setLeg(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block mb-2 text-sm font-medium">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;