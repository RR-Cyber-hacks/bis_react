import styles from "./Eventt.module.css"

// export const ButtonChek = () => {
//     const handleButtonClick = (usr) => {

//         alert(`Button Clicked by user ${usr}`);

//     };

//     const handleHover = () => {
//         alert("Hovered on button");

//     };

//     const handleGreeting = () => {
//         alert("Greeting!");
//     }

//     return (
//         <>
//             {/* <button className={styles.btn_class} onClick={handleButtonClick}>Click Me</button> */}
//             {/* <button className={styles.btn_click} onClick={() => handleButtonClick("A")}>Click Me</button>
//             <button className={styles.btn_hov} onMouseEnter={() => handleHover()}>Hover</button>
//             <button className={styles.btn_greet} onClick={() => handleGreeting()}>Greetins</button> */}
//         </>
//     );
// };


export const ButtonChek = () => {
    const handleWelcomeUser = (user) => {
        alert(`Welcome User ${user}`);
    };

    const handleHover = () => {
        alert("Hovered on button");
    };

    return (
        <>
            <WelcomeUser
                onClick={() => handleWelcomeUser("A")}
                onMouseEnter={() => handleHover()}
            />
        </>
    );
};




const WelcomeUser = (props) => {
    const { onClick, onMouseEnter } = props;
    const handleGreeting = () =>{
        alert("Greeting!");
        onClick();
    };
    
    return (
        <>
            <button className={styles.btn_click} onClick={() => onClick()}>Click Me</button>
            <button className={styles.btn_hov} onMouseEnter={() => onMouseEnter()}>Hover</button>
            <button className={styles.btn_greet} onClick={() => handleGreeting()}>Greetins</button>
        </>
    );
}