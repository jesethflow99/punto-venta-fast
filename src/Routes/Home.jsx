import React, { useState, useEffect } from "react";
import Aside from "../layout/Aside/Aside";
import CardInfo from "../components/CardInfo";
import Cardventa from "../components/Cardventa";

const Home = () => {
  const fecha = new Date();
  return (
    <>
      <div className="Header d-flex">
        <div className="container col-6 align-items-start">
          <h1 className="ms-auto">Dashboard</h1>
          <p>Panel principal</p>
        </div>
        <div className="container col-6 align-items-center justify-content-end d-flex gap-3">
          <div className="dat border p-2 rounded shadow ">
            <i class="bi bi-calendar"></i> {fecha.toLocaleDateString()}
          </div>
          <button className="btn btn-dark">
            {" "}
            <i class="bi bi-cart4"></i> Nueva Venta
          </button>
        </div>
      </div>
      <Aside />
      <div className="Section ">
        <div className="head d-flex justify-content-around">
          <CardInfo
            title="Ventas Hoy"
            amount={15}
            desc="+12% desde ayer"
            icon="bi-cart4"
          />
          <CardInfo
            title="Ingresos del Dia"
            amount={"$2450.00"}
            desc="+8% desde ayer"
            icon="bi-currency-dollar"
          />
          <CardInfo
            title="Clientes Atendidos"
            amount={12}
            desc="+5% desde ayer"
            icon="bi-people"
          />
          <CardInfo
            title="Ventas Hoy"
            amount={15}
            desc="+12% desde ayer"
            icon="bi-box2"
          />
        </div>
        <div className="mt-3 p-3 mb-auto ">
          <div className="row g-3 h-100">
            <div className="col-md-9">
              <div className="border rounded shadow h-100 p-3">
                <h1>Estadisticas de Venta</h1>
                <p className="text-muted">Analisis detallado del rendimiento</p>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="ventas-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ventas"
                      type="button"
                      role="tab"
                    >
                      Ventas por hora
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="servicios-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#servicios"
                      type="button"
                      role="tab"
                    >
                      Servicios populares
                    </button>
                  </li>
                </ul>

                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="ventas"
                    role="tabpanel"
                  >
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" className="col col-1">9:00</th>
                          <td className="col col-5 ">
                            <div className="progress " role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{height:'10px'}}>
                                <div className="progress-bar bg-primary" style={{width:'57%'}}  ></div>
                            </div>
                          </td>
                          <td className="col col-3 text-center text-muted">
                            2 ventas
                            </td>
                          <td className="text-success col col-3 text-end text-weigt fw-bold">$150</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="servicios" role="tabpanel">
                    
                    <div className="row">
                        <div className="col col-11">
                            <div className="d-flex">
                                <div className="mt-2">Impresion Digital</div>
                            <div className="ms-auto">12 ventas</div>
                            </div>
                            <div>
                                <div className="progress ms-auto mt-2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{height:'10px'}}>
                                <div className="progress-bar bg-success" style={{width:'57%'}}  ></div>
                                </div>
                                    
                            </div>
                            
                        </div>
                        <div className="col col-1 d-flex align-items-center fw-bold text-primary h5">
                                35%
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="border rounded shadow h-100 p-3 d-flex flex-column align-items-center">
                <div className="container">
                    <h2>Ventas Recientes</h2>
                <p className="text-muted">Ultimas transacciones del dia</p>
                </div>
                
                <Cardventa nombre={'Maria Gonzalez'} status={'Pendiente'} descripcion={'impresion Digital'} cant={'500 flyers'} precio={'$125'} hora={'11:20'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
