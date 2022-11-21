import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {OnOff, PropsType} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const callback = () => action("on or off click")

export const OnMode: ComponentStory<typeof OnOff> = () => {
    return <OnOff color={true}
                  onClick={callback}/>
}
export const OffMode: ComponentStory<typeof OnOff> = () => {
    return <OnOff color={false}
                  onClick={callback}/>
}
export const ChangeOnOff: ComponentStory<typeof OnOff> = () => {
    const [toggle, setToggle] = useState<boolean>(true);
    return <OnOff color={toggle}
                  onClick={setToggle}/>
}
