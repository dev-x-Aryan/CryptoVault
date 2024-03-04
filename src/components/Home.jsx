import { useEffect, useState } from "react";
import {options, cryptoApi} from '../services/cryptoApi';

const Home = () => {

    const [cryptoData, setCryptoData] = useState('');
    useEffect(()=>{
        const fetchData = async()=>{
            const url= 'https://coinranking1.p.rapidapi.com/'
            const data = await cryptoApi(url,options);
        }
    })

    return ( 
        <div className="home">
            <h2>Global Crypto Stats</h2>
            
            <ul className='stats'>
                <li>Total Cryptocurrencies: {} </li>
                <li>Total Exchanges</li>
                <li>Total MarketCap</li>
                <li>Total Market</li>
                <li>Total 24h</li>
            </ul>
        </div>
     );
}
 
export default Home;