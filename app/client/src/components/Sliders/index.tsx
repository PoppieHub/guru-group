import React from 'react';
import {PositionSlidersProps} from "../../interfaces/props/PositionSlidersProps";
import style from './Sliders.module.scss';

const Sliders = ({ slides, position }: PositionSlidersProps) => {

    return (
        <>
            {slides.map((url, index) => {
                const isCurrent = index === position.current
                const isPrevious = index === position.previous
                const useNextAnimation = isCurrent && position.current > position.previous
                const usePrevAnimation = isCurrent && position.current < position.previous
                const hideImage = !isCurrent && !isPrevious

                return (
                    <div
                        className={[
                            style.slide,
                            isCurrent ? style.current : '',
                            isPrevious ? style.previous : '',
                            useNextAnimation ? style.nextSlide : '',
                            usePrevAnimation ? style.prevSlide: '',
                            hideImage ? style.hide : ''
                        ].join(' ')}
                        key={index}
                    >
                        <img src={url} alt={'card'} />
                    </div>
                )
            })}
        </>
    )
}

export default Sliders;