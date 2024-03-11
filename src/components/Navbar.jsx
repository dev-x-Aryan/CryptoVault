import {Link} from 'react-router-dom';
import logo from '../images/crypto-logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faNewspaper, faBitcoinSign, faCoins } from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {
    return ( 
        <nav className="nav-container">
            <div className="nav-header">
                <img src={logo} alt="logo" className='logo'></img>
                <Link to="/" className='logo-text'>CryptoVault</Link>
            </div>
            <ul className='list'>
                <li className='list-items'><button><FontAwesomeIcon icon={faHouse} /> Home</button></li>
                <li className='list-items'><button><FontAwesomeIcon icon={faCoins} /> Exchanges</button></li>
                <li className='list-items'><button><FontAwesomeIcon icon={faBitcoinSign} /> Crypto</button></li>
                <li className='list-items'><button><FontAwesomeIcon icon={faNewspaper} /> News</button></li>
            </ul>
        </nav>
     );
}
 
export default Navbar
