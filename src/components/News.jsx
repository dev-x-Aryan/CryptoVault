import {useState, useEffect} from 'react';
import {options, newsApi} from '../services/newsApi';
import Pagination from './Pagination';
import ClipLoader from "react-spinners/ClipLoader";

const News = ({loading, setLoading}) => {

    const [cryptoNews,setCryptoNews] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const resultsPerPage = 8;
    let indLastPage = currentPage * resultsPerPage;
    let indFirstPage = indLastPage - resultsPerPage;
    
    useEffect(()=>{
        setLoading(true);
        const fetchData = async()=>{
            const url = 'https://h-crypto-news.p.rapidapi.com/cryptonews';
            const data = await newsApi(url,options);
            if(data){
                setCryptoNews(data);
            }
            setLoading(false);
        }

        fetchData();
    },[currentPage,setLoading])

    const currentNews = Array.isArray(cryptoNews) ? cryptoNews.slice(indFirstPage, indLastPage): [];
    

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
            <div className="news">
                <h2>Stay Informed, Stay Ahead: Your Daily Dose of News</h2>
                <div className='news-cotainer'>
                        { currentNews.map((item)=>(
                            <div className='news-card' key={item.id}>
                                <h3>{item.title}</h3>
                                <p>Visit: </p>
                                <a href={item.url}> {item.url}</a>
                                
                            </div>
                        ))}
                </div>
                <Pagination 
                    resultsPerPage = {resultsPerPage}
                    currentPage={currentPage}
                    setCurrentPage = {setCurrentPage}
                    totalPages = {Math.ceil(cryptoNews.length / resultsPerPage)}
                />
            </div>
        }</>
    );
}
export default News;