import { Link, useLocation } from 'react-router-dom';

export const Menu: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="menu">
            <Link className={`menu__item ${location.pathname === '/' ? 'menu__item-active' : ''}`} to="/">
                Главная
            </Link>
            <Link className={`menu__item ${location.pathname === '/drift' ? 'menu__item-active' : ''}`} to="/drift">
                Дрифт-такси
            </Link>
            <Link className={`menu__item ${location.pathname === '/timeattack' ? 'menu__item-active' : ''}`} to="/timeattack">
                Time Attack
            </Link>
            <Link className={`menu__item ${location.pathname === '/forza' ? 'menu__item-active' : ''}`} to="/forza">
                Forza Karting
            </Link>
        </nav>
    );
}