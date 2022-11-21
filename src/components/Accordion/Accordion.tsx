import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick: (value: any) => void
}

export const Accordion = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items}
                                            onClick={props.onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <div>
        <h3 onClick={(e) => props.onChange()}>
            {props.title}
        </h3>
    </div>
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {
    return <ul>
        {props.items.map((el, index) => {
            return <li key={index}
                       onClick={() => {
                           props.onClick(el.value)
                       }}>
                {el.title}
            </li>
        })}
    </ul>
}


// export function Accordion(props: AccordionPropsType) {
//
//     return <div>
//         <h3 onClick={() => props.onClick(!props.collapsed)}>
//             {props.titleValue}
//         </h3>
//         {!props.collapsed ? <ul>
//                 <li>1</li>
//                 <li>2</li>
//                 <li>3</li>
//             </ul>
//             : ""}
//     </div>
// }

// type AccordionTitlePropsType = {
//     title: string
//     collapsed: boolean
//     onClick: (value: boolean) => void
// }
//
