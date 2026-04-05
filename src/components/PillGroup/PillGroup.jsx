import React from 'react'
import { COLORS } from '../../constants/colours';
import styles from './PillGroup.module.scss';

function PillGroup({ options, selected, onSelect }) {
    return (
        <div className={styles.pillGroupOuter}>
            {options.map(o => (
                <button key={o} onClick={() => onSelect(o)} style={{
                    border: `1px solid ${selected === o ? COLORS.accent : COLORS.cardBorder}`,
                    background: selected === o ? COLORS.accentGlow : "transparent",
                    color: selected === o ? COLORS.accentLight : COLORS.muted,
                }}>{o}</button>
            ))}
        </div>
    );
}

export default PillGroup