import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'ReactMemo demo',
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
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export const LikeUseCalback = () => {
    console.log('likesUseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['react', 'js', 'js']);

    const addBook = () => {
        const copyBooks = [...books]
        copyBooks.push('angular' + new Date().getTime())
        setBooks(copyBooks)
    }
    // const memoizedAddBook = useMemo(() => {
    //     return addBook
    // }, [books]);

    const memoizedAddBook = useCallback(() => {
        console.log(books)
        const newUsers = [...books, 'angular' + new Date().getTime()]
        setBooks(newUsers)
    }, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook}/>
    </>
}

type BooksSecretType = {
    //books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BooksSecretType) => {
    console.log("booksSecret")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}
const Book = React.memo(BooksSecret)