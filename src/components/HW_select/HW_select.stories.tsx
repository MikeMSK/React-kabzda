import React, {useState} from "react";

export default {
    title: 'ReactMemo Exemple_HW',
};

export const NewMessageCounterSecret = (props: any) => {
    console.log("newMessageSecret")
    return <div>{props.count}</div>
}

const Counter = React.memo(NewMessageCounterSecret)

type UserType = {
    users: string[]
}

const UsersSecret = (props: UserType) => {
    console.log("userSecret")
    return <div>{props.users.map((u, index) => <div key={index}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)


export const Example1 = () => {

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['dimych', 'valera', 'artem']);

    const addUser = () => {
        const copyUsers = [...users]
        copyUsers.push('sveta' + new Date().getTime())
        setUsers(copyUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>+</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>

}


const arrCountry = [
    {id: 1, city: 'Minsk', population: 100000, isDone: true},
    {id: 2, city: 'Mogilev', population: 90000, isDone: false},
    {id: 3, city: 'Grodno', population: 80000, isDone: true},
    {id: 4, city: 'Brest', population: 70000, isDone: false},
    {id: 5, city: 'Smorgon', population: 60000, isDone: true},
    {id: 6, city: 'Vitebsk', population: 50000, isDone: false},
    {id: 7, city: 'Homel', population: 40000, isDone: true},
    {id: 8, city: 'Fanipol', population: 30000, isDone: false},
    {id: 9, city: 'Glutsk', population: 20000, isDone: true},
    {id: 10, city: 'Molodechno', population: 10000, isDone: false},
]
