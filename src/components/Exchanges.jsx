import {useState, useEffect} from 'react';
import {options, exchangesApi} from '../services/exchangesApi'
import ClipLoader from "react-spinners/ClipLoader";

const Exchanges = ({setLoading, loading}) => {

    const[exchanges, setExchanges] = useState([]);
    useEffect(()=>{
        setLoading(true);
        const fetchData = async()=>{
            const url= 'https://api.coingecko.com/api/v3/exchanges';
            const data = await exchangesApi(url,options);
            setExchanges(data);
            setLoading(false);
        }

        fetchData();
    },[setLoading])

    return (  
        <>
            {loading? 
            <ClipLoader
            color="#000000"
            loading={loading}
            cssOverride={{marginLeft:'50%', marginTop:'20%'}}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
                />:
            <div className='exchanges'>
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
    }</>
    );
}
 
export default Exchanges;