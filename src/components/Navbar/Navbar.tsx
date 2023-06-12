import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => { 
        document.body.style.overflow = isActive ? 'unset' : 'hidden';
        setIsActive(current => !current);
    }

    return (
        <nav className="navbar__container">
            <ul className={isActive ? 'navbar__list active' : 'navbar__list'}>
                <li className='navbar__li'><a className='navbar__a' href="https://www.shulanika.ru/">На главную</a></li>
                <li className='navbar__li'><a className='navbar__a' href="https://www.shulanika.ru/internet-magazin">Интернет-магазин</a></li>
                <li className='navbar__li'><a className='navbar__a' href="https://www.shulanika.ru/internet-magazin#contacts-shop">Контакты</a></li>
            </ul>
            <div className="navbar__mobile">
                <span className='navbar__title'>shulanika.ru</span>
                <div className={isActive ? 'navbar__burger active' : 'navbar__burger'} onClick={handleClick}>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;