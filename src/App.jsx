import React from "react";
// import Headerr, {NetFlix, Footer} from "./components/Practices";
import { Loop } from "./components/Loop";
// import Profile from "./components/ProfilePractice";
import {ButtonChek} from "./components/EventHandling";
// import"./components/Eventt.module.css";
import {EventPropagation} from "./components/EventPropagation";
import { State } from "./components/hooks/State";
import {DerivedState} from "./components/hooks/StateChallange";
import {LiftingState} from "./components/LiftStateUp";
import {ToggleSwitch} from"../src/projects/ToggleSwitch/ToggleSwitch";
import {Todo} from"../src/projects/Todo/Todo";

export const App = () =>{
  return (
    <React.Fragment>
      <Todo />
      {/* <ToggleSwitch/> */}
      {/* <LiftingState /> */}
      {/* <DerivedState /> */}
      {/* <State /> */}
      {/* <EventPropagation /> */}
      {/* <ButtonChek /> */}
      {/* <Loop /> */}
      {/* <Profile /> */}
    </React.Fragment>
  );
}

// export const App = () => {
//   return (
//     <React.Fragment>
//       <CardSeries
//         name="Iron Man1"
//         rating="9.0"
//         brief="lorem lorem"
//       />
//       <CardSeries
//         name="Iron Man2"
//         rating="8.0"
//         brief="lorem lorem"
//       />
//     </React.Fragment>
//   );
// };

// const watch = () =>{
//   const age = 18;
//   if(age < 18){
//     return "Not Allowed";
//   }
//   else{
//     return "Watch Now";
//   }
// }

// const CardSeries = ({name, rating, brief}) => {
//   // const age = 18;
  
//   // 2nd Method
//   // const watch = "No";
//   // if (age>18) watch = "Watch Now";
//   return (
//     <React.Fragment>
//       <div>
//         <img src="1.jpg" alt="1.jpg" width="40%" height="40%" />
//       </div>
//       <h2>Name: {name}</h2>
//       <h1>Rating: {rating}</h1>
//       <h3>Brief: {brief}</h3>
//       {/* 1st Method */}
//       {/* <button>{age<18? "Not Available":"Available"}</button> */}
//       <button>{watch()}</button>
//     </React.Fragment>

//   );
// }