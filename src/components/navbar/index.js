import { Link } from "react-router-dom";
import { NavS } from "../../pages/style/style";

const Header = () => {
  return (
    <>
      <NavS className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            Gerenciador MCF
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  
                    <Link to={"/home"}> Inicio </Link>
              
                </li>

                
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Relatório
                  </a>
                </li>
                <li className="nav-item">
                  <Link to={"/list"}>Pedidos </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/"}> Sair </Link>
                </li>


              </ul>
            </div>
          </div>
        </div>
      </NavS>
    </>
  );
};

export default Header;
