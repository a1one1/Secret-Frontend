import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { IModel } from '../../redux/store/types/IModel';
import styles from './Basket.module.css';
import useActions from '../../redux/hooks/useActionUser';
import './Basket.scss';

export default function Basket() {
  const { id, login, basket } = useTypedSelector(state => state.user);
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
    const order = {
      userId: id,
      userName: login,
      basket: basket,
      orderPrice: totalDiscount ? totalDiscount : total,
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
                    <div className={styles.removeModels}>
                      {' '}
                      <a
                        onClick={() => {
                          handleRemoveModel(item);
                        }}
                      ></a>
                    </div>
                    <div>
                      <img src={item.img} alt='Marka' />
                    </div>{' '}
                    <div className={styles.td_h4}>
                      <h4>{item.modelName}</h4>
                    </div>
                  </td>
                  <td className={styles.itemsPrice}>{item.price} ₽</td>
                  <td className={styles.itemsSize}>{item.size.size}</td>
                  <td className={styles.itemsAmout}>
                    <form>
                      <a
                        onClick={() => {
                          handleAmountMinus(item);
                        }}
                        className='arrow left'
                      ></a>
                      <a
                        onClick={() => {
                          handleAmountPlus(item);
                        }}
                        className='arrow right'
                      ></a>

                      <input
                        type='number'
                        value={item.amount}
                        disabled={true}
                      />
                    </form>
                    <div>В складе: {item.size.rest}</div>
                  </td>
                  <td className={styles.itemsPrice}>
                    {item.price * item.amount} ₽
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
          <div className={styles.couponSuccessAndError}>{discountSuccess}</div>
        </div>
      </div>
      <div className={styles.basketTotal}>
        <div className={styles.basketTotalAbsolute}>
          <div>Подытог: {total} ₽</div>
          <div className={styles.couponDiscount}>
            {totalDiscount
              ? `Купон на ${couponDiscount}%  ( ${Math.round(
                  Number('0.' + couponDiscount) * total
                )}$ )`
              : ''}
          </div>
          <div style={{ width: '100%' }} className={styles.orderAndTotal}>
            <div>
              <h5>Итого:</h5>
              {totalDiscount ? (
                <h5 className={styles.total}>
                  {total - Math.round(Number('0.' + couponDiscount) * total)} ₽
                </h5>
              ) : (
                <h5 className={styles.total}>${total}</h5>
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
  );
}
