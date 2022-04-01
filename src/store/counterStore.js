import React from "react";
import {makeAutoObservable} from "mobx";

class CounterStore {

    /*mobx наблюдает за изминением этой переменной*/
    counter = 0;

    constructor() {
        makeAutoObservable(this);
    }

    inc = () =>{
        /* изменяем переменную*/
       return this.counter++
    }

    dec = () => {
        return this.counter--
    }
}

export const counterStore = new CounterStore()