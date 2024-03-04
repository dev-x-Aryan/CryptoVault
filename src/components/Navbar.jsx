import {Link} from 'react-router-dom';
import logo from '../images/crypto-logo2.png'

const Navbar = () => {
    return ( 
        <nav className="nav-container">
            <div className="nav-header">
                <img src={logo} alt="logo" className='logo'></img>
                <Link to="/" className='logo-text'>CryptoVault</Link>
            </div>
            <ul className='list'>
                <li className='list-items'><button>Home</button></li>
                <li className='list-items'><button>Exchanges</button></li>
                <li className='list-items'><button>Cryptocurrency</button></li>
                <li className='list-items'><button>News</button></li>
            </ul>
        </nav>
     );
}
 
export default Navbar
