import styles from './Card.module.css'
import { Link } from "react-router-dom"

export default function Card({ name, gender, onClose, species, image, id }) {
   return (
      <div className={styles.div}>
         <button className={styles.cerrar} onClick={onClose}>X</button>

         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>

         <img className={styles.img} src={image} alt={name} />
         <div className={styles.texto}>
            <h2 className={styles.h2}> {species}</h2>
            <h2 className={styles.h2}> {gender}</h2>
         </div>
      </div>
   );
}
