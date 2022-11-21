import React, {useState} from "react";
import {ComponentMeta} from "@storybook/react";
import {SelectDimych} from "./SelectDimych";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: SelectDimych,
} as ComponentMeta<typeof SelectDimych>;


export const WithValue = () => {

    const [value, setValue] = useState("");

    return <>
        <SelectDimych onChange={setValue}
                      value={value}
                      items={[
                          {value: "1", title: 'Minsk'},
                          {value: "2", title: 'Grodno'},
                          {value: "3", title: 'Polotsk'}]}/>
    </>
}
// export const WithoutValue = () => {
//
//     const [value, setValue] = useState(null);
//
//     return <>
//         <SelectHW onChange={setValue}
//                       value={value}
//                       items={[
//                           {value: "1", title: 'Minsk'},
//                           {value: "2", title: 'Grodno'},
//                           {value: "3", title: 'Polotsk'}]}/>
//     </>
// }