import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../../assets/footer/logo.svg';
import instagram from '../../../assets/footer/instagram (1) 1.svg';
import facebook from '../../../assets/footer/facebook (1) 1.svg';
import twitter from '../../../assets/footer/twitter (1) 1.svg';
import visa from '../../../assets/footer/visa-mastercard.svg';
import { NavLink } from 'react-router-dom';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footerLog}>
          <div className={styles.logoDiv}>
            <img src={logo} alt='dress' />
            <div>Secret</div>
          </div>
          <p>© Все права защищены</p>
          <p>Политика конфиденциальности</p>
          <p>Публичная оферта</p>
        </div>
        <div className={styles.footerNav}>
          <nav>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              <p className={styles.pFooter}>Главная</p>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
              to='/shop'
            >
              <p>Магазин</p>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
              to='/brand'
            >
              <p>О бренде</p>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
              to='/contacts'
            >
              <p>Контакты</p>
            </NavLink>
          </nav>
        </div>
        <div className={styles.footerInfo}>
          <div>
            <p>+7 (495) 823-54-12</p>
            <p className={styles.pInfo}>secret@gmail.com</p>
          </div>
          <div className={styles.links}>
            <a href=''>
              <img src={instagram} alt='' />
            </a>
            <a href=''>
              <img src={facebook} alt='' />
            </a>
            <a href=''>
              <img src={twitter} alt='' />
            </a>
          </div>
          <div>
            <img src={visa} alt='' />
          </div>
        </div>
      </div>
    </footer>
  );
}
