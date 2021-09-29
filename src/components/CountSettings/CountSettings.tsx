import React from "react";
import "../../App.css";
import {Button} from "../Button/Button";
import {ValuesSettings} from "../ValuesSettings/ValuesSettings";



export type PropsType = {
    errorMaxValue: boolean
    errorStartValue: boolean
    toggleDisabled: boolean
    callbackChangeStartValue: (newStartVal: number) => void
    callbackChangeMaxValue: (newMaxVal: number) => void
    changeMessageCallback: (newMessage: string) => void
    applySettingsCallback: (startValue: number, maxValue: number) => void
    stateStartValue: number
    stateMaxValue: number
}

export const CountSettings = (props: PropsType) => {
    let toggleDisabled = props.toggleDisabled;
    
    const setValuesFunc = () => {
        props.applySettingsCallback(props.stateStartValue, props.stateMaxValue);
        toggleDisabled = true;
    }

    return (
        <div className="countContainer">
            <ValuesSettings
                            changeStartValue={props.callbackChangeStartValue}
                            changeMaxValue={props.callbackChangeMaxValue}
                            errorMaxValue={props.errorMaxValue}
                            errorStartValue={props.errorStartValue}
                            startValue={props.stateStartValue}
                            maxValue={props.stateMaxValue}
                            changeMessage={props.changeMessageCallback}
            />
            <div className="controls">
                <Button callback={setValuesFunc}
                        value={"Set"} isDisabled={toggleDisabled}/>
            </div>
        </div>
    )
};