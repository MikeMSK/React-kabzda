import React, {useState} from "react";


export type PropsType = {
    color: boolean
    onClick: (value: boolean) => void
}

export function OnOff(props: PropsType) {
    // const [color, setColor] = useState(true);

    const baseStyle = {
        margin: "20px"
    }
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid gray",
        display: "inline-block",
        backgroundColor: props.color ? "deepskyblue" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid gray",
        display: "inline-block",
        backgroundColor: props.color ? "white" : "lightgray",
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid gray",
        marginLeft: "15px",
        display: "inline-block",
        backgroundColor: props.color ? "deepskyblue" : "lightgray",
    };

    return <div style={baseStyle}>
        <div style={onStyle}
             onClick={() => props.onClick(true)}>
            On
        </div>
        <div style={offStyle}
             onClick={() => props.onClick(false)}>
            Off
        </div>
        <div style={indicatorStyle}></div>
    </div>
}
