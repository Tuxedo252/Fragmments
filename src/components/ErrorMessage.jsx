import React from 'react'

export default function ErrorMessage({ foodItems }) {
    return (
        <>
            {foodItems.length === 0 ? <h4>I am still hungry</h4> : null}
        </>
    )
}
