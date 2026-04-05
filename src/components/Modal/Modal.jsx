import React, { useState } from 'react'
import {
    milkOptions,
    sizeOptions,
    tempOptions,
    sugarOptions,

} from '../../constants/options';
import Label from '../Label/Label'
import { COLORS } from '../../constants/colours';
import PillGroup from '../PillGroup/PillGroup';
import QtyBtn from '../QtyBtn/QtyBtn';
import styles from './Modal.module.scss';

function Modal({ item, onClose, onAddToCart }) {

    const [size, setSize] = useState(1);
    const [milk, setMilk] = useState("Oat");
    const [temp, setTemp] = useState("Hot");
    const [sugar, setSugar] = useState("None");
    const [qty, setQty] = useState(1);
    const [note, setNote] = useState("");

    const total = ((item.price + sizeOptions[size].mod) * qty).toFixed(2);

    const handleAdd = () => {
        onAddToCart({
            ...item,
            size: sizeOptions[size].label,
            milk,
            temp,
            sugar,
            qty,
            note,
            unitPrice: item.price + sizeOptions[size].mod,
            total: parseFloat(total),
            cartId: Date.now(),
        });
        onClose();
    };

    return (
        <div
            className={styles.modalOuter}
            onClick={onClose}>
            <div
                onClick={e => e.stopPropagation()}
                className={styles.modalInner}
                style={{ background: `linear-gradient(180deg, ${item.color}AA 0%, ${COLORS.card} 40%)` }}
            >
                {/* Handle */}
                <div className={styles.handle} />
                <div className={styles.logo}>{item.logo}</div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.tagline}>{item.tagline}</div>

                {/* Size */}
                <Label>Size</Label>
                <div className={styles.sizeOuter}>
                    {sizeOptions.map((s, i) => (
                        <button
                            key={i}
                            onClick={() => setSize(i)}
                            className={styles.sizeButton}
                            style={{
                                border: `1px solid ${size === i ? COLORS.accent : COLORS.cardBorder}`,
                                background: size === i ? COLORS.accentGlow : "transparent",
                                color: size === i ? COLORS.accentLight : COLORS.muted,
                            }}>
                            <div className={styles.sizeLabel}>{s.label}</div>
                            <div className={styles.unitLabel}>{s.ml}</div>
                        </button>
                    ))}
                </div>

                {/* Temperature */}
                <Label>Temperature</Label>
                <PillGroup options={tempOptions} selected={temp} onSelect={setTemp} />

                {/* Milk */}
                <Label>Milk</Label>
                <PillGroup options={milkOptions} selected={milk} onSelect={setMilk} />

                {/* Sugar */}
                <Label>Sweetness</Label>
                <PillGroup options={sugarOptions} selected={sugar} onSelect={setSugar} />

                {/* Note */}
                <Label>Special note</Label>
                <input
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    placeholder="e.g. extra hot, no foam..."
                    className={styles.noteArea}
                />

                {/* Qty + Add */}
                <div className={styles.qtyAddOuter}>
                    <div className={styles.qtyAddInner}>
                        <QtyBtn onClick={() => setQty(q => Math.max(1, q - 1))}>−</QtyBtn>
                        <span className={styles.qty}>{qty}</span>
                        <QtyBtn onClick={() => setQty(q => q + 1)}>+</QtyBtn>
                    </div>
                    <button onClick={handleAdd}
                        className={styles.orderButton}
                    >
                        Add to Order · ${total}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Modal