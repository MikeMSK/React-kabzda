import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

// export const SimpleExample = () => {
//     const [counter, setCounter] = useState(1);
//     console.log("SimpleExample");
//
//     useEffect(() => {
//         console.log('effect')
//         document.title = counter.toString()
//     }, [counter]);
//
//
//     return <>
//         Hello,{counter}
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//     </>
// }
// export const SetTimeOutExample = () => {
//     const [counter, setCounter] = useState(1);
//     const [fake, setFake] = useState(1);
//     console.log("SetTimeOutExample");
//
//     useEffect(() => {
//         console.log('effect')
//
//         setTimeout(() => {
//             document.title = counter.toString()
//         }, 1000)
//
//     }, [counter]);
//
//     return <>
//         Hello,{counter}
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//         <button onClick={() => setFake(fake + 1)}>plus</button>
//     </>
// }
// export const SetIntervalExample = () => {
//     const [counter, setCounter] = useState(1);
//     const [fake, setFake] = useState(1);
//     console.log("SetIntervalExample");
//
//     useEffect(() => {
//         console.log('effect')
//
//         setInterval(() => {
//             setCounter(counter + 1)
//             // setCounter((state) => state + 1)
//         }, 1000)
//
//     }, []);
//
//     return <>
//         Hello,counter: {counter} - fake: {fake}
//         {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
//         {/*<button onClick={() => setFake(fake + 1)}>plus</button>*/}
//     </>
// }

// export const TimeExample = () => {
//     const [hours, setHours] = useState(0);
//     const [min, setMin] = useState(0);
//     const [sec, setSec] = useState(0);
//     console.log("TimeExample");
//
//     let time = new Date()
//
//     useEffect(() => {
//         console.log('effect')
//         setInterval(() => {
//             setHours(time.getHours())
//             setMin(time.getMinutes())
//             setSec(time.getSeconds())
//
//             // setCounter((state) => state + 1)
//         }, 1000)
//
//     }, [hours, min, sec]);
//
//     return <>
//         Hello,time - {hours}:{min}:{sec}
//         {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
//         {/*<button onClick={() => setFake(fake + 1)}>plus</button>*/}
//     </>
// }