import React from 'react';
import styles from './Scoreboard.module.css';

export type PropsType = {
    count: number
    maxCountFlag: boolean
    error: boolean
    message: string
}

export const Scoreboard = (props: PropsType) => {
    let fullClassName = `${props.message ? styles.message : styles.count} ${props.maxCountFlag? styles.maxCount : ''} ${props.error? styles.error : ''}`;
    
    return (
        <div className={styles.scoreboard}>
            <div className={fullClassName}>
                 {props.message ? props.message : props.count}
            </div>
        </div>
    )
}