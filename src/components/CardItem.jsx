import React,{useState,useEffect} from 'react'

const CardItem = ({title,price,onDelete}) => {
    const [cantidad,setCantidad] = useState(1)

    const restar = () =>{
        if (cantidad <= 1){
            onDelete();
        }else
        setCantidad(prev => prev-1)
    }
  return (
    <div className='border radius rounded d-flex justify-content-between p-3 '>
        <div className='text-start '>
            <div className="h5">{title}</div>
            <div className="h5 text-success">${price}</div>
        </div>
        <div className='d-flex gap-2 justify-content-center align-items-center'>
            <button className='btn btn-outline-light text-dark'><i className="bi bi-pencil"></i></button>

            <div className=" d-flex gap-2 align-items-center p-1">
                <button className='btn btn-outline-dark p-0 ' onClick={restar}><i className="bi bi-dash "></i></button>
                
                <p className='m-auto h5'> {cantidad} </p>
                <button className='btn btn-outline-dark p-0' onClick={()=>setCantidad(cantidad+1)}><i className="bi bi-plus-lg"></i></button>
            </div>
        </div>

    </div>
  )
}

export default CardItem