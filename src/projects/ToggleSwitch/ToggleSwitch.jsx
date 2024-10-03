import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
    const [IsOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!IsOn);
    }

    return (
        <>
            <div className={`toggle-switch ${IsOn ? "toggle-switch-on" : "toggle-switch-off"}`} onClick={() => handleToggleSwitch()}>
                <div className={`switch ${IsOn ? "on" : "off"}`}>
                    <span className="switch-state">{IsOn ? "ON" : "OFF"}</span>
                </div>
            </div>
        </>
    );
}