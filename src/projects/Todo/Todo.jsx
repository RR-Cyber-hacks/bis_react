import { useState } from "react";
import styles from "./Todo.module.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import {TodoDate} from "./TodoDate";

export const Todo = () => {
    
    const [Task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {

        if (!inputValue) {
            alert("Please enter");
            return;
        }

        if (Task.includes(inputValue)) {
            alert("Task already exists");
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);

    };


    const handleDeleteTodo = (value) => {
        console.log(value);
        const updatedTask = Task.filter((curTask) => curTask != value)
        setTask(updatedTask);
    };

    const handleClearAll = () => {
        setTask([]);
    }

    return (
        <>
            <section className={styles["todo-container"]}>
                <header>
                    <h1 className={styles["heading"]}>Todo List</h1>

                    <TodoDate />

                </header>
                <TodoForm addTodo={handleFormSubmit} />
                <section className={styles["myUnOrdList"]}>
                    <ul>
                        {
                            Task.map((curTask, index) => {
                                return (
                                    <TodoList key={index} data={curTask} onDelete={handleDeleteTodo} />
                                );
                            }
                            )
                        }
                    </ul>
                </section>
                <section>
                    <button onClick={() => handleClearAll()} className={styles["clr-btn"]}>Clear All</button>
                </section>
            </section>
        </>
    );
}


// onClick={()=> setTask(task.filter((task, index) => index!==index))}

// Email : kqt86418@nowni.com
// Pass : Aa2233445
