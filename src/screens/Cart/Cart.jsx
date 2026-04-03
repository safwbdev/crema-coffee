import React from 'react'
import styles from './Cart.module.scss';

function Cart({ items, onRemove, onClose, onPlaceOrder }) {
    const total = items.reduce((s, i) => s + i.total, 0);
    return (
        <div
            className={styles.orderModal}
            onClick={onClose}>
            <div onClick={e => e.stopPropagation()}
                className={styles.orderSection}>
                <div className={styles.divider} />
                <div className={styles.orderTitle}>Your Order</div>

                {items.length === 0 ? (
                    <div className={styles.emptyOrder}>Your order is empty</div>
                ) : (
                    <>
                        {items.map(item => (
                            <div key={item.cartId}
                                className={styles.itemSlot}>
                                <div>
                                    <div className={styles.itemName}>{item.logo} {item.name} <span
                                        className={styles.itemQty}>×{item.qty}</span></div>
                                    <div
                                        className={styles.itemDetails}>
                                        {item.size} · {item.temp} · {item.milk} milk · {item.sugar} sugar
                                        {item.note && ` · "${item.note}"`}
                                    </div>
                                </div>
                                <div className={styles.itemRight}>
                                    <span className={styles.itemPrice}>${item.total.toFixed(2)}</span>
                                    <button onClick={() => onRemove(item.cartId)} className={styles.removeButton}>×</button>
                                </div>
                            </div>
                        ))}

                        <div className={styles.totalSummary}>
                            <span className={styles.totalLabel}>Total</span>
                            <span className={styles.totalSum}>${total.toFixed(2)}</span>
                        </div>

                        <button onClick={onPlaceOrder} className={styles.placeOrderButton}>
                            Place Order →
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart