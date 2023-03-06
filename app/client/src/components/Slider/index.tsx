import React from 'react';
import {PositionSliderProps} from "../../interfaces/props/PositionSliderProps";
import style from './Slider.module.scss';

const Slider = ({ items, handler, position }: PositionSliderProps) => {
    const changeSlide = async (i: number) => {
        await new Promise((resolve: any) => {
            setTimeout(() => {
                resolve()
            }, 200);
        });
        handler({
            current: i,
            previous: position.current
        });
    }

    return (
        <div className={style.slider}>
            {items.map((active, i) => (
                <div
                    key={i}
                    className={`${style.sliderItem} ${active ? style.active : ''}`}
                    onMouseEnter={() => {
                        changeSlide(i);
                    }}
                    onClick={() => {
                        changeSlide(i);
                    }}
                    onTouchStart={() => {
                        changeSlide(i);
                    }}
                />
            ))}
        </div>
    )
}

export default Slider;