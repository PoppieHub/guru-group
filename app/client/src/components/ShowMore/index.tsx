import React from 'react';
import { ShowMoreProps } from '../../interfaces/props/ShowMoreProps';
import styles from './ShowMore.module.scss';

const ShowMore: React.FC<ShowMoreProps> = ({onClickHandler}) => {
    return (
        <button className={styles.showMore} onClick={onClickHandler}>
            Показать еще
        </button>
    );
}

export default ShowMore;