import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css'
import { ChangeEvent, FormEvent } from 'react';

// Is this interface right?
interface NewTaskProps {
  handleCreateNewTask: (event: FormEvent) => object | void;
  newTaskTitle: string;
  handleNewTaskChange: (event: ChangeEvent<HTMLTextAreaElement>) => object | void;
}

export function NewTask({ handleCreateNewTask, newTaskTitle, handleNewTaskChange }: NewTaskProps) {
  const isNewTaskEmpty = newTaskTitle.length === 0;

  return (
    <section>
      <form onSubmit={handleCreateNewTask} className={styles.newTask}>
        {/* Maybe add auto height adjust later */}
        <textarea 
          placeholder='Add a new task'
          value={newTaskTitle}
          onChange={handleNewTaskChange}
          required
        />

        <button type="submit" disabled={isNewTaskEmpty}>
          Add
          <PlusCircle size={30} weight='fill' />
        </button>      
      </form>
    </section>
  );
}