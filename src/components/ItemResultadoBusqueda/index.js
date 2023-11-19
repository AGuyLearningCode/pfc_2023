import React from 'react';
import styles from "./ItemResultadoBusqueda.module.css"

const ItemResultadoBusqueda = (props) => {
  return (
    <div className={styles.resultado} onClick={ props.onClick }>
        <img src={
          "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
          +
          props.img} />
    </div>
  );
}

export default ItemResultadoBusqueda; 