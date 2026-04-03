import React from 'react'
import styles from './CartFab.module.scss';

function CartFAB({ cart, totalItems, setShowCart }) {
    return (
        <div className={styles.cartFabOuter}>
            <button onClick={() => setShowCart(true)}>
                <span>🛒 View Order ({totalItems})</span>
                <span>${cart.reduce((s, i) => s + i.total, 0).toFixed(2)}</span>
            </button>
        </div >
    )
}

export default CartFAB