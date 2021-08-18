import React, {useState} from 'react';
import styles from './CountSettings.module.css';
import "../../App.css";
import {Button} from "../Button/Button";
import {ValuesSettings} from "../ValuesSettings/ValuesSettings";


export type PropsType = {
    applySettingsCallback: () => void
    getValuesCallback: (values: any) => void
}

export const CountSettings = (props: PropsType) => {


    return (
        <div className="countContainer">
            <ValuesSettings getValues={props.getValuesCallback} />
            <div className="controls">
                <Button callback={() => props.applySettingsCallback} value={"Set"} isDisabled={false} />
            </div>
        </div>
    )
};