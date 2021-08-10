import styles from './Scoreboard.module.css';

export type PropsType = {
    count: number
    maxCount: boolean
}

export const Scoreboard = (props: PropsType) => {
    return (
        <div className={styles.scoreboard}>
            <div className={`${styles.count} ${props.maxCount? styles.maxCount : ''}`}>{props.count}</div>
        </div>
    )
}