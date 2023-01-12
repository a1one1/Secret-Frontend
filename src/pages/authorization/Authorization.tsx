import React from 'react';
import styles from './Authorization.module.css';

export default function Authorization(): JSX.Element {
  return (
    <section>
      <div className={styles.authorization}>
        <div className={styles.inputAuth}>
          <h3>Логин:</h3>
          <input type='text' />
          <input type='text' />
        </div>
        <div>
          <h3>
            Если у вас нет аккаунта <a href='#'>Создайте аккаунт</a>
          </h3>
        </div>
      </div>
    </section>
  );
}
