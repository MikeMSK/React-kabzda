import React, {useState} from "react";

export type PropsType = {
    onChange: (value: boolean) => void
}

export function UncontrolledOnOff(props: PropsType) {
    const [color, setColor] = useState(true);

    const baseStyle = {
        margin: "20px"
    }
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid gray",
        display: "inline-block",
        backgroundColor: color ? "deepskyblue" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid gray",
        display: "inline-block",
        backgroundColor: color ? "white" : "lightgray",
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid gray",
        marginLeft: "15px",
        display: "inline-block",
        backgroundColor: color ? "deepskyblue" : "lightgray",
    };

    const onClicked = () => {
        setColor(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setColor(false)
        props.onChange(false)
    }

    return <div style={baseStyle}>
        <div style={onStyle}
             onClick={onClicked}>
            On
        </div>
        <div style={offStyle}
             onClick={offClicked}>
            Off
        </div>
        <div style={indicatorStyle}></div>
    </div>
}
