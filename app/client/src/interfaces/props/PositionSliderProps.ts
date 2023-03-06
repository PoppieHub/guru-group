import React from "react";
import {PositionSlider} from "../PositionSlider";

export interface PositionSliderProps {
    items: boolean[];
    position: PositionSlider;
    handler: React.Dispatch<React.SetStateAction<{
        current: number;
        previous: number;
    }>>;
}