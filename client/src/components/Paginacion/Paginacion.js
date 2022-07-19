import React, { useState } from 'react'
import "../../styleSheets/Paginado.css"

export const Paginacion = ({page,setPage,max}) => {
  const [input, setInput] = useState(1);
  const nextPage = ()=>{
    setInput(parseInt(input) + 1);
    setPage(parseInt(page) + 1)
  }

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setPage(parseInt(page) - 1);
  };

  const onKeyDown = (e) =>{
    if (e.keyCode === 13){
      setPage(parseInt(e.target.value))
    if (parseInt(e.target.value) < 1 || parseInt(e.target.value) > Math.ceil(max) || isNaN(parseInt(e.target.value))){
      setPage(1);
      setInput(1)
    }else{
      setPage(parseInt(e.target.value))
    }
    }
  }

  const onChange = (e)=>{
    setInput(e.target.value)
  }

  return (
    <div className="Paginado">
      <button className="button" disabled={page === 1 || page < 1} onClick={previousPage}>previous</button>
      <div className='input-h3' >
      <input className="p-input" onChange={(e)=> onChange(e)} onKeyDown={(e)=> onKeyDown(e)} name="page" autoComplete="off" value={input} />
      <h3 className='h3'>de {max}</h3>
      </div>
      <button className="button" disabled={page === Math.ceil(max) || page > Math.ceil(max)} onClick={nextPage}>next</button>
    </div>
  );
}
