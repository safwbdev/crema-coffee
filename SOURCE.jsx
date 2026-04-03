import { useState } from "react";

// const COLORS = {
//     bg: "#0F0A06",
//     card: "#1A1109",
//     cardBorder: "#2E1F0E",
//     accent: "#C8872A",
//     accentLight: "#E8A84A",
//     accentGlow: "rgba(200,135,42,0.15)",
//     text: "#F5E6C8",
//     muted: "#8A6A3A",
//     white: "#FFF8EE",
//     red: "#C84A2A",
// };

// const coffeeMenu = [
//     {
//         id: 1,
//         name: "Espresso",
//         tagline: "The soul of coffee",
//         price: 3.5,
//         emoji: "☕",
//         desc: "Double shot, rich crema, bold and unapologetic.",
//         color: "#4A1E00",
//     },
//     {
//         id: 2,
//         name: "Flat White",
//         tagline: "Silk in a cup",
//         price: 5.0,
//         emoji: "🥛",
//         desc: "Velvety microfoam over a ristretto base.",
//         color: "#3B2A14",
//     },
//     {
//         id: 3,
//         name: "Cold Brew",
//         tagline: "Patience, rewarded",
//         price: 5.5,
//         emoji: "🧊",
//         desc: "24-hour steep. Smooth, low acidity, naturally sweet.",
//         color: "#0D1A2B",
//     },
//     {
//         id: 4,
//         name: "Cortado",
//         tagline: "Spanish precision",
//         price: 4.5,
//         emoji: "🍵",
//         desc: "Equal parts espresso and warm milk. Perfectly balanced.",
//         color: "#2E1A00",
//     },
//     {
//         id: 5,
//         name: "Matcha Latte",
//         tagline: "The quiet rebel",
//         price: 5.5,
//         emoji: "🍵",
//         desc: "Ceremonial grade matcha, steamed oat milk, earthy calm.",
//         color: "#0D2010",
//     },
//     {
//         id: 6,
//         name: "Pour Over",
//         tagline: "Ritual brewing",
//         price: 6.0,
//         emoji: "🫖",
//         desc: "Single origin, bloom & pour, 3-minute meditative craft.",
//         color: "#1E1200",
//     },
// ];

// const milkOptions = ["Whole", "Oat", "Almond", "Soy", "Coconut", "Skip"];
// const sizeOptions = [
//     { label: "S", ml: "180ml", mod: -0.5 },
//     { label: "M", ml: "240ml", mod: 0 },
//     { label: "L", ml: "360ml", mod: 1.0 },
// ];
// const tempOptions = ["Hot", "Iced", "Extra Hot"];
// const sugarOptions = ["None", "½ tsp", "1 tsp", "2 tsp", "Honey"];

// function Badge({ count }) {
//     if (!count) return null;
//     return (
//         <span style={{
//             position: "absolute", top: -6, right: -6,
//             background: COLORS.accent, color: COLORS.bg,
//             borderRadius: "50%", width: 18, height: 18,
//             fontSize: 10, fontWeight: 800,
//             display: "flex", alignItems: "center", justifyContent: "center",
//         }}>{count}</span>
//     );
// }

// function CoffeeCard({ item, onSelect }) {
//     const [hovered, setHovered] = useState(false);
//     return (
//         <div
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//             onClick={() => onSelect(item)}
//             style={{
//                 background: hovered
//                     ? `linear-gradient(135deg, ${item.color}CC 0%, ${COLORS.card} 100%)`
//                     : `linear-gradient(135deg, ${item.color}66 0%, ${COLORS.card} 100%)`,
//                 border: `1px solid ${hovered ? COLORS.accent : COLORS.cardBorder}`,
//                 borderRadius: 20,
//                 padding: "20px 18px",
//                 cursor: "pointer",
//                 transition: "all 0.25s ease",
//                 transform: hovered ? "translateY(-3px)" : "none",
//                 boxShadow: hovered ? `0 8px 32px ${COLORS.accentGlow}` : "none",
//                 position: "relative",
//                 overflow: "hidden",
//             }}
//         >
//             <div style={{ fontSize: 36, marginBottom: 8 }}>{item.emoji}</div>
//             <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.white, fontFamily: "'Playfair Display', serif", letterSpacing: 0.3 }}>{item.name}</div>
//             <div style={{ fontSize: 11, color: COLORS.accent, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6, fontFamily: "monospace" }}>{item.tagline}</div>
//             <div style={{ fontSize: 12, color: COLORS.muted, lineHeight: 1.5, marginBottom: 12 }}>{item.desc}</div>
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <span style={{ fontSize: 18, fontWeight: 800, color: COLORS.accentLight }}>${item.price.toFixed(2)}</span>
//                 <span style={{
//                     background: COLORS.accent, color: COLORS.bg,
//                     borderRadius: 20, padding: "4px 12px",
//                     fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
//                     opacity: hovered ? 1 : 0.7, transition: "opacity 0.2s",
//                 }}>ORDER →</span>
//             </div>
//         </div>
//     );
// }

