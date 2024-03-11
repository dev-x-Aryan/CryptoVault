import { useEffect, useState } from "react";
import {options, cryptoApi} from '../services/cryptoApi';
import millify from 'millify';

const Home = () => {

    const [cryptoData, setCryptoData] = useState({});
    const [cryptoCurrency, setCryptoCurrency] = useState([]);
    useEffect(()=>{
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
        }

        fetchData();
        fetchCryptoData();
    },[])

    return ( 
        <div className="home">
            <h2>Global Crypto Stats</h2>
            {cryptoData &&(
            <ul className='stats'>
                <li>Total Cryptocurrencies: <span> {millify(cryptoData.total)} </span> </li>
                <li>Total Exchanges: <span> {millify(cryptoData.totalExchanges)} </span></li>
                <li>Total MarketCap: <span> {millify(cryptoData.totalMarketCap)} </span></li>
                <li>Total Market: <span> {millify(cryptoData.totalMarkets)} </span></li>
                <li>Total 24h Volume: <span> {millify(cryptoData.total24hVolume)} </span></li>
            </ul>
            )}
            <div className="crypto-container">
                <h2>Top 10 Crypto-currencies</h2>
                <div className="crypto-list">
                    {cryptoCurrency.map((item)=>(
                        <div className="crypto-card" key={item.uuid}>
                            <div className="crypto-header">
                                <div className="header-name">  <h3>{item.rank}. {item.name} </h3> </div>
                                <div> <img src={item.iconUrl} alt="logo" className="logo-img"></img></div>
                            </div>
                            <div className="crypto-details">
                                <p>Price: {millify(item.price)}</p>
                                <p>Market Cap: {millify(item.marketCap)}</p>
                                <p>Daily Change: {item.change}</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Home;