import React from 'react';
import style from './FoodInput.module.css';

export default function FoodInput({ handleKeyDown }) {
    return (
        <>
            <input onKeyDown={handleKeyDown} className={`${style['InputStyle']}`} type="text" placeholder='Enter food Item here...' />
        </>
    )
}