// function Modal({ item, onClose, onAddToCart }) {
//     const [size, setSize] = useState(1);
//     const [milk, setMilk] = useState("Oat");
//     const [temp, setTemp] = useState("Hot");
//     const [sugar, setSugar] = useState("None");
//     const [qty, setQty] = useState(1);
//     const [note, setNote] = useState("");

//     const total = ((item.price + sizeOptions[size].mod) * qty).toFixed(2);

//     const handleAdd = () => {
//         onAddToCart({
//             ...item,
//             size: sizeOptions[size].label,
//             milk,
//             temp,
//             sugar,
//             qty,
//             note,
//             unitPrice: item.price + sizeOptions[size].mod,
//             total: parseFloat(total),
//             cartId: Date.now(),
//         });
//         onClose();
//     };

//     return (
//         <div style={{
//             position: "fixed", inset: 0, zIndex: 100,
//             background: "rgba(0,0,0,0.85)",
//             display: "flex", alignItems: "flex-end", justifyContent: "center",
//             backdropFilter: "blur(4px)",
//         }} onClick={onClose}>
//             <div
//                 onClick={e => e.stopPropagation()}
//                 style={{
//                     background: `linear-gradient(180deg, ${item.color}AA 0%, ${COLORS.card} 40%)`,
//                     border: `1px solid ${COLORS.cardBorder}`,
//                     borderBottom: "none",
//                     borderRadius: "28px 28px 0 0",
//                     padding: "28px 24px 32px",
//                     width: "100%", maxWidth: 440,
//                     maxHeight: "88vh", overflowY: "auto",
//                 }}
//             >
//                 {/* Handle */}
//                 <div style={{ width: 36, height: 4, background: COLORS.muted, borderRadius: 2, margin: "0 auto 20px" }} />

//                 <div style={{ fontSize: 48, marginBottom: 4 }}>{item.emoji}</div>
//                 <div style={{ fontSize: 24, fontWeight: 700, color: COLORS.white, fontFamily: "'Playfair Display', serif" }}>{item.name}</div>
//                 <div style={{ fontSize: 12, color: COLORS.accent, textTransform: "uppercase", letterSpacing: 2, marginBottom: 20 }}>{item.tagline}</div>

//                 {/* Size */}
//                 <Label>Size</Label>
//                 <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
//                     {sizeOptions.map((s, i) => (
//                         <button key={i} onClick={() => setSize(i)} style={{
//                             flex: 1, padding: "10px 0", borderRadius: 12,
//                             border: `1px solid ${size === i ? COLORS.accent : COLORS.cardBorder}`,
//                             background: size === i ? COLORS.accentGlow : "transparent",
//                             color: size === i ? COLORS.accentLight : COLORS.muted,
//                             cursor: "pointer", transition: "all 0.2s",
//                         }}>
//                             <div style={{ fontSize: 14, fontWeight: 700 }}>{s.label}</div>
//                             <div style={{ fontSize: 10, marginTop: 2 }}>{s.ml}</div>
//                         </button>
//                     ))}
//                 </div>

//                 {/* Temperature */}
//                 <Label>Temperature</Label>
//                 <PillGroup options={tempOptions} selected={temp} onSelect={setTemp} />

