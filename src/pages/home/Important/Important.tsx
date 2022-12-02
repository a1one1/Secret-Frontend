import React from 'react';
import styles from './Important.module.css';
import quality from '../../../assets/home/important/quality.svg';
import speed from '../../../assets/home/important/speed.svg';
import hand from '../../../assets/home/important/hand.svg';

export default function Important(): JSX.Element {
  return (
    <section>
      <h2>Что для нас важно</h2>
      <div className={styles.importantDiv}>
        <div className={styles.important}>
          <img src={quality} alt='quality' />
          <h3>Качество</h3>
          <p>
            Наши профессионалы работают на лучшем оборудовании для пошива одежды
            беспрецедентного качества
          </p>
        </div>
        <div className={styles.important}>
          <img src={speed} alt='speed' />
          <h3>Скорость</h3>
          <p>
            Благодаря отлаженной системе в <strong>"Secret"</strong> мы можем
            отшивать до 20-ти единиц продукции в наших собственных цехах
          </p>
        </div>
        <div className={styles.important}>
          <img src={hand} alt='hand' />
          <h3>Ответственность</h3>
          <p>
            Мы заботимся о людях и планете. Безотходное производство и
            комфортные условия труда - все это <strong>"Secret"</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
