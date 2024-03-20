import React from 'react';
import styles from "./ItemResultadoBusqueda.module.css"
import placeholder from '../../assets/imagenes/Item-placeholder_3.png'
import degradado from '../../assets/imagenes/item-degradado.png'


/**
 * En este componente se diseña cómo se muestran cada uno de los elementos resultantes de la búsqueda.
 * Cargándose el wallpaper del item si lo hay en la API y sino, mostrando una imagen placeholder.
 * Y aparte también se carga una imagen transparente con un degradado para que el título y el año
 * se lean mejor.
 */
const ItemResultadoBusqueda = (props) => {
  const dateFormat = (date) => {
    if(!date){
      return ""
    }
    if(props.dateFormat == "year"){
        return  date.substring(0,4);
    }

    const [year, month, day] = date.split("-")
    return `${day}/${month}/${year}`
  }


  return (
    <div className={styles.resultado} onClick={ props.onClick }>
      <div className={styles.imagenplaceholder}>
        {props.img!=null &&
        <img src={
          "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
          +
          props.img} />         
        }


        {props.img===null &&
        
          <img src={placeholder}/>
        
          
        }
        <div className={styles.degradadoPelicula}>
          <img src={degradado}/>
        </div>
        <div className={styles.tituloPelicula}>
          <h1>{props.title}</h1>
          <h1>{dateFormat(props.date)}</h1>
        </div>
        
      </div>
    </div>
  );
}

export default ItemResultadoBusqueda; 