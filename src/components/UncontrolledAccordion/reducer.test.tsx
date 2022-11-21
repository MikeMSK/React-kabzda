import React from "react";
import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";


test("reducer should change value tot opposite value", () => {
    //data
    const state: StateType = {
        collapsed: false
    }


    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})


    //expection
    expect(newState.collapsed).toBe(true)
})