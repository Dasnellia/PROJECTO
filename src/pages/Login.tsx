import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoPrincipal from '../elementos/LogoPrincipal.png';
import '../elementos/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de login aquí
    console.log('Login attempt with:', { username, password });
  };

return (
    <div className="fondo-principal" style={{ minHeight: '100vh' }}>
      {/* Encabezado */}
      <div className="d-flex justify-content-center align-items-center p-4" id="div1">
        <img src={LogoPrincipal} className="logo-principal" alt="Game Verse Logo" />
        <h1 className="text-white ms-3 mt-0" id="titulo-logo">Game Verse</h1>
      </div>

      {/* Formulario de Inicio de Sesión */}
      <div className="d-flex justify-content-center align-items-center mt-5" id="div2">
        <div className="contenedor-blanco p-5" id="div3">
          <h2 className="text-black ms-3 mt-0" id="titulo-principal">¡Bienvenido al universo gamer!</h2>
          
          {/* Campo de Usuario/Email */}
          <h3 id="correo-principal">Username or E-mail address</h3>
          <div className="input-group mb-3" id="div4">
            <span className="input-group-text" id="addon1">👤</span>
            <input
              type="text"
              className="form-control"
              id="usuario"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Campo de Contraseña */}
          <div className="d-flex justify-content-between align-items-center mb-2" id="div5">
            <h4 className="text-black ms-3 mt-0" id="contraseña-principal">Password</h4>
            <a href="#" className="text-decoration-none">Forgot your password?</a>
          </div>

          <div className="input-group mb-3" id="div6">
            <span className="input-group-text" id="addon2">🔐</span>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="contraseña"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-secondary"
              type="button"
              id="ver-contraseña"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </button>
          </div>
          
          {/* Botón de Inicio de Sesión */}
          <button type="button" className="btn btn-secondary w-100">Sign in</button>

          {/* Enlace para Crear Cuenta */}
          <div className="d-flex justify-content-center align-items-center mt-3" id="div7">
            <h5 className="text-black me-2 mb-0">New to GameStore?</h5>
            <a href="#" className="text-decoration-none">Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;