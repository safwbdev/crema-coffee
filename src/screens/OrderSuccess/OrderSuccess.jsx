import React from 'react'
import styles from './OrderSuccess.module.scss';

function OrderSuccess({ items, total, onDone }) {
    return (
        <div
            className={styles.orderSuccessScreen}>
            <div className={styles.logo}>☕</div>
            <div className={styles.mainTitle} >Order Placed!</div>
            <div className={styles.subTitle}>Your coffee is being crafted with love.</div>
            <div className={styles.totalPrice}>${total.toFixed(2)}</div>

            <div className={styles.orderList} >
                {items.map(i => (
                    <div key={i.cartId} className={styles.orderDetail}>
                        {i.logo} {i.name} ×{i.qty} — {i.size}/{i.temp}
                    </div>
                ))}
            </div>

            <div className={styles.etaWaitTime} >Est. wait: 4–6 minutes</div>
            <button onClick={onDone} className={styles.orderAgainButton}>Order Again</button>

            <style>{`@keyframes spin { from { transform: rotate(-20deg) scale(0.5); opacity: 0; } to { transform: rotate(0) scale(1); opacity: 1; } }`}</style>
        </div>
    );
}

export default OrderSuccess