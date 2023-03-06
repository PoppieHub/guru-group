import {Product} from "../Product";

export interface CardsWrapperComponentProps {
    allCards: Product[] | [];
    cards: Product[] | [];
    onClickHandler: () => void;
}