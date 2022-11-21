import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);
    console.log("sipleExample");

    useEffect(() => {
        console.log("useEffect")
        //
        // return () => {
        //     effect
        // };
    });


    return <>
        Hello,{counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}