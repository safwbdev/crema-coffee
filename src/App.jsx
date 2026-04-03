import { useState } from 'react'
import { Cart, OrderSuccess } from './screens/Index';
import styles from './App.module.scss';
import {
  Modal,
  Header,
  Hero,
  Menu,
  CartFAB
} from './components/Index'


function App() {
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [ordered, setOrdered] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);

  const addToCart = (item) => setCart(c => [...c, item]);
  const removeFromCart = (cartId) => setCart(c => c.filter(i => i.cartId !== cartId));
  const placeOrder = () => {
    setLastOrder({ items: cart, total: cart.reduce((s, i) => s + i.total, 0) });
    setCart([]);
    setShowCart(false);
    setOrdered(true);
  };

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className={styles.app}>
      <Header totalItems={totalItems} setShowCart={setShowCart} />
      <Hero />
      <Menu setSelected={setSelected} />
      {totalItems > 0 && !showCart && (
        <CartFAB
          cart={cart}
          totalItems={totalItems}
          setShowCart={setShowCart} />
      )}
      {selected && (
        <Modal
          item={selected}
          onClose={() => setSelected(null)}
          onAddToCart={item => { addToCart(item); setSelected(null); }} />
      )}
      {showCart && (
        <Cart
          items={cart}
          onRemove={removeFromCart}
          onClose={() => setShowCart(false)}
          onPlaceOrder={placeOrder} />
      )}
      {ordered && lastOrder && (
        <OrderSuccess
          items={lastOrder.items}
          total={lastOrder.total}
          onDone={() => setOrdered(false)} />
      )}
    </div>
  );
}

export default App
