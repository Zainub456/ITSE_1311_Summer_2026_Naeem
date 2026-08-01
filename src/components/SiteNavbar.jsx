import { Link } from 'react-router-dom';

export default function SiteNavbar() {
    return (
        <nav>
            <ul style={{ display: 'flex', listStyleType: 'none', gap: '20px', padding: 0}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/reservations"> Reservations</Link>

                </li>
            </ul>
        </nav>
    );
}
