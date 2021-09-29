import React, {useEffect, useState} from "react";
import "../../App.css";
import {Scoreboard} from "../Scoreboard/Scoreboard";
import {Button} from "../Button/Button";

export type PropsType = {
    message: string
    error: boolean
    startValue: number
    maxValue: number
}

export const CountContent = (props: PropsType) => {
    let startValue = props.startValue;
    console.log('startValue', startValue)
    const maxValue = props.maxValue;

    const [count, setCount] = useState<number>(startValue);
    
    useEffect(() => {
        setCount(startValue)
    }, [startValue])

    console.log('count', count)

    const incrementCount = () => {
        count < maxValue && setCount(count + 1);// чтобы не дергать при каждой итерации setCount
        // setCount(count++); //не работает ++count нарушение имьютабельности
        setCount(count + 1);//так правильно, либо создание промежуточной переменной
        console.log('count inc', count)
    };
    
    const resetCount = () => {
        setCount(startValue);
    };
    
    
    return (
        <div className="countContainer">
            <Scoreboard count={count}
                        maxCountFlag={count === maxValue && count !== 0}
                        message={props.message}
                        error={props.error}
            />
            <div className="controls">
                <Button callback={incrementCount} value={"Inc"} isDisabled={count === maxValue}/>
                <Button callback={resetCount} value={"Reset"} isDisabled={count === startValue}/>
            </div>
        </div>
    )
}