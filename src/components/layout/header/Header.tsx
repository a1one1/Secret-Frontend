import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Footer(): JSX.Element {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img alt="dress" />
          <img alt="nameshop" />
        </div>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/shop">Магазин</Link>
          <Link to="/brand">О бренде</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>
      </div>
    </header>
  );
}
