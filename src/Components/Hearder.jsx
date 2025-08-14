import styles from "./Header.module.css";
import img from "../assets/img/Brasaomacau.png";

export function Header() {
  
  return (
    <header className={styles.header}>
      <div className={styles.centralContainer}>
        <div className={styles.containerImg}>
          {/* <img src={img}
          alt="Macau"
          /> */}
        </div>
        {/* <h1 className={styles.tema}>Macau - Cidade do Sal</h1> */}
        <h1 className={styles.tema}>Header</h1>
      </div>
    </header>
  );
}