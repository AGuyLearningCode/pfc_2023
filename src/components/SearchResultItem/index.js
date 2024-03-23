import React from 'react';
import styles from "./SearchResultItem.module.css"
import placeholder from '../../assets/imagenes/Item-placeholder_3.png'
import degradado from '../../assets/imagenes/item-degradado.png'


/**
 * En este componente se diseña cómo se muestran cada uno de los elementos resultantes de la búsqueda.
 * Cargándose el wallpaper del item si lo hay en la API y sino, mostrando una imagen placeholder.
 * Y aparte también se carga una imagen transparente con un degradado para que el título y el año
 * se lean mejor.
 */
const SearchResultItem = (props) => {

  // Función auxiliar para devolver la fecha según el formato solicitado.
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
    <div className={styles.result} onClick={ props.onClick }>
      <div className={styles.imagePlaceholder}>
        {props.img!=null &&
        <img src={
          "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
          +
          props.img} />         
        }


        {props.img===null &&
        
          <img src={placeholder}/>
        
          
        }
        <div className={styles.movieGradient}>
          <img src={degradado}/>
        </div>
        <div className={styles.movieTitle}>
          <h1>{props.title}</h1>
          <h1>{dateFormat(props.date)}</h1>
        </div>
        
      </div>
    </div>
  );
}

export default SearchResultItem; 