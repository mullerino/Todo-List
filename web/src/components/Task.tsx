import { Trash } from 'phosphor-react';

import styles from './Task.module.css'

import { useState } from 'react';

interface TaskProps {
  id: number;
  taskTitle: string;
  isComplete: boolean;
  onDeleteTask: (arg: number) => object | void;
  onChangeTaskSituation: (arg: number) => object | void;
}

// Prop "id" is useful to make input and label unique
export function Task({ 
  id, 
  taskTitle, 
  isComplete, 
  onDeleteTask, 
  onChangeTaskSituation 
}: TaskProps) {
  const [isDone, setIsDone] = useState<boolean>(isComplete)
  
  function handleChangeTaskSituation() {
    onChangeTaskSituation(id)

    setIsDone(!isDone)
  }

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <div className={styles.taskToDo}>
      <div>
        <input 
          id={""+id+""} 
          type="checkbox" 
          title='Complete task' 
          checked={isDone}
          onChange={handleChangeTaskSituation}
        />

        <label className={styles.taskTitle} htmlFor={""+id+""}>
          {taskTitle}
        </label>  
      </div>

      <button onClick={handleDeleteTask} title='Delete task'>
        <Trash size={18}/>
      </button>
    </div>
  );
}