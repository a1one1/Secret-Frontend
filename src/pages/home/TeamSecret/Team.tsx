import React from 'react';
import styles from './Team.module.css';
import adamWinger from '../../../assets/home/teamSecret/adam-winger.jpg';
import { Link } from 'react-router-dom';

export default function Team(): JSX.Element {
  return (
    <section className={styles.team}>
      <div>
        <h2>Команда мечты Secret</h2>
        <div className={styles.teamDiv}>
          <img src={adamWinger} alt='adamWinger' />
          <div className={styles.lineDiv}>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
        <button className={styles.arrowLeft}>←</button>

        <button className={styles.arrowRight}>→</button>
      </div>
      <div className={styles.everyBrand}>
        <div>
          <h4>Для каждой</h4>
          <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
          <p>
            <strong>"Secret"</strong> ищет эти мелочи и создает прекрасные вещи,
            которые выгодно подчеркивают достоинства каждой девушки.
          </p>
          <Link to={'/'}>Подробнее о бренде</Link>
        </div>
      </div>
    </section>
  );
}
