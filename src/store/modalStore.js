import React from "react";
import {makeAutoObservable} from "mobx";

class ModalStore {

    /*mobx наблюдает за изминением этой переменной*/
    show = false;
    constructor() {
        makeAutoObservable(this);
    }

    handleClose = () =>{
        /* изменяем переменную*/
       return this.show = false;
    }

    handleShow = () => {
        return this.show = true;

    }
}

export const modalStore = new ModalStore()