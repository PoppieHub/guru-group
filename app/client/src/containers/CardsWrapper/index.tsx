import React from 'react';
import {CardsWrapper as CardsWrapperComponent} from "../../components";
import {Cards} from "../../interfaces/Cards";

const CardsWrapper: React.FC<Cards> = (props) => {
    const [cards, setCards] = React.useState<Cards>({cards: []});
    const [flag, setFlag] = React.useState<boolean>(true);
    const [stepCards, setStepCards] = React.useState<number>(1);
    const [displayCards] = React.useState<number>(16);

    const onClickHandler = React.useCallback(() => {
        setStepCards(stepCards + 1);
        setCards({
            ...cards,
            cards: (props.cards.length >= stepCards * displayCards)?
                [...props.cards.slice(0, stepCards * displayCards)]:
                [...props.cards]
        });
    }, [props.cards, stepCards, displayCards, cards]);

    React.useEffect(() => {
        if (flag && props.cards.length > 0) {
            onClickHandler();
            setFlag(false);
        }
    }, [props.cards, onClickHandler, flag]);

    return (
        <CardsWrapperComponent
            cards={cards.cards}
            allCards={props.cards}
            onClickHandler={onClickHandler}
        />
    );
}

export default CardsWrapper;