import { useState } from "react";
import styles from "./Todo.module.css"


export const TodoForm = ({ addTodo }) => {
    const [inputValue, setinputValue] = useState("");

    const handleInputChange = (value) => {
        setinputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addTodo(inputValue);
        setinputValue("");
    }

    return (
        <>

            <section className={styles["form"]}>
                <form onSubmit={(event) => handleFormSubmit(event)}>
                    <div>
                        <input type="text" className={styles["todo-input"]} autoComplete="off"
                            value={inputValue} placeholder="Add a task..."
                            required
                            onChange={(event) => handleInputChange(event.target.value)} />

                    </div>
                    <div>
                        <button type="submit" className={styles["todo-btn"]}>
                            Add Task
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}