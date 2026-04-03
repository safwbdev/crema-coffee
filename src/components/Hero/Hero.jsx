import React from 'react'
import styles from './Hero.module.scss';

function Hero() {
    return (
        <div className={styles.heroOuter}>
            <div className={styles.topText}>Good Morning ☀️</div>
            <div className={styles.midText}>
                What will it<br />be today?
            </div>
            <div className={styles.bottomText}>
                Crafted to order. Every single cup.
            </div>
        </div>
    )
}

export default Hero