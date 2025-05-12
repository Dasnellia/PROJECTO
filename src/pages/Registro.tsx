import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../elementos/Registro.css';
import LogoSesionCrear from '../elementos/LogoSesionCrear.png';
import LogoPrincipal from '../elementos/LogoPrincipal.png';

const Registro = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    country: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    // BACKENDDDDDDDDDDDDDDDDDDDDDDDDDDD
  };

    return (
            <div className="registro-container">
      {/* Fondo Derecho */}
      <div id="div1">
        <img src={LogoSesionCrear} className="fondo-crear" alt="Fondo de registro" />
        <h2 id="texto-principal">Create your free account</h2>
        <p id="texto-secundario">Explore your favorite games and play without restrictions</p>
        
        <div className="google-btn-container" id="div4">
          <button className="btn custom-google-btn" id="boton-google">
            <img 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
              width="20" 
              alt="Google logo" 
            />
            <span className="text-button">Crear cuenta con Google</span>
          </button>
        </div>
      </div>

      {/* Logo sobre el fondo */}
      <div id="div2">
        <div className="logo-contenedor" id="div3">
          <img src={LogoPrincipal} className="logo-principal" alt="Game Verse Logo" />
          <h1 id="titulo-logo">Game Verse</h1> 
        </div>
      </div>
      
      {/* Formulario */}
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }} id="div9">
        <form className="formulario-registro" onSubmit={handleSubmit}>
          <h3 id="titulo-registro">Sign up to Game Verse</h3>
          
          <div className="mb-3" id="div5">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              aria-describedby="emailHelp"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3" id="div6">
            <label htmlFor="username" className="form-label">Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="username" 
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3" id="div7">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3" id="div8">
            <label htmlFor="country" className="form-label">País/Región</label>
            <select 
              className="form-select" 
              id="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Selecciona tu país</option>
              <option value="Perú">Perú</option>
              <option value="Argentina">Argentina</option>
              <option value="Colombia">Colombia</option>
              <option value="Chile">Chile</option>
              <option value="México">México</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary" id="boton-enviar">
            Continue
          </button>
        </form>
      </div>
    </div>
    )
}
export default Registro;