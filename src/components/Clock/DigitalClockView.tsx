import React from "react";
import {ClockViewPropsType} from "./Clock";

const timeZero = (number: any) => number < 10
    ? '0' + number
    : number

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{timeZero(date.getHours())}</span>
        : <span>{timeZero(date.getMinutes())}</span>
        : <span>{timeZero(date.getSeconds())}</span>
    </>
}