import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Layout.css';

const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main className='container'>
                <Outlet />
                <ScrollRestoration />
            </main>

            <footer className='footer'>
                <div className='socials-container'>
                    <a href="https://www.instagram.com/shulanika/"><img className='socials-container__item' src={require("../../assets/icons/instagram.png")} alt="insta" /></a>
                    <a href="https://t.me/nikashulanika"><img className='socials-container__item' src={require("../../assets/icons/telegram.png")} alt="telegram" /></a>
                    <a href="https://www.youtube.com/@shulanika"><img className='socials-container__item' src={require("../../assets/icons/youtube.png")} alt="youtube" /></a>
                    <a href="https://metabroadcast.ru"><img className='socials-container__item' src={require("../../assets/icons/code.png")} alt="made by" /></a>
                </div>
            </footer>
        </>
    );
};

export default Layout;