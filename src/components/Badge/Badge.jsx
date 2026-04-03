import React from 'react'
import styles from './Badge.module.scss';

function Badge({ count }) {
    if (!count) return null;
    return (
        <span className={styles.badge}>{count}</span>
    );
}

export default Badge