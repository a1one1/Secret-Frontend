import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IModels } from '../../../redux/store/types/Imodels';
import styles from './OneModel.module.css';
interface IModel {
  colors: [
    {
      color: String;
      img: String;
      size: {
        XS: Number;
        S: Number;
        M: Number;
        L: Number;
        XL: Number;
      };
    }
    //   {
    //     black?: String;
    //     img: String;
    //     size: {
    //       XS: Number;
    //       S: Number;
    //       M: Number;
    //       L: Number;
    //       XL: Number;
    //     };
    //   },
    //   {
    //     blue?: String;
    //     img: String;
    //     size: {
    //       XS: Number;
    //       S: Number;
    //       M: Number;
    //       L: Number;
    //       XL: Number;
    //     };
    //   },
    //   {
    //     white?: String;
    //     img: String;
    //     size: {
    //       XS: Number;
    //       S: Number;
    //       M: Number;
    //       L: Number;
    //       XL: Number;
    //     };
    //   }
  ];
  _id: string;
  name: string;
  modelImg: string;
  price: Number;
  categoriesId: {
    _id: string;
    name: string;
    __v: Number;
  };
  __v: Number;
}

export default function OneModel() {
  const [oneModel, setOneModel] = useState<IModel>();

  function handleClick() {
    console.log(oneModel?.colors.map((item: any) => console.log(item.color)));
  }
  useEffect(() => {
    const modelParse = localStorage.getItem('model');

    setOneModel(JSON.parse(modelParse!));
  }, []);

  return (
    <section className={styles.OneModel}>
      <h3 onClick={handleClick}>{oneModel?.name}</h3>
      <div className={styles.shopRoutes}>
        <Link to={'/'}>Главная</Link>
        <div className={styles.line}>—</div>
        <div className={styles.shopItem}>
          <Link to={'/shop'}>{oneModel?.categoriesId.name}</Link>
        </div>
        <div className={styles.line}>—</div>
        <div className={styles.shopItemGrey}>
          <div>{oneModel?.name}</div>
        </div>
      </div>
      <div className={styles.oneModelDiv}>
        <div className={styles.imgOneModel}>
          <img src={oneModel?.modelImg} alt='' />
        </div>
        <div className={styles.oneModelBody}>
          <div className={styles.oneModelPrice}>
            {oneModel?.price.toString()}
          </div>
          <div className={styles.oneModelSize}>
            <p>Выберите размер</p>
            <button className={styles.sizeBtn}>1</button>
          </div>
          <div className={styles.oneModelColor}>
            <p>Выберите цвет</p>
            {oneModel?.colors.map(item => (
              <div
                style={{
                  background: item.color.toString(),
                  width: '100px',
                }}
              ></div>
            ))}
          </div>
          <div className={styles.addBasket}>
                <input type="number" />
                <button>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </section>
  );
}
