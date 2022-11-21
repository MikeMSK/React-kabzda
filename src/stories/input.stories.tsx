import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input',
    //component:input
};

export const UncontrolledInput = () => <input/>;

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState("");
    return <>
        <input value={value}
               onChange={(e: ChangeEvent<HTMLInputElement>) => {
                   setValue(e.currentTarget.value)
               }}/> - {value}
    </>
};
//  ref !!!!
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>
            +
        </button>
        <hr/>
        actual value - {value}
    </>
};

export const ControlledInputFixedValue = () => <input value={"hello"}/>;

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue}
                  onChange={changeHandler}/>
};

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(Boolean);
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.checked)
        setParentValue(e.currentTarget.checked)
    }
    return <input type={'checkbox'}
                  onChange={changeHandler}/>
};

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue}
                   onChange={changeHandler}>
        <option>menu</option>
        <option value="1">11</option>
        <option value="2">22</option>
        <option value="3">33</option>
        <option value="4">44</option>
        <option value="5">55</option>
    </select>

}