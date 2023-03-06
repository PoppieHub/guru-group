import React from 'react';
import classNames from "classnames";
import { format, fromUnixTime } from 'date-fns';
import {
    MatchIcon,
    LikeIcon,
    DeliveryIcon,
    TradeIcon,
    Carousel,
    SpinnerCard
} from "../";
import {CardComponentProps} from "../../interfaces/props/CardComponentProps";
import styles from './Card.module.scss';

const Card: React.FC<CardComponentProps> = ({ card, images, visible }) => {
    return (
        <div className={classNames(styles.card, card.seen ? styles.cardSeen : '')}>
            <div className={styles.imgHolder}>
                {(!visible &&
                    <>
                        <Carousel images={images} />
                        <div className={styles.imgIconHolder}>
                            <LikeIcon/>
                            <MatchIcon/>
                        </div>
                    </>
                ) ||
                    <SpinnerCard />
                }
            </div>
            <div className={styles.description}>
                <header>
                    <div className={styles.prices}>
                        <span className={styles.oldPrice}>{card.oldPrice}</span>
                        <span className={styles.price}>{card.price}</span>
                    </div>
                    <div className={styles.descriptionIconHolder}>
                        <DeliveryIcon/>
                        <TradeIcon/>
                    </div>
                </header>
                <main>
                    <span className={styles.title}>{card.title}</span>
                </main>
                <footer>
                    <span className={styles.city}>{card.locality}</span>
                    <span className={styles.date}>
                        {format(fromUnixTime(card.date), 'd.MM.yy, HH:mm')}
                    </span>
                </footer>
            </div>
        </div>
    );
}

export default Card;