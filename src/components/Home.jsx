import { useEffect, useState } from "react";
import {options, cryptoApi} from '../services/cryptoApi';
import millify from 'millify';
import Card from './Card';

const Home = ({setLoading}) => {

    const [cryptoData, setCryptoData] = useState({});
    const [cryptoCurrency, setCryptoCurrency] = useState([]);
    useEffect(()=>{
        setLoading(true);
        const fetchData = async()=>{
            const url= 'https://coinranking1.p.rapidapi.com/coins'
            const data = await cryptoApi(url,options);
            if(data && data.data && data.data.stats){
                setCryptoData(data.data.stats);
            }
        }

        const fetchCryptoData = async()=>{
            const coinUrl= 'https://coinranking1.p.rapidapi.com/coins?limit=10'
            const res =  await cryptoApi(coinUrl,options);
            if(res && res.data && res.data.coins){
                setCryptoCurrency(res.data.coins)
                console.log(res.data.coins)
            }
            setLoading(false);
        }
        
        fetchData();
        fetchCryptoData();
    },[setLoading])

    return ( 
        <div className="home">
            <h2>Global Crypto Stats</h2>
            {cryptoData &&(
            <ul className='stats'>
                <li>
                    <span className="label">Total Cryptocurrencies:</span>
                    <span className="value"> {millify(cryptoData.total)} </span>
                </li>
                <li>
                    <span className="label">Total Exchanges:</span>
                    <span className="value"> {millify(cryptoData.totalExchanges)} </span>
                </li>
                <li>
                    <span className="label">Total MarketCap:</span>
                    <span className="value"> {millify(cryptoData.totalMarketCap)} </span>
                </li>
                <li>
                    <span className="label">Total Market:</span>
                    <span className="value"> {millify(cryptoData.totalMarkets)} </span>
                </li>
                <li>
                    <span className="label">Total 24h Volume:</span>
                    <span className="value"> {millify(cryptoData.total24hVolume)} </span>
                </li>
            </ul>
            )}
            <div className="crypto-container">
                <h2>Top 10 Crypto-currencies</h2>
                <Card cryptoCurrency={cryptoCurrency}/>
            </div>
        </div>
     );
}
 
export default Home;