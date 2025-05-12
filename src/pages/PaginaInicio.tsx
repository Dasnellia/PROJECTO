import React from 'react';
import '../elementos/PaginaInicio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Importar imágenes (asegúrate de tenerlas en tu proyecto)
import LogoPrincipal from '../elementos/LogoPrincipal.png';
import Banner1 from '../elementos/a.png';
import EldenRing from '../elementos/juegos/EldenRing.jpg';
import ZeldaTears from '../elementos/juegos/LoZTofk.jpg';
import Cyberpunk from '../elementos/juegos/cyberpunk.avif';
import GodOfWar from '../elementos/juegos/god-of-war-valhalla.jpg';
import Hogwarts from '../elementos/juegos/hogwartlegacy.jpeg';
import ResidentEvil from '../elementos/juegos/ResidentEVIL4Remake.jpg';
import Starfield from '../elementos/juegos/starfield.jpeg';
import FinalFantasy from '../elementos/juegos/finalfantasy.jpg';


const PaginaInicio = () => {
  return (
    <div className="pagina-inicio">
      {/* Navbar superior */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={LogoPrincipal} alt="Universo Gamer Logo" width="50" className="rounded-circle border border-danger" />
          </a>
          <form className="d-flex mx-auto w-50">
            <input className="form-control me-2" type="search" placeholder="Buscar juegos..." aria-label="Buscar" />
            <button className="btn btn-outline-light" type="submit">Buscar</button>
          </form>
          <a className="btn btn-outline-light" href="/iniciarsesion">
            <i className="bi bi-person-fill"></i> Mi Cuenta
          </a>
        </div>
      </nav>

      {/* Navbar secundario */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="w-100">
            <ul className="nav justify-content-center">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="homeDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">Inicio</a>
                <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                  <li><a className="dropdown-item" href="/">Destacados</a></li>
                  <li><a className="dropdown-item" href="/">Ofertas</a></li>
                  <li><a className="dropdown-item" href="/">Próximos lanzamientos</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/catalogo">Catálogo</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="platformDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">Plataformas</a>
                <ul className="dropdown-menu" aria-labelledby="platformDropdown">
                  <li><a className="dropdown-item" href="#">PC</a></li>
                  <li><a className="dropdown-item" href="#">PlayStation 5</a></li>
                  <li><a className="dropdown-item" href="#">Xbox Series X</a></li>
                  <li><a className="dropdown-item" href="#">Nintendo Switch</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/masvendidos">Más vendidos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/mejorvalorados">Mejor valorados</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/carrito"><i className="bi bi-cart-fill"></i> Carrito</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="container mt-4">
        <h1 className="text-center">Universo Gamer</h1>
        <p className="text-center">Tienda de videojuegos</p>
      </div>

      {/* Carrusel */}
      <div className="container">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner rounded">
            <div className="carousel-item active">
              <img src={Banner1} className="d-block w-100" alt="Ofertas de Verano" />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded">
                <h5>Ofertas de Verano</h5>
                <p>Hasta 70% de descuento en juegos seleccionados</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/1200x400/333/ff0000?text=Nuevos+Lanzamientos" className="d-block w-100" alt="Nuevos Lanzamientos" />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded">
                <h5>Nuevos Lanzamientos</h5>
                <p>Descubre los juegos más recientes</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/1200x400/333/ff0000?text=Ediciones+Coleccionistas" className="d-block w-100" alt="Ediciones Coleccionistas" />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded">
                <h5>Ediciones Coleccionistas</h5>
                <p>Artículos exclusivos para los verdaderos fans</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </a>
          <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </a>
        </div>
      </div>

      {/* Juegos destacados */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Juegos Destacados</h2>
        <div className="row g-4">
          {/* Juego 1 */}
          <div className="col-md-3 col-sm-6">
            <div className="card h-100">
              <div className="discount-badge">-30%</div>
              <img src={EldenRing} className="card-img-top game-cover" alt="Elden Ring" />
              <div className="card-body">
                <h5 className="card-title">Elden Ring</h5>
                <div className="mb-2">
                  <span className="badge bg-secondary platform-badge">PS5</span>
                  <span className="badge bg-secondary platform-badge">XBOX</span>
                  <span className="badge bg-secondary platform-badge">PC</span>
                </div>
                <p className="card-text">Un épico RPG de acción en un mundo abierto creado por Hidetaka Miyazaki y George R.R. Martin.</p>
                <p className="price">
                  <span className="text-decoration-line-through text-muted me-2">S/ 199.00</span>
                  <span>S/ 139.30</span>
                </p>
                <a href="#" className="btn btn-primary w-100">Agregar al carrito</a>
              </div>
              <div className="card-footer text-muted d-flex justify-content-between">
                <span>Valoración: 4.9/5</span>
                <a href="#" className="btn btn-sm btn-secondary">Detalles</a>
              </div>
            </div>
          </div>
          
          {/* Resto de juegos... (repetir el patrón para los otros 7 juegos) */}
          {/* Juego 2 */}
          <div className="col-md-3 col-sm-6">
            <div className="card h-100">
              <img src={ZeldaTears} className="card-img-top game-cover" alt="Zelda: Tears of the Kingdom" />
              {/* ... resto del contenido del juego ... */}
            </div>
          </div>
          
          {/* Continuar con los juegos 3 al 8 siguiendo el mismo patrón */}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white mt-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-danger">Universo Gamer</h5>
              <p>Tu tienda de videojuegos con los mejores precios y lanzamientos.</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-danger">Contacto</h5>
              <p><i className="bi bi-envelope-fill"></i> contacto@UniversoGamer.com</p>
              <p><i className="bi bi-telephone-fill"></i> +51 *imaginate un numero*</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-danger">Síguenos</h5>
              <div className="d-flex gap-3">
                <a href="https://facebook.com" className="text-white fs-4"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-twitch"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
          </div>
          <hr className="my-4 bg-danger" />
          <div className="text-center">
            <p>&copy; 2025 Universo Gamer. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PaginaInicio;