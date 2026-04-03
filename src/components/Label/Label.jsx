import React from 'react'
import styles from './Label.module.scss';

function Label({ children }) {
    return <div className={styles.label}>{children}</div>;
}

export default Label