import React from 'react';
import {Card as CardComponent} from "../../components";
import {CardProps} from "../../interfaces/props/CardProps";
import {getImages} from "../../api/images";

const Card: React.FC<CardProps> = ({ card }) => {
    const [imageUrls, setImageUrls] = React.useState<string[]>([]);
    const [visibleSpinner, setVisibleSpinner] = React.useState<boolean>(true);

    React.useEffect(() => {
        if (imageUrls.length < 1) {
            setVisibleSpinner(false);
        }
    }, [imageUrls]);

    const addImages = React.useCallback(async () => {
        setImageUrls(
            await getImages(card.id, 4)
        );
    }, [card.id])

    React.useEffect(() => {
        addImages();
    }, [addImages])

    return (
        <CardComponent card={card} images={imageUrls} visible={visibleSpinner} />
    );
}

export default Card;