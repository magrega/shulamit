import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if (window.innerWidth < 870) setIsActive(current => !current);
    }

    useEffect(() => {
        document.body.style.overflow = isActive ? 'hidden' : 'unset';
        window.matchMedia("(orientation: landscape)").addEventListener("change", e => {
            if (e.matches) {
                setIsActive(false);
                document.body.style.overflow = 'unset';
            }
        });
    }, [isActive]);

    return (
        <nav className="navbar__container">
            <ul className={isActive ? 'navbar__list active' : 'navbar__list'}>
                <li className='navbar__li'><a className='navbar__a' href="https://www.shulanika.ru/">На главную</a></li>
                <li className='navbar__li'><a className='navbar__a' href="https://www.shulanika.ru/internet-magazin">Интернет-магазин</a></li>
                <li className='navbar__li'><a className='navbar__a' href="https://www.shulanika.ru/internet-magazin#contacts-shop">Контакты</a></li>
                <li className='navbar__li'><NavLink onClick={handleClick} className='navbar__a' to="/intro">Знакомство с картами</NavLink></li>
                <li className='navbar__li'><NavLink onClick={handleClick} className='navbar__a' to="/interact">Работа с картами</NavLink></li>

            </ul>
            <div className="navbar__mobile">
                <span className='navbar__title'><a className='navbar__a' href="https://shulanika.ru/">shulanika.ru</a></span>
                <div className={isActive ? 'navbar__burger active' : 'navbar__burger'} onClick={handleClick}>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;