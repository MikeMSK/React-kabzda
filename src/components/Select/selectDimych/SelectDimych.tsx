import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from "./selectDimych.module.css"
import {log} from "util";
import {number} from "prop-types";

type ItemType = {
    value: string
    title: string
}
type SelectPropsType = {
    onChange: (value: string) => void
    value: string | null
    items: Array<ItemType>
}

export const SelectDimych = (props: SelectPropsType) => {

    const [active, setActive] = useState<boolean>(false);
    const [hoveredElement, setHoveredElement] = useState(props.value);

    const selectedItem = props.items.find(f => f.value === props.value)
    const hoveredEl = props.items.find(f => f.value === hoveredElement)

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value]);

    const toggleItems = () => setActive(!active)
    const onIemClick = (value: string) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElement) {

                    const pretendentElIndex = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElIndex) {
                        props.onChange(pretendentElIndex.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === "Escape" || e.key === "Enter") {
            setActive(false)
        }
    }
    return <div className={s.select}
                onKeyUp={onKeyUp}
                tabIndex={0}>

            <span className={s.main}
                  onClick={toggleItems}>
                {selectedItem && selectedItem.title}
            </span>

        {
            active &&
            <div className={s.items}>
                {props.items.map((i, index) => <div key={index}
                                                    onMouseEnter={() => setHoveredElement(i.value)}
                                                    className={s.item + " " + (hoveredEl === i ? s.selected : "")}
                                                    onClick={() => onIemClick(i.value)}>
                    {i.title}
                </div>)}
            </div>
        }
    </div>
}