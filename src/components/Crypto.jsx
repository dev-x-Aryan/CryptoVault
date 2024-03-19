import { useEffect, useState } from "react";
import {options, cryptoApi} from '../services/cryptoApi';
import Card from './Card';
import ClipLoader from "react-spinners/ClipLoader";

const Crypto = ({loading, setLoading}) => {

    const [cryptoCurrency, setCryptoCurrency] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    useEffect(()=>{
        setLoading(true);
        const fetchCryptoData = async()=>{
            const coinUrl= 'https://api.coinranking.com/v2/coins?limit=100'
            const res =  await cryptoApi(coinUrl,options);
            if(res && res.data && res.data.coins){
                setCryptoCurrency(res.data.coins)
                console.log(res.data.coins)
            }
            setLoading(false);
        }
        fetchCryptoData();
    },[setLoading])

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    useEffect (()=>{
        const filteredResults =  cryptoCurrency.filter(crypto=>(
            crypto.name.toLowerCase().includes(search.toLowerCase())))
        
        setSearchResults(filteredResults);
    },[search,cryptoCurrency])

    return (  
        <>
        { loading?
        <ClipLoader
        color="#000000"
        loading={loading}
        cssOverride={{marginLeft:'50%', marginTop:'20%'}}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />:
        <div className="crypto">
            <div className="search-container">
                <input 
                    type="text"
                    placeholder="Search for a cryptocurrency"
                    value={search}
                    onChange = {handleSearch}
                    className="searchbar"
                />
            </div>
            
            <Card cryptoCurrency={searchResults}/>
        </div>
        }</>
    );
}
 
export default Crypto;