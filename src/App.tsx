import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import s from './App.module.css';
import {v1} from "uuid";
import {Todolist} from "./components/Todolist/Todolist";


export type FilterType = 'all' | 'active' | 'completed'
export type TasksType = {
    id: string
    name: string
    isDone: boolean
}

function App() {

    let[tasks, setTasks] = useState<TasksType[]>([
        {id: v1(), name: 'to sleep', isDone: true},
        {id: v1(), name: 'to eat', isDone: false},
        {id: v1(), name: 'studying', isDone: true},
        {id: v1(), name: 'work out', isDone: false},
    ])
    let[value, setValue] = useState<string>('')
    let[filter, setFilter] =useState('all')
    let[error, setError] = useState(false)


    const addTaskHandler = () => {
        if(value.trim() === '') {
            setError(true)
        } else {
            let newTask = {id: v1(), name: value.trim(), isDone: false}
            setTasks([...tasks, newTask])
        }
        setValue('')
    }


    const addTaskChangeHandler = (text:string) => {
            setError(false)
            setValue(text)
    }

    const onChangeStatusHandler = (taskId:string, isDone:boolean) => {
        setTasks(tasks.map(el => el.id === taskId ? {...el, isDone:isDone} : el))
    }

    let filteredTasks = tasks
    const onFilterHandler = (myFilter:string) => {
        setFilter(myFilter)
    }
    switch (filter) {
        case 'active':
            filteredTasks = tasks.filter(el => el.isDone === false)
            console.log(filteredTasks)
            break
        case 'completed':
            filteredTasks = tasks.filter(el => el.isDone === true )
            console.log(filteredTasks)
            break
    }


  return (
    <div className={s.App}>
        <Todolist
            error={error}
            value={value}
            tasks={tasks}
            setTasks={setTasks}
            filteredTasks={filteredTasks}
            addTaskChangeHandler={addTaskChangeHandler}
            addTaskHandler={addTaskHandler}
            onFilterHandler={onFilterHandler}
            onChangeStatusHandler={onChangeStatusHandler}/>
        <Todolist
            error={error}
            value={value}
            tasks={tasks}
            setTasks={setTasks}
            filteredTasks={filteredTasks}
            addTaskChangeHandler={addTaskChangeHandler}
            addTaskHandler={addTaskHandler}
            onFilterHandler={onFilterHandler}
            onChangeStatusHandler={onChangeStatusHandler}/>
    </div>
  );
}

export default App;
