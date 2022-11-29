import React from 'react'

type ButtonType = {
    buttonName: string
    callBack: () => void
}

export const Button: React.FC<ButtonType> = ({buttonName, callBack}) => {
    return (
        <button onClick={()=>callBack()}>{buttonName}</button>
    )
}