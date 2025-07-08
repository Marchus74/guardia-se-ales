import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-blue-500 " onClick={() => navigate('/login')}>
      <h1>Guardia</h1>
      <h2>Administracion guardia personal tecnico de señales subte C</h2>
      <p>Haz clic para ingresar</p>
    </div>
  );
}

export default Home;