//                 {/* Milk */}
//                 <Label>Milk</Label>
//                 <PillGroup options={milkOptions} selected={milk} onSelect={setMilk} />

//                 {/* Sugar */}
//                 <Label>Sweetness</Label>
//                 <PillGroup options={sugarOptions} selected={sugar} onSelect={setSugar} />

//                 {/* Note */}
//                 <Label>Special note</Label>
//                 <input
//                     value={note}
//                     onChange={e => setNote(e.target.value)}
//                     placeholder="e.g. extra hot, no foam..."
//                     style={{
//                         width: "100%", padding: "10px 14px",
//                         background: "rgba(255,255,255,0.04)",
//                         border: `1px solid ${COLORS.cardBorder}`,
//                         borderRadius: 12, color: COLORS.text,
//                         fontSize: 13, outline: "none",
//                         boxSizing: "border-box", marginBottom: 20,
//                         fontFamily: "inherit",
//                     }}
//                 />

//                 {/* Qty + Add */}
//                 <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                     <div style={{ display: "flex", alignItems: "center", gap: 0, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 12, overflow: "hidden" }}>
//                         <QtyBtn onClick={() => setQty(q => Math.max(1, q - 1))}>−</QtyBtn>
//                         <span style={{ padding: "0 16px", color: COLORS.white, fontSize: 16, fontWeight: 700 }}>{qty}</span>
//                         <QtyBtn onClick={() => setQty(q => q + 1)}>+</QtyBtn>
//                     </div>
//                     <button onClick={handleAdd} style={{
//                         flex: 1, padding: "14px 0",
//                         background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentLight})`,
//                         border: "none", borderRadius: 14,
//                         color: COLORS.bg, fontSize: 15, fontWeight: 800,
//                         cursor: "pointer", letterSpacing: 0.5,
//                     }}>
//                         Add to Order · ${total}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function Label({ children }) {
//     return <div style={{ fontSize: 11, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8, fontFamily: "monospace" }}>{children}</div>;
// }

// function PillGroup({ options, selected, onSelect }) {
//     return (
//         <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
//             {options.map(o => (
//                 <button key={o} onClick={() => onSelect(o)} style={{
//                     padding: "7px 14px", borderRadius: 20,
//                     border: `1px solid ${selected === o ? COLORS.accent : COLORS.cardBorder}`,
//                     background: selected === o ? COLORS.accentGlow : "transparent",
//                     color: selected === o ? COLORS.accentLight : COLORS.muted,
//                     fontSize: 12, cursor: "pointer", transition: "all 0.15s",
//                     fontFamily: "inherit",
//                 }}>{o}</button>
//             ))}
//         </div>
//     );
// }

// function QtyBtn({ onClick, children }) {
//     return (
//         <button onClick={onClick} style={{
//             padding: "10px 16px", background: "transparent",
//             border: "none", color: COLORS.accent,
//             fontSize: 18, cursor: "pointer", fontWeight: 700,
//         }}>{children}</button>
//     );
// }

// function Cart({ items, onRemove, onClose, onPlaceOrder }) {
//     const total = items.reduce((s, i) => s + i.total, 0);
//     return (
//         <div style={{
//             position: "fixed", inset: 0, zIndex: 200,
//             background: "rgba(0,0,0,0.9)",
//             display: "flex", alignItems: "flex-end", justifyContent: "center",
//             backdropFilter: "blur(6px)",
//         }} onClick={onClose}>
//             <div onClick={e => e.stopPropagation()} style={{
//                 background: COLORS.card,
//                 border: `1px solid ${COLORS.cardBorder}`,
//                 borderBottom: "none",
//                 borderRadius: "28px 28px 0 0",
//                 padding: "28px 24px 32px",
//                 width: "100%", maxWidth: 440,
//                 maxHeight: "80vh", overflowY: "auto",
//             }}>
//                 <div style={{ width: 36, height: 4, background: COLORS.muted, borderRadius: 2, margin: "0 auto 20px" }} />
//                 <div style={{ fontSize: 20, fontWeight: 700, color: COLORS.white, fontFamily: "'Playfair Display', serif", marginBottom: 20 }}>Your Order</div>

