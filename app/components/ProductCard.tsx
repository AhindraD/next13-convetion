import React from 'react';
import AddToCard from './AddToCard';

const ProductCard = () => {

    //to use css from module
    // import styles from './ProductCard.module.css';
    // className={styles.card}

    //to use twailwind css
    //className="p-4 my-3 bg-cyan-300 text-white text-lg font-semibold hover:bg-green-300 w-40 text-center"

    return (
        <div>
            <AddToCard />
        </div>
    )
}

export default ProductCard;