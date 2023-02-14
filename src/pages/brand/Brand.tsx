import { Link } from 'react-router-dom';
import styles from './Brand.module.css';

export default function Brand(): JSX.Element {
  return (
    <main className={styles.brand}>
      <div>
        <h3 className={styles.brandH3}>О бренде</h3>
        <div className={styles.brandRoutes}>
          <Link to={'/'}>Главная</Link>
          <div className={styles.line}>—</div>
          <div className={styles.brandItem}>Корзина</div>
        </div>
      </div>
      <div className={styles.brandBody}>
        <div className={styles.bodyItem1}>
          <img
            src='https://lh3.googleusercontent.com/TXiDbOamhxqB_msSQfrXYf8XIz3mO1S7v6C4HK50h13aDuoupdsWJhwwTGYw8A4e08g6GNHpMSDkatPmMsH795FZZumrfhVVa_thqglE9LCodvRuda-wLZqPFZgTlu7ThV5VcV28wftxRg7YsYHci58FbGuYF-6QkR4uNyK2GehS-OtANegaKFRdHFf6CxIhYHsM-FVe23T2zlWpjbRRMLrCOe-r6HnvNguXk1d5cecEdR7esRQuosw5xoJ2zM06Bhkrwy50_Er0nHKvAPQngcNFxGnq-Y5BazIuG581gULqVm6CFhyFPUkvWB0OWWe1ZlmN_J7gEdHkdKTztUIGaD5puY_pLRgcac0n2Nu0qBvoQs8NLnjQCk2eDZmta9QMAy3MIupQLU5oc01Ur0YL462Ec4Ymba6lEGVzSUBe1s0jaD6F72yn9xLFeO9hDYX2-DaHKU-EBHuLZxXLIDcYTsHY6qz4pElDtIX94mDvQ3WItA4bOn8xtZvMQpYsGp8d_bOFLZo_T6qI0HQHitrIimKSDoPNJgUVfHDK-3cwZBEYp5fqBxaFNjN7RHW_-OnWMtKRvDzY11TJgnx4hNoOijp8KkjFcE0B1AEc906qtv261MMOCiG5SzOFmsAylrbXOVNeh74O6Lf3lqXdCv_i9P48FpQkZOC6z8ifWm1vqbGT2-Y_fz_FaKe76xhTeH5hY5Gav3h_bShXyS2m3b4OIF9lbDxF04nuFsa3fiWL_N4qRqOxkVWiwIzZAoPav7C9Q9VE8pCUb11906bNv9FlaLRl2gEhSFOM0tT2ldYJMrgYLDonclSEijZWJh2p4sW3zCH3Auywqp6ZWuZmCewuQophsTAWESYYLEbBFeZfy0kxYzobA8DWqpDBrxZ3R3GBmz9tl9TqvhBedQ-3mA1j0wxZvq-Xzm3G8AbBndPzoHBlrP2e=w442-h547-no?authuser=0'
            alt=''
          />
          <div className={styles.bodyItem1Div}>
            <h4>Идея и женщина</h4>
            <p>
              Womazing была основана в 2010-ом и стала одной из самых успешных
              компаний нашей страны. Как и многие итальянские фирмы, Womazing
              остаётся семейной компанией, хотя ни один из членов семьи не
              является модельером.
            </p>
            <p>
              Мы действуем по успешной формуле, прибегая к услугам известных
              модельеров для создания своих коллекций. Этот метод был описан
              критиком моды Колином Макдауэллом как форма дизайнерского
              со-творчества, характерная для ряда итальянских prêt-a-porter
              компаний.
            </p>
          </div>
        </div>
        <div className={styles.bodyItem2}>
          <div className={styles.bodyItem2Div}>
            <h4>Магия в деталях</h4>
            <p>
              Первый магазин Womazing был открыт в маленьком городке на севере
              страны в 2010-ом году. Первая коллекция состояла из двух пальто и
              костюма, которые были копиями парижских моделей.
            </p>
            <p>
              Несмотря на то, что по образованию основательница была адвокатом,
              ее семья всегда была тесно связана с шитьём (прабабушка
              основательницы шила одежду для женщин, а мать основала
              профессиональную школу кроя и шитья). Стремление производить
              одежду для масс несло в себе большие перспективы, особенно в то
              время, когда высокая мода по-прежнему доминировала, а рынка
              качественного prêt-a-porter попросту не существовало.
            </p>
          </div>
          <img
            src='https://lh3.googleusercontent.com/VHA6cQPoDo0RMv7yQTua2fqZdA9TdSM1SWhai1Cu5tULqi5fINV-TvMXl33kW_QdLeJdkV8p4zS0ZZSDZbGyAQmSqKmUwGG-oek7v532QVJ2b15cpUrY9oSyeEg0kTMEmncPqvMbqzlOjV15C35LkueDPMUvRt1F6THfdg2pYJBiVJuVOL82fPTAQJoQIzkVoCMd-f4rCSC67TkHmBaqKtiHOHF8XL1tDZ_l7Qm1hU0aPJ-nsB-Cs09lCP6g8NYaXnhKwsHtdo-TAwv2qFdAiGz8Y-nscbf1kkuoye3iYzhuWXBugQzCiSJeERlUeb0uJMuU0QC7w-RL7Tk-y5awL_fEIveFP_uc4MGstwbWW0Poh8Ff08Mwf4zJgrIY4DiqKOjMikcigMderQdPRAWxZABxnqt0knbkChDIKqIYM8_Nhb2kUC_gvb1P8JHaDxt3UtkGe1fqVFTa077RqvpHVexo1r0B4uBulswQINVaITQJo7GYIzdk_2e3FCxJLwQkpL2ElQNFDoAAH9A81kcZhhi6TrKGrE2boBl8HOjSXMxNrmd7FRYZaw2pDPnnahpX2NgQVzGGDPfbDKna2kXA6ecvUZpWhzY3U--4p_zGpruha2buN1qh02E15KrBn1g32r5t2lF78gjUla8smWMeFeX-j52wmw2xQjLC7jsnSXi6Db-IlHMKBFimlTm0Xmm4ZNPEczd5-xqOb0yQbn6idjrK4ELRr1PHANo4yYhEVF36Sv62cpWAd6O9vVQbhJobq911jlkojT2_ALR-xRMkCmY0PhPqsG_bIPSl0yQIwcdT5yip8-X74cW99Xirlvw-qfrtU50YJBtZ-J5yZCdKwaPdHhxSbFPZLkxqe3_0ykrOej0C95-HuwWFguh0tLHpV3zDKF7r1xePeKQE2EnMiPWLHB1PDgACEZy_T2b2k8aRSv8-=w442-h547-no?authuser=0'
            alt=''
          />
        </div>
      </div>
      <div className={styles.brandButton}>
        <div>
          <Link to='/shop'>
            <button>Перейти в магазин</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
