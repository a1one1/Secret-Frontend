import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from './Contacts.module.css';

export default function Contacts(): JSX.Element {
  const [resContacts, setResContacts] = useState<JSX.Element>();
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
  });

  async function handleOrder(data: any) {
    const res = await axios.post('http://localhost:3000/contacts', data);

    if (res.status === 200) {
      setResContacts(
        <div className={styles.contactsResponse}>
          <div>Сообщение успешно отправлено</div>
        </div>
      );
    } else {
      setResContacts(
        <div className={styles.contactsResponse}>
          <div>{res.data}</div>
        </div>
      );
    }
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
    <main className={styles.contacts}>
      <div>
        <h3 className={styles.contactsH3}>Контакты</h3>
        <div className={styles.contactsRoutes}>
          <Link to={'/'}>Главная</Link>
          <div className={styles.line}>—</div>
          <div className={styles.contactsItem}>Контакты</div>
        </div>
      </div>
      <div className={styles.contactsMap}></div>
      <div className={styles.contactsInfo}>
        <div>
          <p>Телефон</p>
          <p>+7 (495) 823-54-12</p>
        </div>
        <div>
          <p>E-mail</p>
          <p>info@sitename.com</p>
        </div>
        <div>
          <p>Адрес</p>
          <p>г. Москва, 3-я улица Строителей, 25</p>
        </div>
      </div>

      <div className={styles.contactsInputs}>
        <h5>Напишите нам</h5>
        <form
          className={styles.formInputs}
          onSubmit={handleSubmit(handleOrder)}
        >
          <input
            onClick={() => {
              setResContacts(undefined);
            }}
            {...register('name', {
              required: 'Поле обязательно к заполнению',
            })}
            type='text'
            placeholder='Имя'
          />
          <div>
            <p>{errors.name?.message?.toString()}</p>
          </div>
          <input
            onClick={() => {
              setResContacts(undefined);
            }}
            {...register('e_mail', {
              required: 'Поле обязательно к заполнению',

              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                message: 'Введите корректный почту',
              },
            })}
            type='text'
            placeholder='E-mail'
          />
          <div>
            <p>{errors.e_mail?.message?.toString()}</p>
          </div>

          <input
            onClick={() => {
              setResContacts(undefined);
            }}
            {...register('phone', {
              required: 'Поле обязательно к заполнению',
              pattern: {
                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                message: 'Введите корректный номер',
              },
            })}
            type='text'
            placeholder='Телефон'
          />
          <div>
            <p>{errors.phone?.message?.toString()}</p>
          </div>

          <textarea
            onClick={() => {
              setResContacts(undefined);
            }}
            id='my-text'
            rows={1}
            className={styles.textrea}
            placeholder='Сообщение'
            {...register('message')}
          />

          <input type='submit' value={'Отправить'} />
        </form>
      </div>
      <div className={styles.resContactsWrapper}>{resContacts}</div>
    </main>
  );
}
