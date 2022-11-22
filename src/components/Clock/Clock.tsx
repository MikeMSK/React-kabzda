import React, {useEffect, useState} from "react";


type PropsType = {}

const timeZero = (number: any) => number < 10
    ? '0' + number
    : number


export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [date]);

    return <div>
        <span>{timeZero(date.getSeconds())}</span>
        : <span>{timeZero(date.getHours())}</span>
        : <span>{timeZero(date.getMinutes())}</span>
    </div>
}