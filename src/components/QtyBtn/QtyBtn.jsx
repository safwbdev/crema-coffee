import React from 'react'
import styles from './QtyBtn.module.scss';

function QtyBtn({ onClick, children }) {
    return (
        <button onClick={onClick} className={styles.qtyButton}>
            {children}
        </button>
    );
}
export default QtyBtn