import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Counter";
import {Button} from "./Button";

function App() {
    let [number, setNumber] = useState(0)
    const addNumber = () => {
        setNumber(number + 1)
    }
    const resetNumber = () => {
        setNumber(0)
    }
    let buttonStatus = false
    if (number >= 5) {
        buttonStatus = true
    }
    return (
        <div className={s.App}>
            <div className={buttonStatus ? s.fieldStop : s.field}>
                <Counter
                    number={number}
                    className={buttonStatus ? s.counterField : s.buttonField}
                />
                <div>
                    <Button
                        name={"+1"}
                        callBack={addNumber}
                        buttonStatus={buttonStatus}
                        className={s.buttonField}
                    />
                    <Button
                        name={"reset"}
                        callBack={resetNumber}
                        className={s.buttonField}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
