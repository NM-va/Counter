import React from 'react';
import "../../App.css";
import styles from './ValuesSettings.module.css';

// export type PropsType = {
//     count: number
//     maxCount: boolean
// }

export const ValuesSettings = () => {

    return (
        <div className="controls">
            <div className={styles.settingsItem}>
                <label className={styles.titleValue} htmlFor="maxValue">minValue:</label>
                <input className={styles.inputValue} type="number" id="maxValue"/>
            </div>
            <div className={styles.settingsItem}>
                <label className={styles.titleValue} htmlFor="startValue">startValue:</label>
                <input className={styles.inputValue} type="number" id="startValue"/>
            </div>
        </div>
    )
}