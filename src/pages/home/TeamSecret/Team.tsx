import React from 'react';
import styles from './Team.module.css';
import adamWinger from '../../../assets/home/teamSecret/adam-winger.jpg';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export default function Team(): JSX.Element {
  return (
    <section className={styles.team}>
      <div>
        <h2>Команда мечты Secret</h2>
        <div className={styles.teamDiv}>
          <div className={styles.carouselDiv}>
            <Carousel>
              <Carousel.Item style={{ width: '729px', height: '488px' }}>
                <img src={adamWinger} alt='adamWinger' />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ width: '729px', height: '488px' }}>
                <img src={adamWinger} alt='adamWinger' />
              </Carousel.Item>
              <Carousel.Item style={{ width: '729px', height: '488px' }}>
                <img src={adamWinger} alt='adamWinger' />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className={styles.everyBrand}>
        <div>
          <h4>Для каждой</h4>
          <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
          <p>
            <strong>"Secret"</strong> ищет эти мелочи и создает прекрасные вещи,
            которые выгодно подчеркивают достоинства каждой девушки.
          </p>
          <Link className={styles.BrandLink} to={'/brand'}>
            Подробнее о бренде
          </Link>
        </div>
      </div>
    </section>
  );
}
