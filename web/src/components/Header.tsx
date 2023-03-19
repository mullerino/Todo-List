import styles from './Header.module.css'

import rocket from '../assets/rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.rocket} src={rocket} alt="rocket logo" />
      <h1 className={styles.toDo}>to
        <span className={styles.do}>do</span>
      </h1>
    </header>
  );
}