
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'
export default function ItemCount({stock, initial, onAdd}) {

  const [count, setCount] = useState(initial);
  const [error, setError] = useState('');

  const handleCounter = (event) => {

    if(event.target.id == 'minus'){
      (count === initial) ? 
          setError(alert(`La cantidad mínima es ${initial}`)) 
          : 
          setCount(count - 1);
    }else{
      (count === stock) ? 
        setError(alert(`La cantidad máxima es ${stock}`)) 
        : 
        setCount(count + 1);
    }
  }

  return (
    <>
      <Stack gap={2}>
        <div className="input-group">
            <Button id="minus" onClick={handleCounter} className="btn btn-warning ">-</Button>
              <input disabled className="form-control text-center" value={count} type="number" />
            <Button id="plus" onClick={handleCounter} className="btn btn-warning ">+</Button>
        </div>
        <div className="">
          <Button onClick={onAdd} className="btn btn-dark">Agregar al carrito</Button>
        </div>
      </Stack>
    </>
  )
}
