import React from 'react';
import styles from './Team.module.css';

export default function Team(): JSX.Element {
  return (
    <section>
      <h2>Команда мечты Secret</h2>
      <div className={styles.teamDiv}></div>
    </section>
  );
}
