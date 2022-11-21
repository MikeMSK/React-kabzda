import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValuesType} from "./components/Raiting/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolingOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Select} from "./components/Select/Select";
import {SelectDimych} from "./components/Select/selectDimych/SelectDimych";

// react-element <></> обертка фрагмент
function App() {

    const [ratingValue, setRatingValue] = useState<RatingValuesType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const [colorToogle, setColorToogle] = useState<boolean>(true);
    const [choice, setChoice] = useState<string>("");

    return <div>
        {/*<OnOff color={colorToogle}*/}
        {/*       onClick={setColorToogle}/>*/}
        {/*<hr/>*/}
        {/*<UncontrolledOnOff onChange={setColorToogle}/>{colorToogle.toString()}*/}
        {/*<hr/>*/}
        {/*<Rating value={ratingValue}*/}
        {/*        onClick={setRatingValue}/>*/}
        {/*<hr/>*/}
        {/*<UncontrolledRating/>*/}
        {/*<hr/>*/}
        {/*<Accordion titleValue={"Menu_1"}*/}
        {/*           collapsed={accordionCollapsed}*/}
        {/*           onChange={setAccordionCollapsed}/>*/}
        {/*<hr/>*/}
        {/*<UncontrolledAccordion titleValue={"Menu_2"}/>*/}
        <hr/>

        {/*<Select choice={choice}*/}
        {/*        setChoice={setChoice}*/}
        {/*        items={[]}*/}
        {/*        onClick={() => {*/}
        {/*        }}/>*/}
        {/*<SelectHW choice={} setChoice={} items={} onClick={}/>*/}
    </div>;
}

export default App;

