import styles from './SearchBar.module.css'
import { useState } from "react"

export default function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div className={styles.div} >
         <input className={styles.input} type='search' value={character} onChange={handleChange} />
         <button className={styles.butt} onClick={() => onSearch(character)}> Agregar </button>
      </div>
   );
}
