import React, { useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";


const Aside = () => {
  const [config, setConfig] = useState(null);
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch("/config.json");
        if (!response.ok) {
          throw new Error("fallo de conexion");
        }
        const data = await response.json();
        setConfig(data[0].configuracion);
      } catch (error) {
        console.log("Error del servidor ", error);
      }
    };
    fetchConfig();
  }, []);

  return (
    <div className="Aside d-flex flex-column">
      <h2 className="title text-center ">{config ? config.Titulo : "configuracion"}</h2>
      <hr />
      <div className="user d-flex p-3 align-items-center justify-content-around flex-wrap">
        <div className="iconu shadow bg-primary">
          <h2>A</h2>
        </div>
        <div className="but gap-1">
        <button className="btn btn-danger ms-auto shadow p-1"><i class="bi bi-person-circle"></i> Admin <i class="bi bi-arrow-down-circle-fill"></i></button>
        </div>
        
      </div>
      <hr />
      <div className="buttons d-flex flex-column gap-3">
         <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn btn-dark" : "btn btn-outline-dark"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/venta"
          className={({ isActive }) =>
            isActive ? "btn btn-dark" : "btn btn-outline-dark"
          }
        >
          Punto de Venta
        </NavLink>
        <NavLink
          to="/clientes"
          className={({ isActive }) =>
            isActive ? "btn btn-dark" : "btn btn-outline-dark"
          }
        >
          Clientes
        </NavLink>
        <NavLink
          to="/inventario"
          className={({ isActive }) =>
            isActive ? "btn btn-dark" : "btn btn-outline-dark"
          }
        >
          Inventarios
        </NavLink>
        <NavLink
          to="/facturas"
          className={({ isActive }) =>
            isActive ? "btn btn-dark" : "btn btn-outline-dark"
          }
        >
          Facturas
        </NavLink>
        <NavLink
          to="/reportes"
          className={({ isActive }) =>
            isActive ? "btn btn-dark" : "btn btn-outline-dark"
          }
        >
          Reportes
        </NavLink>
        <NavLink
          to="/configuracion"
          className={({ isActive }) =>
            isActive ? "btn btn-dark" : "btn btn-outline-dark"
          }
        >
          Configuracion
        </NavLink>

      </div>
      <div className="footer mt-auto text-center">
        <hr />
        <p className=" text-muted">Imprenta digital v1.0 <br /> © 2025 Todos los derechos reservados</p>
      </div>
    </div>
  );
};

export default Aside;
