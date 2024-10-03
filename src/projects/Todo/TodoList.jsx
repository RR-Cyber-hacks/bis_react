import { MdCheck, MdDeleteForever} from "react-icons/md";
import styles from "./Todo.module.css"
export const TodoList = ({data, onDelete}) => {
    
    const handlePrint = () =>{
        console.log("Run");
     }

     const handleDeleteTodo = ()=>{
        onDelete(data);
     }
    return(

    <li className={styles["todo-item"]}>
        {/* <span>{index+1}.</span> */}
        <span>{data}</span>
        {/* <button className={styles["check-btn"]}><MdCheck onClick={handlePrint} className={styles["icon-size"]}/></button>
     */}
        <MdCheck onClick={() => handlePrint()} className={styles["icon-size-check"]} />
        {/* <button  className={styles["delete-btn"]}><MdDeleteForever /></button> */}
        <MdDeleteForever onClick={() => handleDeleteTodo()} className={styles["icon-size-delete"]} />
    </li>
    );
}