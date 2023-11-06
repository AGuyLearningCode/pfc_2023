import React from 'react'

const ItemResultadoBusqueda = (props) => {
  return (
      <button onClick={ props.onClick }>{props.title}</button>
  )
}

export default ItemResultadoBusqueda


