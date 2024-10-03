// import { useState } from "react";

import { useState } from "react";

// export const State = () =>{
//     // let value = 0
//     const [Count, setCount] = useState(0);
    
//     const handleClick = () => {
//         // setCount(Count + 1);
//         setCount(() => Count + 1); // This is a more efficient way to update state in React. It avoids unnecessary renders.
//     }

//     return(
//         <>
//         <section>
//             <h1>{Count}</h1>
//             <button onClick={() => handleClick()}>Click</button>
//         </section>
//         </>
//     );
// }


// // 353182112223705

export const State = () =>{

    const [Count, setCount] = useState(0);

    const handleClick = () =>{
        // setCount(Count + 1);
        setCount(()=> Count + 1);
    }

    return(
        <>
        <section>
            <h1>{Count}</h1>
            <button onClick={() => handleClick()}>Click</button>
        </section>
        </>
    );
}