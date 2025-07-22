import React from 'react'

const CardService = ({title,price,type,onAdd}) => {
    const handleAdd = () =>{
        onAdd({
            title,
            price : parseFloat(price),
            type,
        })
    }
  return ( 
    <div className=' d-inline-flex gap-5 mt-3 border p-3 rounded d-flex p-2  '>

        <div>
            <h5>{title}</h5>
            <h4 className='text-success'>${price}</h4>
        </div>
        <div className="text-end ms-auto">
            <p>{type}</p>
            <button className='btn btn-dark' onClick={handleAdd}>+ Agregar</button>
        </div>

    </div>
  )
}

export default CardService