import { useState } from "react";

export const LiftingState = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <>
            <InputComponent inputValue = {inputValue} setInputValue = {setInputValue} />
            <DisplayComponent inputValue = {inputValue}/>
        </>
    );
}

const InputComponent = ({inputValue, setInputValue}) => {
    return (
        <>
            <input type="text" placeholder="Enter your name" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
        </>
    );
};

const DisplayComponent = ({inputValue}) => {
    return (
        <>
            <p>The current input value is: {inputValue} </p>
        </>
    );
}