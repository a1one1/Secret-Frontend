import Collections from './Collections/Collections';
import styles from './Home.module.css';
import Receipts from './Receipts/Receipts';

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <Receipts />
      <Collections />
    </main>
  );
}
