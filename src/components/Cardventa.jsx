import React from 'react'

const Cardventa = ({nombre,status,descripcion,cant,precio,hora}) => {
  return (
    <div className="container-fluid m-2 rounded border p-3">
  <div className="d-flex  align-items-center mb-2">
    <p className="m-0  fw-bold">{nombre}</p>
    <div className={`ms-5 btn ${ status === 'Pendiente' ? 'btn-dark' : 'btn-success'} btn-sm p-0`}>{status}</div>
  </div>

  <div className="d-flex justify-content-between text-muted mb-2">
    <div>
      {descripcion} <br />
      <small>{cant}</small>
    </div>
    <div className="d-flex gap-2">
      <a href="#"><i className="bi bi-eye text-dark "></i></a>
      <a  href="#"><i className="bi bi-file-earmark-text text-dark "></i></a>
    </div>
  </div>

  <div className="d-flex ">
    <div className="h5 me-5 text-success fw-bold">{precio}</div>
    <div className=" ms-5 text-muted">{hora}</div>
  </div>
</div>

  )
}

export default Cardventa