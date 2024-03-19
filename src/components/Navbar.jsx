import {Link, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faNewspaper, faBitcoinSign, faCoins,faCentSign } from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {
    const location = useLocation();
    return ( 
        <nav className="nav-container">
            <div className="nav-header">
                <Link to="/" className='logo-text'><FontAwesomeIcon icon={faCentSign} className='logo'/>CryptoVault</Link>
            </div>
            <ul className='list'>
                <li className={`list-items ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to="/"><button><FontAwesomeIcon icon={faHouse} className='list-items-logo'/> Home</button></Link>
                </li>
                <li className={`list-items ${location.pathname === '/exchanges' ? 'active' : ''}`}>
                    <Link to="/exchanges"><button><FontAwesomeIcon icon={faCoins} className='list-items-logo'/> Exchanges</button></Link>
                </li>
                <li className={`list-items ${location.pathname === '/crypto' ? 'active' : ''}`}>
                    <Link to="/crypto"><button><FontAwesomeIcon icon={faBitcoinSign} className='list-items-logo'/> Crypto</button></Link>
                </li>
                <li className={`list-items ${location.pathname === '/news' ? 'active' : ''}`}>
                    <Link to="/news"><button><FontAwesomeIcon icon={faNewspaper} className='list-items-logo'/> News</button></Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar
