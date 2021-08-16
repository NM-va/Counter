import React from 'react';
import "../../App.css";
import styles from './CountContent.module.css';
import {useState} from "react";
import {Scoreboard} from "../Scoreboard/Scoreboard";
import {Button} from "../Button/Button";

// export type PropsType = {
//     count: number
//     maxCount: boolean
// }

export const CountContent = () => {
    const startValue = 0;
    let maxValue = 5;
    let [count, setCount] = useState<number>(startValue);

    const incrementCount = () => {
        count < 5 && setCount(count + 1);// чтобы не дергать при каждой итерации setCount
        // setCount(count++); //не работает ++count нарушение имьютабельности
        setCount(count + 1);//так правильно, либо создание промежуточной переменной
    };

    const resetCount = () => {
        setCount(startValue);
    };

    return (
        <div className="countContainer">
            <Scoreboard count={count} maxCount={count === maxValue} />
            <div className="controls">
                <Button callback={incrementCount} value={"Inc"} isDisabled={count === maxValue}/>
                <Button callback={resetCount} value={"Reset"} isDisabled={count === startValue}/>
            </div>
        </div>
    )
}