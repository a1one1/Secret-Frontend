import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { json, Link } from 'react-router-dom';
import { IModel } from '../../redux/store/types/IModel';
import styles from './Order.module.css';

interface IOrder {
  basket: IModel[];
  userId: string;
  userName: string;
  totalAmount: number;
  orderPrice: Number;
  coupon: Number;
  order: {
    Name: string;
    E_mail?: string;
    Phone: number;
    Country: string;
    City: string;
    Street: string;
    House: string;
    cash: Boolean;
    card: Boolean;
    flat: string;
    Comment?: string;
  };
}

export default function OrderUser() {
  const [UserOrder, setUserOrder] = useState<IOrder>();
  const [total, setTotal] = useState<any>();
  const [errrorOrder, setErrrorOrder] = useState<any>();

  useEffect(() => {
    const localStorageOrder = localStorage.getItem('order');

    if (localStorageOrder) {
      setUserOrder(JSON.parse(localStorageOrder));
    }
  }, []);

  useEffect(() => {
    const total = UserOrder?.basket.reduce((acc, model) => {
      return model.price * model.amount + acc;
    }, 0);

    setTotal(total);
  }, [UserOrder]);

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  async function handleOrder(data: any) {
    const orderFetch = {
      userData: UserOrder,
      order: data,
    };

    const response = await fetch(`http://localhost:3000/order`, {
      method: 'POST',
      body: JSON.stringify(orderFetch),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const res = await response.json();
  }

  const textarea = document.getElementById('my-text');

  textarea?.addEventListener('keydown', function (this: any) {
    const el = this;
    setTimeout(function () {
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
  });

  return (
    <div className={styles.order}>
      <h3 className={styles.OrderH3}>Оформление заказа</h3>
      <div className={styles.orderRoutes}>
        <Link to={'/'}>Главная</Link>
        <div className={styles.line}>—</div>
        <div className={styles.orderItem}>Оформление заказа</div>
      </div>
      <div className={styles.orderMain}>
        <div className={styles.orderInputs}>
          <div className={styles.userdata}>
            <h5>Данные покупателя</h5>
            <form
              className={styles.formInputs}
              onSubmit={handleSubmit(handleOrder)}
            >
              <input
                {...register('Name', {
                  required: 'Поле обязательно к заполнению',
                })}
                type='text'
                placeholder='Имя'
              />
              <div>
                <p>{errors.Name?.message?.toString()}</p>
              </div>
              <input
                {...register('E_mail', {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    message: 'Введите корректный почту',
                  },
                })}
                type='text'
                placeholder='E-mail'
              />
              <div>
                <p>{errors.E_mail?.message?.toString()}</p>
              </div>

              <input
                {...register('Phone', {
                  required: 'Поле обязательно к заполнению',
                  pattern: {
                    value:
                      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                    message: 'Введите корректный номер',
                  },
                })}
                type='text'
                placeholder='Телефон'
              />
              <div>
                <p>{errors.Phone?.message?.toString()}</p>
              </div>
            </form>
          </div>
          <div className={styles.UserAdress}>
            <h5>Адрес получателя</h5>
            <form
              className={styles.formInputs}
              onSubmit={handleSubmit(handleOrder)}
            >
              <input
                {...register('Country', {
                  required: 'Поле обязательно к заполнению',
                })}
                type='text'
                placeholder='Страна'
              />
              <div>
                <p>{errors.Country?.message?.toString()}</p>
              </div>
              <input
                {...register('City', {
                  required: 'Поле обязательно к заполнению',
                })}
                type='text'
                placeholder='Город'
              />
              <div>
                <p>{errors.City?.message?.toString()}</p>
              </div>
              <input
                {...register('Street', {
                  required: 'Поле обязательно к заполнению',
                })}
                type='text'
                placeholder='Улица'
              />
              <div>
                <p>{errors.Street?.message?.toString()}</p>
              </div>
              <input
                {...register('House', {
                  required: 'Поле обязательно к заполнению',
                })}
                type='text'
                placeholder='Дом'
              />
              <div>
                <p>{errors.House?.message?.toString()}</p>
              </div>
              <input
                {...register('flat', {
                  required: 'Поле обязательно к заполнению',
                })}
                type='text'
                placeholder='Квартира'
              />
              <div>
                <p>{errors.flat?.message?.toString()}</p>
              </div>
            </form>
          </div>
          <div>
            <h5>Комментарии</h5>
            <form
              className={styles.formInputs}
              onSubmit={handleSubmit(handleOrder)}
            >
              <textarea
                id='my-text'
                rows={1}
                className={styles.textrea}
                placeholder='Ввод'
                {...register('Comment')}
              />
            </form>
          </div>
        </div>
        <div className={styles.userOrder}>
          <h5 className={styles.userOrderH5}>Ваш заказ</h5>
          <table className={styles.orderTable}>
            <thead>
              <tr>
                <th>Товары</th>
                <th>Всего </th>
              </tr>
            </thead>
            <tbody>
              {UserOrder?.basket.map(item => (
                <tr key={item._id}>
                  <td>{item.modelName}</td>
                  <td>{item.price} ₽</td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className={styles.totalAmount}>
                <td>Количество:</td>
                <td>{UserOrder?.totalAmount}</td>
              </tr>
              {UserOrder?.coupon == 0 ? null : (
                <tr className={styles.coupon}>
                  <td>Скидка по промокоду</td>
                  <td>
                    -
                    {UserOrder?.coupon
                      ? Math.round(Number('0.' + UserOrder?.coupon) * total)
                      : 0}{' '}
                    ₽
                  </td>
                </tr>
              )}
              <tr
                className={
                  UserOrder?.coupon == 0
                    ? styles.preTotalCouponFalse
                    : styles.preTotalCouponTrue
                }
              >
                <td>Подытог:</td>
                <td>{total} ₽</td>
                <td>
                  <div className={styles.totalPrice}>
                    <h6>Итого:</h6>
                    <h6>
                      {UserOrder?.orderPrice
                        ? Math.round(Number(UserOrder?.orderPrice))
                        : 0}{' '}
                      ₽
                    </h6>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>

          <div className={styles.paymentMethod}>
            <h5>Способ оплаты</h5>
            <form onSubmit={handleSubmit(handleOrder)}>
              <div>
                <label className={`${styles.checkbox} ${styles.style_c}`}>
                  <input
                    {...register('cash', {
                      required: 'Поле обязательно к заполнению',
                    })}
                    type='checkbox'
                    checked={true}
                  />
                  <div className={styles.checkbox__checkmark}></div>
                </label>

                <h6>Оплата наличными</h6>
              </div>
              <Link to='/orderSuccess'>
                <input
                  type='submit'
                  value={'Разместить заказ'}
                  disabled={!isValid}
                />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
