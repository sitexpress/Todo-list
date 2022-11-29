import React, {ChangeEvent, useState} from "react";
import s from "./Input.module.css"

type InputType = {
    value: string
    callBack: (text:string) => void
}
export const Input: React.FC<InputType> = ({
                                               value,
                                               callBack,
})=> {


    return  <input
                className={s.input}
                value={value}
                type="text"
                onChange={(e:ChangeEvent<HTMLInputElement>) => console.log(callBack(e.currentTarget.value))}>
            </input>


}