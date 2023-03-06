import React from 'react';
import {CarouselProps} from "../../interfaces/props/CarouselProps";
import {PositionSlider} from "../../interfaces/PositionSlider";
import {Slider, Sliders} from "../";
import styles from "./Carousel.module.scss";

const Carousel: React.FC<CarouselProps> = ({ images = [] }) => {
    const [position, setPosition] = React.useState<PositionSlider>({
        current: 0,
        previous: 0
    });

    return (
        <div className={styles.carousel}>
            <Slider
                items={images.map((el, i) => i === position.current)}
                position={position}
                handler={setPosition}
            />
            <Sliders position={position} slides={images} />
        </div>
    );
}

export default Carousel;