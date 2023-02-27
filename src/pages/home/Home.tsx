import Collections from './collections/Collections';
import styles from './Home.module.css';
import Receipts from './receipts/Receipts';
import Important from './important/Important';
import Team from './teamSecret/Team';

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
