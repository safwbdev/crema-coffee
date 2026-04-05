import React from 'react'
import { menu } from '../../constants/menu'
import CoffeeCard from '../CoffeeCard/CoffeeCard'
import styles from './Menu.module.scss';

const Menu = ({ setSelected }) => {
    return (
        <div className={styles.menuGrid}>
            {menu.map(item => (
                <CoffeeCard
                    key={item.id}
                    item={item}
                    onSelect={setSelected}
                />
            ))}
        </div>
    )
}

export default Menu