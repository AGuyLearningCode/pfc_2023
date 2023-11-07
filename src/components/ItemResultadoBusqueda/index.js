import React from 'react';
import styles from "./ItemResultadoBusqueda.module.css"

const ItemResultadoBusqueda = (props) => {
  return (
    <div className={styles.resultado} onClick={ props.onClick }>
        <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + props.img} />
        <p className={styles.resultadoTitle}>{props.title}</p>
      {/* <p><img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + props.poster_path} />{props.title}</p> */}
    </div>
  );
}

export default ItemResultadoBusqueda;