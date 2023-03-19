import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Infos } from './components/Infos';
import { NoTask } from './components/NoTask';
import { Task } from './components/Task';

import './global.css';
import styles from './App.module.css'

import axios from 'axios'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

interface ITaskStructure {
  id: number;
  title: string;
  isComplete: boolean;
}

const initialTasks: ITaskStructure[] = []

export function App() {

  const [tasks, setTasks] = useState<ITaskStructure[]>(initialTasks)
  
  useEffect(()=>{
    axios.get('http://localhost:3000/api/task/')
    .then((response) =>{
      setTasks(response.data)
    })
    .catch((error)=>{
      console.error(error)
    })
  }, [])


  const [newTaskTitle, setNewTaskTitle] = useState<string>('')

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskTitle(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    // The reduce method will search for the biggest task id
    const biggestId = tasks.reduce((acc, task) => {
      return task.id > acc ? task.id : acc
    }, 0)
    
    const newTaskId = biggestId + 1;

    const newTask = {
      id: newTaskId,
      title: newTaskTitle,
      isComplete: false,
    }

    axios.post("http://localhost:3000/api/task/", newTask)
    .catch((error)=>{
      console.error(error)
    })

    setTasks([...tasks, newTask])
    setNewTaskTitle('');
  }

  function deleteTask(taskToDeleteId: number) {
    axios.delete(`http://localhost:3000/api/task/delete/${taskToDeleteId}`)

    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDeleteId
    })

    setTasks(tasksWithoutDeletedOne);
  }

  function changeTaskSituation(taskToChangeSituationId: number) {

    const tasksWithNewSituations = tasks.map(task => {
      if(task.id === taskToChangeSituationId) {
        task.isComplete = !task.isComplete

        axios.put(`http://localhost:3000/api/task/update/${taskToChangeSituationId}`, {
          isComplete: task.isComplete
        })
      }
      return task
    })

    console.log(tasksWithNewSituations)

 

    setTasks(tasksWithNewSituations);
  }

  const createdTasks = tasks.length

  const doneTasks = tasks.reduce((acc, task) => {
    return task.isComplete === true ? acc + 1 : acc
  }, 0)

  const hasTask = tasks.length !== 0;

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewTask 
          handleNewTaskChange={handleNewTaskChange}
          newTaskTitle={newTaskTitle}
          handleCreateNewTask={handleCreateNewTask}
        />
        <section>
          <Infos 
            createdTasks={createdTasks}
            doneTasks={doneTasks}
          />     
          {hasTask ? 
            tasks.map(task => {
              return (
                <Task 
                  key={task.id}
                  id={task.id}
                  taskTitle={task.title}
                  isComplete={task.isComplete}
                  onDeleteTask={deleteTask}
                  onChangeTaskSituation={changeTaskSituation}
                />
              ) 
            }) 
          : <NoTask />}
        </section>
      </main>
    </div>
  );
}
