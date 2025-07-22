import React,{useState,useEffect} from 'react'
import Aside from '../layout/Aside/Aside'
import CardService from '../components/CardService'
import CardItem from '../components/CardItem'

const Venta = () => {
    const [item, setItem] = useState([])
    const [total,setTotal]= useState(0)
    const totalItems = item.reduce((acc, curr) => acc + (curr.cantidad || 1), 0);
    const totalPrice = item.reduce((acc, curr) => acc + (curr.price * (curr.cantidad || 1)), 0);


    const removeItem = (index) =>{
        setItem(prev => prev.filter((_,i)=> i !== index))
    }
    const addItem = (nuevo) =>{
    
        setItem(prev =>[...prev,nuevo])
    }
  return (
    <>
        <div className="Header d-flex align-items-center justify-content-between p-5">
            <div>
                <h1>Punto de venta</h1>
                <p className='text-muted'>Registrar nueva Venta</p>
            </div>
            <div>
                <p className="border rounded p-1 shadow">
                    <i className="bi bi-cart"></i>
                    {totalItems} items
                </p>
            </div>
        </div>
        <Aside/>
        <div className="Section d-flex gap-2 p-3">
            <div className="sec col-9 border shadow rounded p-3">
                <h2>Servicios Disponibles</h2>
                <p className="text-muted">Selecciona los servicios para agregar a la venta</p>
                <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm"><i className="bi bi-search"></i></span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='Buscar Servicios...'/>
                </div>
                <CardService title="Impresion A4" price="35.00" type="Impresion" onAdd={addItem} />
            </div>
            <div className="asi col border shadow-lg rounded p-3 text-center">
                
                <div className="form text-start border p-2 rounded shadow">
                        <h2> <i className="bi bi-person"></i> Datos del cliente</h2>
                        <hr />
                        <div className="mb-3">
                        <label for="name" className="form-label">Nombre del Cliente</label>
                        <input type="text" className="form-control" id="name" placeholder="Nombre completo"/>
                        </div>
                        <div className="mb-3">
                        <label for="phone" className="form-label">Telefono</label>
                        <input type="text" className="form-control" id="phone" placeholder="Numero de contacto"/>
                        </div>
                        <div className="mb-3">
                        <label for="notas" className="form-label">Observaciones</label>
                        <textarea className="form-control" id="notas" rows="3" placeholder='Notas adicionales...'></textarea>
                        </div>
                </div>
                <div className="rounded border shadow d-flex flex-column mt-2 p-2">
                    <h4 className='me-auto '> <i className="bi bi-cart4"></i> Carrito de venta</h4>
                    <hr />
                    {item.length === 0 ?(
                        <p classnameName='text-muted'>No hay items en el carrito</p>
                    ):(
                        item.map((servicio,index)=>(
                            <CardItem key={index} title={servicio.title} price={servicio.price} onDelete={()=> removeItem(index)} />
                        ))
                    )}
                    
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Venta