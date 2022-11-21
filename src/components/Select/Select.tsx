import React, {useState} from 'react';
import './select.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    choice: string
    setChoice: (title: string) => void
    items: Array<ItemType>
    onClick: (value: any) => void
}


export const Select = (props: SelectPropsType) => {

    const [showItem, setShowItem] = useState(Boolean);

    const onClickItemHandler = (title: string) => {
        props.setChoice(title)
        setShowItem(false)
    }
    const onClickHandler = () => {
        setShowItem(true)
    }

    return <div>
        <div className={"firstBlock"}
             onClick={onClickHandler}>
            {props.choice || "-click-"}
        </div>
        <div>{showItem
            ? props.items.map((el, index) => <div key={index}
                                                  className={"twoBlock"}
                                                  onClick={() => onClickItemHandler(el.title)}>
                {el.title}
            </div>)
            : ""}</div>

    </div>
};
