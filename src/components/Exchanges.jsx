import {useState, useEffect} from 'react';
import {options, exchangesApi} from '../services/exchangesApi'

const Exchanges = () => {

    const[exchanges, setExchanges] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const url= 'https://api.coingecko.com/api/v3/exchanges';
            const data = await exchangesApi(url,options);
            setExchanges(data);
            console.log(data);
        }

        fetchData();
    },[])

    return (  
        <div className="exchanges">
            <h2>List of Exchanges</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Icon</th>
                        <th>Country</th>
                        <th>Trade Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {exchanges.map((exchange)=>(
                        <tr key={exchange.id}>
                            <td>{exchange.name}</td>
                            <td><img src={exchange.image} alt="icon" /></td>
                            <td>{exchange.country}</td>
                            <td>{exchange.trade_volume_24h_btc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
       </div>
    );
}
 
export default Exchanges;