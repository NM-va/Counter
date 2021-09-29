import styles from "./Button.module.css";

export type PropsType = {
    isDisabled: boolean
    value: string
    callback: () => void
}
export const Button = (props:PropsType) => {
    return (
        <button className={styles.btn} disabled={props.isDisabled } onClick={() => {
            props.callback()
        }} >{props.value}</button>
    )
}