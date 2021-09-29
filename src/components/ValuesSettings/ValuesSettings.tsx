import React, {ChangeEvent} from "react";
import "../../App.css";
import styles from "./ValuesSettings.module.css";

export type PropsType = {
    changeMaxValue: (maxValue: number) => void
    changeStartValue: (startValue: number) => void
    errorMaxValue: boolean
    errorStartValue: boolean
    startValue: number
    maxValue: number
    changeMessage: (newValue: string) => void
}

export const ValuesSettings = (props: PropsType) => {
    
    const changeStartValHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(Number(e.currentTarget.value));
        
    }
    
    const changeMaxValHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(Number(e.currentTarget.value));
    }

    return (
        <div className="controls">
            <div className={styles.settingsItem}>
                <label className={styles.titleValue} htmlFor="maxValue">maxValue:</label>
                <input className={`${props.errorMaxValue ? styles.error : ''} ${styles.inputValue}`}
                       type="number"
                       id="maxValue"
                       value={props.maxValue}
                       onChange={changeMaxValHandler}
                />
            </div>
            <div className={styles.settingsItem}>
                <label className={styles.titleValue} htmlFor="startValue">startValue:</label>
                <input className={`${props.errorStartValue ? styles.error : ''} ${styles.inputValue}`}
                       type="number"
                       id="startValue"
                       value={props.startValue}
                       onChange={changeStartValHandler}
                />
            </div>
        </div>
    )
}