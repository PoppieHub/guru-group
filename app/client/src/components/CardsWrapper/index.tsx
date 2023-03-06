import React from 'react';
import {CardsWrapperComponentProps} from "../../interfaces/props/CardsWrapperComponentProps";
import {Card} from "../../containers";
import {ShowMore} from "../";
import classNames from "classnames";
import styles from './CardWrapper.module.scss';

const CardsWrapper: React.FC<CardsWrapperComponentProps> = (props) => {
    return (
        <>
            <div className={styles.title}>Похожие объявления</div>
            <div className={styles.cardWrapper}>
                {
                    props.cards.map((card) => (
                        <Card card={card} key={card.id} />
                    ))
                }
                <div
                    className={classNames(styles.row, styles.loaderWrapper)}
                >
                </div>
                <div
                    className={classNames(styles.row, styles.showMoreWrapper)}
                >
                    {(props.cards.length !== props.allCards.length &&
                        <ShowMore onClickHandler={props.onClickHandler}/>
                    ) ||
                        <div className={styles.notMoreWrapper}>
                            <span>Упс, карточек больше нет</span>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default CardsWrapper;