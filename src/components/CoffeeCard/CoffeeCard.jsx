import React, { useState } from 'react'
import { COLORS } from '../../constants/colours';
import styles from './CoffeeCard.module.scss';

function CoffeeCard({ item, onSelect }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onSelect(item)}
            className={styles.coffeeCard}
            style={{
                background: hovered
                    ? `linear-gradient(135deg, ${item.color}CC 0%, ${COLORS.card} 100%)`
                    : `linear-gradient(135deg, ${item.color}66 0%, ${COLORS.card} 100%)`,
                border: `1px solid ${hovered ? COLORS.accent : COLORS.cardBorder}`,
                transform: hovered ? "translateY(-3px)" : "none",
                boxShadow: hovered ? `0 8px 32px ${COLORS.accentGlow}` : "none",
            }}
        >
            <div className={styles.logo}>{item.logo}</div>
            <div className={styles.itemName}>{item.name}</div>
            <div className={styles.itemTagline}>{item.tagline}</div>
            <div className={styles.itemDesc}>{item.desc}</div>
            <div className={styles.itemBottom}>
                <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
                <span className={styles.orderButton}>ORDER →</span>
            </div>
        </div>
    );
}
export default CoffeeCard