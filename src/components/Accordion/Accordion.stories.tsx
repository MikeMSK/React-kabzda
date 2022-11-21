import React, {useState} from "react";
import {ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callback = () => action("accordion click")
const onClickCallback = () => action("some item was clicked")

export const MenuCollapsedMode = () => {
    return <Accordion titleValue={"--Menu--"}
                      collapsed={true}
                      onChange={callback}
                      onClick={onClickCallback}
                      items={[]}/>
}
export const UsersUnCollapsedMode = () => {
    return <Accordion titleValue={"--Users--"}
                      collapsed={false}
                      onChange={callback}
                      onClick={onClickCallback}
                      items={[
                          {title: "M", value: 1},
                          {title: "D", value: 2},
                          {title: "B", value: 3},
                      ]}/>
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"--Menu--"}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      onClick={onClickCallback}
                      items={[
                          {title: "M", value: 1},
                          {title: "D", value: 2},
                          {title: "B", value: 3},]}/>
}

