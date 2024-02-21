import React from 'react';
import style from './Item.module.css'

export default function Item(props) {
    let { item, bought, handleClick } = props;
    // let item = props.item;

    return (
        <>
            {<li
                className={` ${bought && 'active'} ${style["foodItem"]} list-group-item`}>
                <span>{item}</span>
                <button
                    onClick={handleClick}
                    className={`${style["buttonStyle"]}`}>Buy</button>
            </li>}
        </>
    )
}
