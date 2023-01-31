import React from 'react';
import styles from './Receipts.module.css';
import modelFirst from '../../../assets/home/receipts/model-first.svg';
import modelSecond from '../../../assets/home/receipts/model-second.svg';
import modelThird from '../../../assets/home/receipts/model-third.svg';
import backgraund from '../../../assets/home/receipts/backgraund.jpg';
import Collections from '../Collections/Collections';
import { Link } from 'react-router-dom';

export default function Receipts(): JSX.Element {
  return (
    <section className={styles.sectionReceipts}>
      <div>
        <img src={backgraund} className={styles.backgraund} alt='' />
        <img
          src='https://lh3.googleusercontent.com/YbyzKWopZG42nodVLgs0kQTFVfDrbsJRePIK6z4J1cCLYfJv8zdBELZbWaN-5dhvrVWT-6IUgo3494WLTVl0okAmaKUmTr1obEeWbPtomzcpiGNfqmGX3xxWgyif8rVJYZmRPeGOjRMEOmR1r858oW4jmAVCyWly6EqxQaPv5CzfoVl6lzouCR1M85s6hQFY86XpmGj0ypjiSnp_-8kM7cmcOcH9dHfQhUIhhQgMLToStJ86Ezlupmh6JNWVZCMj1gnGmzxywjJpJrgs2ktN_nytNpasi9WEhTjaIsm_abKYnJ1_EnrTAxBIgwTu9k-mc8b9_eSQkOqU-2BE5hjaxbBfE_tXQmpSuxcRMyqZSV2KSfTGkE1Run5SEIRDhWwxItYFw3mWud2sgxet6FduX0T4QIexwHp-BmZF8_n25BxdK3Rdhvy3XuxLFm3N-glu8nJkRmB01hY9DFTMw_5eKJq3cipNM7WXgB7LGOeFsnloDu0FN9-LeFM8BZb5dkuntDMIc5jLKaj0XbaRzbtXilCczxzs2gyfzMNmxeAxbno1MlR0z28GxPXUnO-ZvJ-WUnmdZSTn5XjGXLkWEMnTh-LjnnxqNKsiUxt5FrKCbbTKZAuNxf3Eg2rhj8uxI0EdKqQwS0AomJDVPz1AHxMochz_s7erWYBUlfacRWtNDD45vzzlGZsKhgo6Jsk2Fw3B3L9KtxHcrvWk6Z5XCSl3glF7_nS6tzqpbj8v1_9DikuOnIZ2Sk_DIrWFbZG0nETc5QLRdj1xMNDx9FvJyaTSs0PWSZHSgOpyYawGAqboJPT8FQ8PWXDKzQqHXTEQJQVDHsLUJ_xgv8plXx6t-Dlc55XFcHNVb6tS3XJlsEUs3avaf0IDeJ__L2dImNLJa_U8xVV55CYnCUZVqkTPZ1vgboN2-1xcpFPTjQXTf9uSIQrJrXHB=w410-h646-no?authuser=0'
          className={styles.modelFirst}
          alt=''
        />
        <img
          src='https://lh3.googleusercontent.com/dvRMz6YY6V1iUEvYpeW0J0mGiIPjSWDglydGfqcEXhQGjih4jt4wz-Ajk1U2K7F82_n06dAxL20uadgNJ4aOA78o2itxf_QaRHPPGN6wsvclT56AkgGo4BqcArlFvx36CYP_VTxuoDIm5KJMsgdh9ZdIj8j5B9v1dLeK9XAB0h2EaNpUgQ8gq2LYhfqko5CW61z8eEFUOKQN4MQTQ28ycUEMEFdpeXeMVQOWz2MIDT5xVbzdKvsHcKpAbXqrgDuq80RLLr5_R4IN7s5BLlNSdYbynFguek5Z9ZrzPzU4JTmz9HCxu_MV3GZXAspjd_6PpLd_aIYc_PDHPf3UI3RMIQ--wlxjW8okG-LhqbZcdtjCp2Rk0c1_0VVKhK23MMlcpzV5y54YlWZikqkPLdnI6hfTf6npmsuOG9H-JelT2nIIG4cUjHnQwBUPY2pbMUpZfYjX83ug9ZCb_z8tr9_ccfs7kMzGlRvSsXa0REI3c6FuMYjPhfBSAdMkyKCLxaVFxW--0-1D_Ax3Js_A0WzmGVIJ67cF8rvhDnXzMOmPD9clpjbkiDHk2mF1nqkNR_9FHR9_oFoRHAg8E4APm_6n-tcvkGF0g4R_CL6z33Hr_EhD_cCg1k4AxoUYbQoneq1WfWn-YieSzfT-FlQbGM9rNvc8uHgy7N8votZfZpvKZ4GSHvZBqLVvOSOguzYbiyBaernbFCqdfhH8joyV-0FlUaten5gme1zo7V5KGtNGbG03mG3ftCTCRFN6a_KNDYeKjyyfM-JBGNHYxkBbKqPAMVEcej1vOlY0htmNnxQFBevPUmvN-UM1DEaIX-DYFrrGuNriAaOR93EJKI8NMi4J2e4_lkHMCb0S4dPdJ4tZJpOiR1Szu0dJsltB8c-bYvXUzdbwFormlGKRZaiNolx0uFI2hcy6VkA0pHAaV17qL3FEoyre=s197-no?authuser=0'
          className={styles.modelSecond}
        />
        <img
          src='https://lh3.googleusercontent.com/Uw0WQcVst75cvVlJC5mrkEywcpU8B1lC9CBfDyYmhRVM49usXp269uAfyzQ2cjEKOCNuTw3_xfuvZwFqdZaHbAiKqHytrTK7Q_N_SQlC--e3XP3Lvbq3UQFr-OKwx6VSYNjh8YkPZ6bI2-RMKZ9q5CZnGN1XnMGPv36G4IwsyjWEl2lQoQrOBDfdBW24AMYyxLfPFsd9fLmxuwsdFL_rjZxgjYNQpbmSW9GRhqxabTS7I71F6UfkNIIuY5aCw3zcrXs2hYR4okt3S_RPAwew83lndbhbYerwLCMeNX7wFJSAWfwlI-xMp-iLmrhCR8Lj7Tfn-YDVkTivUVWf1-JfXHMG2ah2AfdHyAIAlA5ZG26Gi1DF38_1RQgv3sMuheANzWf2Xrfpb4NEBxy3GAWiY7fj2nQu8IPjYcZGOkcW0tZT6wTTU9hboPi4rAvuK2cc0uxrUgzsRpcbVUERlhBgRfk_ri4kh9uVLUeUODf4ZkYvLCg11ME8JLsZAhpuWL9udCxf_HKm_iuZmqotXci8Ru4o_c6K1jgSKFgMeb9St3JiKlzx6v0r53yga_zLbUca0q_GGxh7VfqDuZKD4S8PPM5BfBcdxYw89LK12mI5uKR4pZWM3iYBDAgqpUnMcb1HYuL95xPmpuv59wd2mDA-Pm0ZYEizWlCVuAQN7fACjKD4Ww7tpPGmQRaS6hY8KMND9GtQjU8-IvEZ3B2s7v6xp55P23x6TIBqIB3VKaFX1KCOrmlG2Z_wdZO7sJlyeFgtkLJAYbcFwzYzk7ck-OL1AD4w0GSU860SnpHmLCxICHAMRlu6sgYO-HDUAReFxSp6DzJvE96aCyPdQdj2JcKnMRWg_roQujE1XL3dI_S91hJdTZY931XXveDQxc1hbmJ9-NJ5a8E61Lj7cGMXuUwqj_GpJ5KmShfxpSdNm3jLnpnLxb0D=w190-h318-no?authuser=0'
          className={styles.modelThird}
        />
      </div>
      <div>
        <h1>Новые поступления в этом сезоне</h1>
        <p>
          Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
          этом сезоне. Время исследовать.
        </p>
        <div className={styles.storeBtn}>
          <button
            onClick={() => {
              window.scrollTo({
                top: 900,
                behavior: 'smooth',
              });
            }}
            className={styles.arrowBtn}
          >
            ↓
          </button>
          <Link to={'/shop'}>
            <button className={styles.openBtn}>Открыть магазин</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
