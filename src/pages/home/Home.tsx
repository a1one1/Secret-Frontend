import Collections from './Collections/Collections';
import styles from './Home.module.css';
import Receipts from './Receipts/Receipts';
import Important from './Important/Important';
import Team from './TeamSecret/Team';
import { useRef } from 'react';

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <Receipts />
      <Collections />
      <Important />
      <Team />
    </main>
  );
}
