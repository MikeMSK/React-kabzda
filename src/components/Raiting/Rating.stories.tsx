import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Rating, RatingPropsType, RatingValuesType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

export const EmptyRating: ComponentStory<typeof Rating> = (arg: RatingPropsType) => {
    return <>
        <Rating value={arg.value}
                onClick={arg.onClick}/>
        <Rating value={1}
                onClick={arg.onClick}/>
        <Rating value={2}
                onClick={arg.onClick}/>
        <Rating value={3}
                onClick={arg.onClick}/>
        <Rating value={4}
                onClick={arg.onClick}/>
        <Rating value={5}
                onClick={arg.onClick}/>
    </>
}
export const ChangeRating: ComponentStory<typeof Rating> = () => {
    const [star, setStar] = useState<RatingValuesType>(0);
    return <Rating value={star}
                   onClick={setStar}/>
}
