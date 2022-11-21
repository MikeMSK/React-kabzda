import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(7);

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }

            tempResultA *= i
        }
        return tempResultA
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

type UserType = {
    users: string[]
}

const UsersSecret = (props: UserType) => {
    console.log('render users secret')
    return <div>
        {props.users.map((u, index) => <div key={index}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)


export const HelpsToReactMemo = () => {
    console.log('render helps....')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['dimych', 'valera', 'artem']);

    const newArray = useMemo(() => {
        const newArr = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArr
    }, [users]);

    const addUser = () => {
        const copyUsers = [...users]
        copyUsers.push('sveta' + new Date().getTime())
        setUsers(copyUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>

}