import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { IModel } from '../../redux/store/types/IModel';
import styles from './Basket.module.css';
import useActions from '../../redux/hooks/useActionUser';
import './Basket.scss';
import SkeletonBasket from './SkeletonBasket';

export default function Basket() {
  const { id, login, basket } = useTypedSelector(state => state.user);
  const { loading } = useTypedSelector(state => state.model);
  const [total, setTotal] = useState<any>();
  const [totalDiscount, setTotalDiscount] = useState<any>();
  const [discountSuccess, setDiscountSuccess] = useState<any>();
  const [couponDiscount, setCouponDiscount] = useState(0);

  const { removeModel, AmountPlus, AmountMinus } = useActions();

  const {
    register,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
  });

  useEffect(() => {
    const total = basket.reduce((acc, model) => {
      return model.price * model.amount + acc;
    }, 0);

    setTotal(total);
  }, [basket]);

  const onSubmitCoupons = async (data: any) => {
    const response = await fetch('http://localhost:3000/coupon', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const json = await response.json();

    if (response.status === 200) {
      setCouponDiscount(json.discount);
      const percent = '0.' + json.discount;
      setTotalDiscount(total - Number(percent) * total);
      setDiscountSuccess(
        <div style={{ color: '#509498' }}>Купон успешно использован!</div>
      );
      setTimeout(() => {
        setDiscountSuccess(undefined);
      }, 2000);
    } else {
      setDiscountSuccess(
        <div style={{ color: 'red' }}>Не удалось найти купон!</div>
      );
    }

    reset();
  };

  function handleRemoveModel(model: IModel) {
    const total = basket.reduce((acc, model) => {
      return model.price * model.amount + acc;
    }, 0);

    setTotal(total);
    removeModel(model);
  }

  async function handleAmountPlus(params: IModel) {
    await AmountPlus(params);

    const total = basket.reduce((acc, model) => {
      return model.price * model.amount + acc;
    }, 0);

    setTotal(total);
  }

  async function handleAmountMinus(params: IModel) {
    await AmountMinus(params);

    const total = basket.reduce((acc, model) => {
      return model.price * model.amount + acc;
    }, 0);

    setTotal(total);
  }

  function handleOrder() {
    const totalAmount = basket.reduce((acc, model) => {
      return model.amount + acc;
    }, 0);

    const order = {
      userId: id,
      totalAmount,
      userName: login,
      basket,
      orderPrice: totalDiscount ? Math.round(totalDiscount) : Math.round(total),
      coupon: couponDiscount,
    };

    localStorage.setItem('order', JSON.stringify(order));
  }

  return (
    <div className={styles.basket}>
      <h3 className={styles.basketH3}>Корзина</h3>

      <div className={styles.basketRoutes}>
        <Link to={'/'}>Главная</Link>
        <div className={styles.line}>—</div>
        <div className={styles.basketItem}>Корзина</div>
      </div>
      {loading ? (
        <SkeletonBasket />
      ) : basket.length == 0 ? (
        <div className={styles.basketZero}>
          <div className={styles.basketWrapper}>
            <div className={styles.itemFirst}>
              <img
                src='https://a.lmcdn.ru/static/23.01.26_1/assets/d-cart.c259d025.svg'
                alt=''
              />
            </div>
            <div className={styles.itemSecond}>
              <h2>В корзине нет товаров</h2>
              <p>Для выбора вещей перейдите в каталог</p>
              <Link to={'/shop'}>
                <input type='button' value={'Перейти в каталог'} />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
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
                {basket.map(model => {
                  return (
                    <tr key={model.uniqueId} className={styles.basket_td}>
                      <td>
                        <div className={styles.removeModels}>
                          {' '}
                          <a
                            onClick={() => {
                              handleRemoveModel(model);
                            }}
                          ></a>
                        </div>
                        <div className={styles.baskeImg}>
                          <img src={model.modelImg} alt='Marka' />
                          <div className={styles.cardImg}>
                            {
                              <div className={styles.cardImg_div}>
                                <img src={model.img[0].toString()} />
                              </div>
                            }
                          </div>
                        </div>{' '}
                        <div className={styles.td_h4}>
                          <h4>{model.modelName}</h4>
                        </div>
                      </td>
                      <td className={styles.itemsPrice}>{model.price} ₽</td>
                      <td className={styles.itemsSize}>{model.size.size}</td>
                      <td className={styles.itemsAmout}>
                        <form>
                          <a
                            onClick={() => {
                              handleAmountMinus(model);
                            }}
                            className='arrow left'
                          ></a>
                          <a
                            onClick={() => {
                              handleAmountPlus(model);
                            }}
                            className='arrow right'
                          ></a>

                          <input
                            type='number'
                            value={model.amount}
                            disabled={true}
                          />
                        </form>
                        <div>В складе: {model.size.rest}</div>
                      </td>
                      <td className={styles.itemsPrice}>
                        {model.price * model.amount} ₽
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
                  {...register('coupon', {
                    required: 'Поле обязательно к заполнению',
                  })}
                  type='text'
                  placeholder='Введите купон'
                />
                <input
                  type='submit'
                  value={'Применить купон'}
                  disabled={!isValid}
                />
              </form>
              <div className={styles.couponSuccessAndError}>
                {discountSuccess}
              </div>
            </div>
          </div>
          <div className={styles.basketTotal}>
            <div className={styles.basketTotalAbsolute}>
              <div>Подытог: {total} ₽</div>
              <div className={styles.couponDiscount}>
                {totalDiscount ? (
                  <div>
                    Скидка по промокоду
                    <p>
                      -{Math.round(Number('0.' + couponDiscount) * total)} ₽
                    </p>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className={styles.orderAndTotal}>
                <div>
                  <h5>Итого:</h5>
                  {totalDiscount ? (
                    <h5 className={styles.total}>
                      {total -
                        Math.round(Number('0.' + couponDiscount) * total)}{' '}
                      ₽
                    </h5>
                  ) : (
                    <h5 className={styles.total}>{total} ₽</h5>
                  )}
                </div>
                <Link to={'/order'}>
                  <input
                    onClick={() => {
                      handleOrder();
                    }}
                    type='button'
                    value={'Оформить заказ'}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
