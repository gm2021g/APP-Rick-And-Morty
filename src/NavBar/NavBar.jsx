import SearchBar from '../components/SearchBar/SearchBar';
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'

const Nav = ({ onSearch }) => {
    return (
        <nav>
            <ul className={styles.ul}>

                <li className={styles.li}><Link to="/about"> About </Link></li>
                <li className={styles.li}><Link to="/home"> Home </Link></li>
                <li className={styles.li}><SearchBar onSearch={onSearch} /></li>
            </ul>
        </nav>
    );
}

export default Nav; 