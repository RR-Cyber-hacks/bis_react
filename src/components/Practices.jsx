
// export const Practices = () =>{
//     const students = [];
//     return (
//         <React.Fragment>
//             <p>{students.length && "No student found"}</p>
//             <p>Student Length: {students.length}</p>
//         </React.Fragment>
//     );
// }

import React from "react";


const Header = () => {
    return (
        <header>
            <h1>Student Management System</h1>
        </header>
    );
}


export default Header;


export const NetFlix = () => {
    return (
        <React.Fragment>
            <h2>Netflix</h2>
            <ul>
                <li>The Office</li>
                <li>Friends</li>
                <li>Breaking Bad</li>
            </ul>
        </React.Fragment>
    );
}

export const Footer = () =>{
    return (
        <footer>
            <p>�� 2021 Student Management System</p>
        </footer>
    );
}