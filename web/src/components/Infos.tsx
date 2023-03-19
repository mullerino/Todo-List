import styles from './Infos.module.css'

interface InfosProps {
  createdTasks: number;
  doneTasks: number;
}

export function Infos({ createdTasks, doneTasks }:InfosProps) {
  return (
    <div className={styles.infos}>
        <div className={styles.createdTasks}>
          Created tasks
          <div className={styles.counter}>{createdTasks}</div>
        </div>

        <div className={styles.doneTasks}>
          Done
          <div className={styles.counter}>{doneTasks} out of {createdTasks}</div>
        </div>
    </div>
  );
}