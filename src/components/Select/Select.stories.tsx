import React, {useState} from "react";
import {ComponentMeta} from "@storybook/react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const callback = () => action("select click")

export const NewSelectMode = () => {

    const [choice, setChoice] = useState("");

    return <Select choice={choice}
                   setChoice={setChoice}
                   onClick={callback}
                   items={[
                       {title: "hello", value: 1},
                       {title: "good morning", value: 2},
                       {title: "bye", value: 3}
                   ]}/>
}