//                 {items.length === 0 ? (
//                     <div style={{ color: COLORS.muted, textAlign: "center", padding: "30px 0", fontSize: 14 }}>Your order is empty</div>
//                 ) : (
//                     <>
//                         {items.map(item => (
//                             <div key={item.cartId} style={{
//                                 display: "flex", justifyContent: "space-between", alignItems: "flex-start",
//                                 padding: "14px 0", borderBottom: `1px solid ${COLORS.cardBorder}`,
//                             }}>
//                                 <div>
//                                     <div style={{ color: COLORS.white, fontWeight: 600, fontSize: 14 }}>{item.emoji} {item.name} <span style={{ color: COLORS.muted, fontSize: 12 }}>×{item.qty}</span></div>
//                                     <div style={{ color: COLORS.muted, fontSize: 11, marginTop: 3 }}>
//                                         {item.size} · {item.temp} · {item.milk} milk · {item.sugar} sugar
//                                         {item.note && ` · "${item.note}"`}
//                                     </div>
//                                 </div>
//                                 <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                                     <span style={{ color: COLORS.accentLight, fontWeight: 700, fontSize: 14 }}>${item.total.toFixed(2)}</span>
//                                     <button onClick={() => onRemove(item.cartId)} style={{
//                                         background: "none", border: "none", color: COLORS.red,
//                                         cursor: "pointer", fontSize: 16, padding: 0,
//                                     }}>×</button>
//                                 </div>
//                             </div>
//                         ))}

//                         <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16, marginBottom: 20 }}>
//                             <span style={{ color: COLORS.muted, fontSize: 13 }}>Total</span>
//                             <span style={{ color: COLORS.accentLight, fontWeight: 800, fontSize: 20 }}>${total.toFixed(2)}</span>
//                         </div>

//                         <button onClick={onPlaceOrder} style={{
//                             width: "100%", padding: "16px 0",
//                             background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentLight})`,
//                             border: "none", borderRadius: 14,
//                             color: COLORS.bg, fontSize: 16, fontWeight: 800,
//                             cursor: "pointer", letterSpacing: 0.5,
//                         }}>
//                             Place Order →
//                         </button>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

// function OrderSuccess({ items, total, onDone }) {
//     return (
//         <div style={{
//             position: "fixed", inset: 0, zIndex: 300,
//             background: COLORS.bg,
//             display: "flex", flexDirection: "column",
//             alignItems: "center", justifyContent: "center",
//             padding: 32, textAlign: "center",
//         }}>
//             <div style={{ fontSize: 72, marginBottom: 16, animation: "spin 1s ease-out" }}>☕</div>
//             <div style={{ fontSize: 28, fontWeight: 700, color: COLORS.white, fontFamily: "'Playfair Display', serif", marginBottom: 8 }}>Order Placed!</div>
//             <div style={{ fontSize: 14, color: COLORS.muted, marginBottom: 6 }}>Your coffee is being crafted with love.</div>
//             <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.accentLight, marginBottom: 32 }}>${total.toFixed(2)}</div>

//             <div style={{ width: "100%", maxWidth: 320, background: COLORS.card, borderRadius: 16, padding: 16, marginBottom: 32, border: `1px solid ${COLORS.cardBorder}` }}>
//                 {items.map(i => (
//                     <div key={i.cartId} style={{ color: COLORS.text, fontSize: 13, padding: "4px 0" }}>
//                         {i.emoji} {i.name} ×{i.qty} — {i.size}/{i.temp}
//                     </div>
//                 ))}
//             </div>

//             <div style={{ fontSize: 12, color: COLORS.muted, marginBottom: 8 }}>Est. wait: 4–6 minutes</div>
//             <button onClick={onDone} style={{
//                 background: "none", border: `1px solid ${COLORS.cardBorder}`,
//                 color: COLORS.muted, padding: "10px 24px", borderRadius: 20,
//                 cursor: "pointer", fontSize: 13, fontFamily: "inherit",
//             }}>Order Again</button>

