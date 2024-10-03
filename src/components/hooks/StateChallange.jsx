import { useState } from "react";

const Users = [
    {name: 'A', age: 25},
    {name: 'B', age: 30},
    {name: 'C', age: 35},
    {name: 'D', age: 45},
]

export const DerivedState = () =>{
    // Now I want to show the data of Users array with state
    const [users, setUsers] = useState(Users);
    
    const count = users.length;

    const userAverage = 
    users.reduce((acc, user) => acc + user.age, 0) / count;
    // users[users.length
    //     > 0? Users.reduce((total, user) => total + user.age, 0) / users.length : 0
    // ].toFixed(2);
    
    // const handleLi = users.map((user, index) => (
    //     <li key={index}>Name: {user.name}, Age: {user.age}</li>
    // ));


    return(
        <>
        <div className="">
            <h1>Users List</h1>
            
            
            <ul>
                {users.map((user, index) => (
                    <li key={index}>Name: {user.name}, Age: {user.age}</li>
                ))}
                <li>User Count: {count}</li>
                <li>User Average: {userAverage}</li>
            </ul>
        </div>
        </>
    );
}