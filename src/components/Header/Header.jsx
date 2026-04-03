import React from 'react'
import Badge from '../Badge/Badge'
import styles from './Header.module.scss';

function Header({ totalItems, setShowCart }) {

    return (
        <div className={styles.outerHeader}>
            <div>
                <div className={styles.mainTitle}>Crema</div>
                <div className={styles.subTitle}>Specialty Coffee</div>
            </div>
            <button onClick={() => setShowCart(true)}
                className={styles.cartButton}>
                🛒
                <Badge count={totalItems} />
            </button>
        </div>
    )
}

export default Header