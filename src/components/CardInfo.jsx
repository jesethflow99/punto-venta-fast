import React from 'react';

const CardInfo = ({title,icon,amount,desc}) => {
  return (
    <div className="card border rounded shadow p-3 h-100 w-100 m-2">
      <div className="d-flex justify-content-between align-items-center mb-2 gap-3 ">
        <div className="title fw-bold text-uppercase"> {title} </div>
        <div className="icon ">
          <i className={`bi ${icon} fs-4`}></i>
        </div>
      </div>
      <h1 className="amount m-0"> {amount} </h1>
      <div className=" text-muted mt-2"> {desc} </div>
    </div>
  );
};

export default CardInfo;
