import { useEffect, useState } from "react";
import styles from "./Todo.module.css";


export const TodoDate = () => {
    
    const [DateTime, setDateTime] = useState("");

    useEffect(() => {

        const interval = setInterval(() => {
            const now = new Date();
            const formateDate = now.toLocaleDateString();
            const formateTime = now.toLocaleTimeString();

            setDateTime(formateDate + " - " + formateTime);

        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            <h2 className={styles["date-time"]}>{DateTime}</h2>
        </>
    );
}