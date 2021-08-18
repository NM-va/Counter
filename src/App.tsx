import React, {ChangeEvent, useEffect, useState} from "react";
import "./App.css";
import {CountSettings} from "./components/CountSettings/CountSettings";
import {CountContent} from "./components/CountContent/CountContent";


function App() {
    const [values, setValues] = useState<number[]>([0, 0]);
    useEffect(() => {

    }, {startValue: 0, maxValue: 0});

    const valuesList = [4, 0];

    const [error, setError] = useState<boolean>(false);

    const onChangeStartValueHandler = (startValue) => {
        setCountValue({...countValues, startValue: Number(startValue)});
    };

    const onChangeMaxValueHandler = (maxValue) => {
        setCountValue({...countValues, maxValue: Number(maxValue)});
    };


    const getValues = (values: number[]) => {

    };

    // const getValuesFromLS = () => {
    //     let stringValues = localStorage.getItem('counterValue');
    //     if (stringValues) {
    //         JSON.parse(stringValues);
    //     }
    // };


    const applySettings = () => {
        localStorage.setItem('counterValue', JSON.stringify(valuesList));
    };

  return (
    <div className="App">
      <CountSettings applySettingsCallback={applySettings} getValuesCallback={getValues} />
      <CountContent startValue={values[0]} maxValue={values[1]} />
    </div>
  );
}

export default App;
