import React, {ChangeEvent, ReactNode, useState} from 'react'
import {TasksType} from "../../App";
import s from './Todolist.module.css'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {Checkbox} from "../Checkbox/Checkbox";

type TodoListType = {
    error: boolean
    value: string
    tasks: TasksType[]
    setTasks: (newTasks:TasksType[]) => void
    filteredTasks: TasksType[]
    addTaskChangeHandler: (text:string) => void
    addTaskHandler: () => void
    onFilterHandler: (myFilter:string) => void
    onChangeStatusHandler: (taskId:string, isDone:boolean) => void
}

export const Todolist:React.FC<TodoListType> = ({
                                                    error,
                                                    value,
                                                    tasks,
                                                    setTasks,
                                                    filteredTasks,
                                                    addTaskChangeHandler,
                                                    addTaskHandler,
                                                    onFilterHandler,
                                                    onChangeStatusHandler
}) => {

    let mappedTasks = filteredTasks.map(el => {

        const removeChangeHandler = (elId: string) => {
            let newTasks = tasks.filter(el => el.id !== elId)
            setTasks(newTasks)
        }
        return (
            <li key={el.id}>
                <Checkbox
                    onChangeStatusHandler={(isDone:boolean)=>onChangeStatusHandler(el.id, isDone)}
                    checked={el.isDone}/>
                <span>{el.name}</span>
                <Button
                    callBack={()=>removeChangeHandler(el.id)}
                    buttonName={'X'}/>
            </li>
        )
    })

    return (
        <div className={s.todo}>
            <div>
                <Input value={value} callBack={addTaskChangeHandler}/>
                <Button callBack={addTaskHandler} buttonName={'add a new task'}/>
            </div>
            <div>
                {error && <span>Введите имя</span>}
            </div>
            <div>
                <ul>
                    {mappedTasks}
                </ul>
            </div>
            <div>
                <Button callBack={() => onFilterHandler('all')} buttonName={'all'}/>
                <Button callBack={() => onFilterHandler('active')} buttonName={'Active'}/>
                <Button callBack={() => onFilterHandler('completed')} buttonName={'Completed'}/>
            </div>
        </div>
    )
}