import React from 'react';
import { observer } from "mobx-react-lite";
import {counterStore} from "../../../store/counterStore";


const Counter = () => {
    return (
        <div>
            <h2>{counterStore.counter}</h2> {/*mobx наблюдает за этой переменной,она назначена в сторе*/}
            <button onClick={counterStore.inc}>Inc Counter</button> {/*вызов функций из стора для их выполнения*/}
            <button onClick={counterStore.dec}>Dec Counter</button>
        </div>
    );
};


export default observer(Counter);