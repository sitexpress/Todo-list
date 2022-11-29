import React, {ChangeEvent} from "react";

type CheckboxType = {
    checked: boolean
    onChangeStatusHandler: (isDone:boolean) => void
}

export const Checkbox: React.FC<CheckboxType> = ({checked,onChangeStatusHandler}) => {
    return  <input
                type="checkbox"
                onChange={(e:ChangeEvent<HTMLInputElement>) => onChangeStatusHandler(e.currentTarget.checked)}
                checked={checked}>
            </input>
}