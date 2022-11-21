import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {PropsType, UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

const callback = () => action("UncontrolledOnOff click")

export const UncontrolledOnOffMode: ComponentStory<typeof UncontrolledOnOff> = (arg: PropsType) => {
    return <UncontrolledOnOff onChange={arg.onChange}/>
}
export const UncontrolledOnOffMode2: ComponentStory<typeof UncontrolledOnOff> = (arg: PropsType) => {
    return <UncontrolledOnOff onChange={callback}/>
}



