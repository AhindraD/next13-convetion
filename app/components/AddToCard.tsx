"use client"
import React from 'react'

const AddToCard = () => {
    return (
        <div>
            <button
                className="btn w-48 rounded-full btn-primary my-4"
                onClick={() => { console.log('add to cart') }}>add to cart</button>
        </div>
    )
}

export default AddToCard