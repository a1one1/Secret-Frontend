import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { IUser } from '../../redux/store/types/IUser';
import styles from './Basket.module.css';

export default function Basket() {
  const { error, basket } = useTypedSelector(state => state.user);
  const { models } = useTypedSelector(state => state.model);

  const {
    register,
    formState: { errors },
    handleSubmit,

    reset,
  } = useForm({
    //  mode: 'all',
  });

  const onSubmitAmount = async (data: any) => {
    console.log(data);
  };

  const onSubmitCoupons = async (data: any) => {
    console.log(data);
  };

  const total = basket.reduce((acc, model) => {
    return acc + model.price;
  }, 0);

  function handleRemoveModel(model: IUser) {
    console.log(model);
  }

  function handleAmountPlus(params: IUser) {
    // let cities = basket.reduce(
    //   (acc, model) => {
    //     if (acc.map[model.colorId]) return acc;
    //     acc.map[model.colorId] = true;
    //     acc.cities.push(model);
    //     return acc;
    //   },
    //   {
    //     map: {},
    //     cities: [],
    //   }
    // ).cities;
    // console.log(cities);
    // const op = basket.filter(item => {
    //   if (item.colorId === item.colorId) {
    //   }
    // });
    // basket.filter(item => {
    //   if (params) {
    //   }
    // });
    // console.log(params);
  }

  function handleAmountMinus(params: any) {
    console.log(params);
  }

  return (
    <div className={styles.basket}>
      <h3 className={styles.basketH3}>Корзина</h3>
      <div className={styles.basketRoutes}>
        <Link to={'/'}>Главная</Link>
        <div className={styles.line}>—</div>
        <div className={styles.basketItem}>Корзина</div>
      </div>
      <div className={styles.basketMain}>
        <div className={styles.borderLine}></div>

        <table>
          <thead>
            <tr className={styles.basket_tr}>
              <th>Товар</th>
              <th>Цена</th>
              <th>Размер</th>
              <th>Количество</th>
              <th>Всего</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((item, index) => {
              return (
                <tr key={index} className={styles.basket_td}>
                  <td>
                    <a
                      onClick={() => {
                        handleRemoveModel(item);
                      }}
                      className={styles.removeModels}
                    ></a>
                    <img src={item.img} alt='Marka' />{' '}
                    <div>
                      <h4>{item.modelName}</h4>
                    </div>
                  </td>
                  <td className={styles.itemsPrice}>${item.price}</td>
                  <td className={styles.itemsSize}>{item.size.size}</td>
                  <td className={styles.itemsAmout}>
                    <form onSubmit={handleSubmit(onSubmitAmount)}>
                      <a
                        onClick={() => {
                          handleAmountPlus(item);
                        }}
                      >
                        ˄
                      </a>
                      <a
                        onClick={() => {
                          handleAmountMinus(item);
                        }}
                      >
                        ˅
                      </a>
                      <input
                        type='number'
                        {...register(item.uniqueId!)}
                        value={item.amount}
                      />
                    </form>
                  </td>
                  <td className={styles.itemsPrice}>
                    ${item.price * item.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className={styles.coupons}>
          <form
            className={styles.formInputs}
            onSubmit={handleSubmit(onSubmitCoupons)}
          >
            <input
              {...register('Cupon', {
                // maxLength: {
                //   value: 5,
                //   message: 'Должно быть минимум 5 символов.',
                // },
              })}
              type='text'
              placeholder='Введите купон'
            />
            <input type='button' value={'Применить купон'} />
          </form>

          {/* <button>Обновить корзину</button> */}
        </div>
      </div>
      <div className={styles.basketTotal}>
        <div className={styles.basketTotalAbsolute}>
          <div className={styles.orderAndTotal}>
            <div>
              <h5>Итого:</h5>
              <h5>${total}</h5>
            </div>
            <input type='button' value={'Оформить заказ'} />
          </div>
        </div>
      </div>
    </div>
  );
}