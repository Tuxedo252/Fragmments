import React, { useState } from 'react'
import Item from './Item'
import style from './FoodItem.module.css';

export default function FoodItems(props) {
    let { foodItems } = props;
    let [activeItem, setActiveItem] = useState([]);

    let handleClick = (item, event) => {
        let newItem = [...activeItem, item];
        setActiveItem(newItem);
        console.log(item);
    }
    return (

        <ul className={`${style["foodItemContainer"]} list-group`}>
            {foodItems.map((item) =>
                <Item
                    key={item}
                    bought={activeItem.includes(item)}
                    item={item}
                    handleClick={(e) => handleClick(item, e)}
                />
            )}
        </ul>

    )
}
