import React, {useEffect, useState} from "react";
import "./App.css";
import {CountSettings} from "./components/CountSettings/CountSettings";
import {CountContent} from "./components/CountContent/CountContent";


function App() {
    const [error, setError] = useState<boolean>(false);
    const notificationMessage = "enterValues and press 'set'";
    const errorMessage = "Incorrect value";
    const [message, setMessage] = useState<string>('');

    const [stateStartValue, setValueStart] = useState<number>(0);
    const [stateMaxValue, setValueMax] = useState<number>(0);
    const [errorMaxValue, setErrorMaxValue] = useState<boolean>(false);
    const [errorStartValue, setErrorStartValue] = useState<boolean>(false);
    const [disabledFlag, setDisabledFlag] = useState<boolean>(true);
    
    useEffect(() => {
        let valuesStr = localStorage.getItem('counterValues');
        if (valuesStr) {
            let newValues = JSON.parse(valuesStr);
            setValueStart(newValues.startValue);
            setValueMax(newValues.maxValue);
        }
    }, [])
    
    
    const changeMessage = (newMessage: string) => {
        setMessage(newMessage);
    }
    
    const changeStartValue = (newStartVal: number) => {
        setValueStart(newStartVal);
        changeMessage(notificationMessage);
        setDisabledFlag(false);
        
        if ((newStartVal < 0) || (newStartVal >= stateMaxValue)){
            setErrorStartValue(true);
            setErrorMaxValue(true);
            setError(true);
            setDisabledFlag(true);
            changeMessage(errorMessage);
        } else {
            setErrorStartValue(false);
            setErrorMaxValue(false);
            setError(false);
        }
    }
    
    const changeMaxValue = (newMaxVal: number) => {
        setValueMax(newMaxVal);
        changeMessage(notificationMessage);
        setDisabledFlag(false);
        
        if ((newMaxVal < 0) || newMaxVal <= stateStartValue) {
            setErrorMaxValue(true);
            setErrorStartValue(true);
            setError(true);
            setDisabledFlag(true);
            changeMessage(errorMessage);
        } else {
            setErrorMaxValue(false);
            setErrorStartValue(false);
            setError(false);
        }
    }
    
    const applySettings = (startValue: number, maxValue: number) => {
        setValueStart(startValue);
        setValueMax(maxValue);
        setMessage('');
        localStorage.setItem('counterValues', JSON.stringify({startValue, maxValue}));
        console.log('startValue', startValue)
    }
    
    return (
        <div className="App">
            <CountSettings errorStartValue={errorStartValue}
                           errorMaxValue={errorMaxValue}
                           changeMessageCallback={changeMessage}
                           callbackChangeStartValue={changeStartValue}
                           callbackChangeMaxValue={changeMaxValue}
                           applySettingsCallback={applySettings}
                           stateStartValue={stateStartValue}
                           stateMaxValue={stateMaxValue}
                           toggleDisabled={disabledFlag}
                           />
            <CountContent startValue={stateStartValue}
                          maxValue={stateMaxValue}
                          message={message}
                          error={error}
                           />
        </div>
    );
}

export default App;
