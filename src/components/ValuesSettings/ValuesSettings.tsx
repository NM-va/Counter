import React, {ChangeEvent, useState} from 'react';
import "../../App.css";
import styles from './ValuesSettings.module.css';

export type PropsType = {
    getValues: (values: any) => void
}

type ValuesCountTypes = {
    // startValue: number
    // maxValue: number
    getValues: (values: any) => void
}

export const ValuesSettings = (props: PropsType) => {
    const [countValues, setCountValue] = useState<ValuesCountTypes>({startValue: 0, maxValue: 0});

    const onChangeStartValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.getValues({startValue: e.currentTarget.value});
    };

    const onChangeMaxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.getValues({maxValue: e.currentTarget.value});
    };

    return (
        <div className="controls">
            <div className={styles.settingsItem}>
                <label className={styles.titleValue} htmlFor="maxValue">minValue:</label>
                <input className={styles.inputValue}
                       onChange={onChangeMaxValueHandler}
                       value={countValues.maxValue}
                       type="number" id="maxValue"/>
            </div>
            <div className={styles.settingsItem}>
                <label className={styles.titleValue} htmlFor="startValue">startValue:</label>
                <input className={styles.inputValue}
                       onChange={onChangeStartValueHandler}
                       value={countValues.startValue}
                       type="number" id="startValue"/>
            </div>
        </div>
    )
}