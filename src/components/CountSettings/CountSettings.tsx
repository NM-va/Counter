import React from 'react';
import styles from './CountSettings.module.css';
import "../../App.css";
import {Button} from "../Button/Button";
import {ValuesSettings} from "../ValuesSettings/ValuesSettings";


// export type PropsType = {
//     count: number
//     maxCount: boolean
// }

export const CountSettings = () => {
    const setValues = () => {

    };

    return (
        <div className="countContainer">
            <ValuesSettings/>
            <div className="controls">
                <Button callback={setValues} value={"Set"} isDisabled={false} />
            </div>
        </div>
    )
};