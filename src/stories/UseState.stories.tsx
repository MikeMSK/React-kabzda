import React, {useState} from "react";

export default {
    title: 'useState demo',
};

export const Example1 = () => {
    // console.log('Example1')

    function generateData() {
        // console.log('generate')
        return 1
    }

    const changer = (state: number) => {
        // console.log('changer')
        return state + 1
    }
    const [counter, setCounter] = useState(generateData);

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}

    </>
}
