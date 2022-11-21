import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {AccordionPropsType, UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;


export const UncontrolledAccordionMode: ComponentStory<typeof UncontrolledAccordion> = () => {
    return <UncontrolledAccordion titleValue={"--Menu--"}/>
}


