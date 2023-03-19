import styles from './NoTask.module.css'

import clipboard from '../assets/Clipboard.svg'

export function NoTask() {
  return (
    <div className={styles.noTask}>
      <img src={clipboard} alt="clipboard icon" />

      <p className={styles.text}>
        <strong>
          You don't have tasks registered yet
        </strong>
        Create tasks and organize your to-do items
      </p>
    </div>
  );
}