//             <style>{`@keyframes spin { from { transform: rotate(-20deg) scale(0.5); opacity: 0; } to { transform: rotate(0) scale(1); opacity: 1; } }`}</style>
//         </div>
//     );
// }

export default function App() {
    // const [selected, setSelected] = useState(null);
    // const [cart, setCart] = useState([]);
    // const [showCart, setShowCart] = useState(false);
    // const [ordered, setOrdered] = useState(false);
    // const [lastOrder, setLastOrder] = useState(null);

    // const addToCart = (item) => setCart(c => [...c, item]);
    // const removeFromCart = (cartId) => setCart(c => c.filter(i => i.cartId !== cartId));
    // const placeOrder = () => {
    //     setLastOrder({ items: cart, total: cart.reduce((s, i) => s + i.total, 0) });
    //     setCart([]);
    //     setShowCart(false);
    //     setOrdered(true);
    // };

    // const totalItems = cart.reduce((s, i) => s + i.qty, 0);

    return (
        <div style={{
            minHeight: "100vh",
            background: COLORS.bg,
            fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
            color: COLORS.text,
            maxWidth: 440,
            margin: "0 auto",
            position: "relative",
        }}>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />

            {/* Header */}
            <div style={{
                position: "sticky", top: 0, zIndex: 10,
                background: "rgba(15,10,6,0.9)",
                backdropFilter: "blur(16px)",
                borderBottom: `1px solid ${COLORS.cardBorder}`,
                padding: "16px 20px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
                <div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: COLORS.white, fontFamily: "'Playfair Display', serif" }}>Crema</div>
                    <div style={{ fontSize: 11, color: COLORS.muted, letterSpacing: 2, textTransform: "uppercase" }}>Specialty Coffee</div>
                </div>
                <button onClick={() => setShowCart(true)} style={{
                    position: "relative", background: COLORS.accentGlow,
                    border: `1px solid ${COLORS.cardBorder}`, borderRadius: 12,
                    padding: "10px 14px", cursor: "pointer",
                    color: COLORS.text, fontSize: 18,
                }}>
                    🛒
                    <Badge count={totalItems} />
                </button>
            </div>

            {/* Hero */}
            <div style={{ padding: "28px 20px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 13, color: COLORS.accent, textTransform: "uppercase", letterSpacing: 2, marginBottom: 6, fontFamily: "monospace" }}>Good Morning ☀️</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: COLORS.white, fontFamily: "'Playfair Display', serif", lineHeight: 1.2, marginBottom: 8 }}>
                    What will it<br />be today?
                </div>
                <div style={{ fontSize: 13, color: COLORS.muted }}>Crafted to order. Every single cup.</div>
            </div>

            {/* Menu */}
            <div style={{ padding: "0 16px 100px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {coffeeMenu.map(item => (
                    <CoffeeCard key={item.id} item={item} onSelect={setSelected} />
                ))}
            </div>

            {/* Cart FAB */}
            {totalItems > 0 && !showCart && (
                <div style={{
                    position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
                    zIndex: 50, maxWidth: 400, width: "calc(100% - 40px)",
                }}>
                    <button onClick={() => setShowCart(true)} style={{
                        width: "100%", padding: "16px 24px",
                        background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentLight})`,
                        border: "none", borderRadius: 18,
                        color: COLORS.bg, fontSize: 15, fontWeight: 800,
                        cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                        boxShadow: `0 8px 32px rgba(200,135,42,0.4)`,
                        fontFamily: "inherit",
                    }}>
                        <span>🛒 View Order ({totalItems})</span>
                        <span>${cart.reduce((s, i) => s + i.total, 0).toFixed(2)}</span>
                    </button>
                </div>
            )}

            {selected && (
                <Modal item={selected} onClose={() => setSelected(null)} onAddToCart={item => { addToCart(item); setSelected(null); }} />
            )}
            {showCart && (
                <Cart items={cart} onRemove={removeFromCart} onClose={() => setShowCart(false)} onPlaceOrder={placeOrder} />
            )}
            {ordered && lastOrder && (
                <OrderSuccess items={lastOrder.items} total={lastOrder.total} onDone={() => setOrdered(false)} />
            )}
        </div>
    );
}
