import {useState, useEffect} from 'react';
import {options, newsApi} from '../services/newsApi';
import Pagination from './Pagination';

const News = () => {

    const [cryptoNews,setCryptoNews] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const resultsPerPage = 8;
    let indLastPage = currentPage * resultsPerPage;
    let indFirstPage = indLastPage - resultsPerPage;
    
    useEffect(()=>{
        const fetchData = async()=>{
            const url = 'https://h-crypto-news.p.rapidapi.com/cryptonews';
            const data = await newsApi(url,options);
            if(data){
                setCryptoNews(data);
            }
        }

        fetchData();
    },[currentPage])

    const currentNews = Array.isArray(cryptoNews) ? cryptoNews.slice(indFirstPage, indLastPage): [];
    

    return ( 
        <div className="news">
            <h2>Stay Informed, Stay Ahead: Your Daily Dose of News</h2>
            <div className='news-cotainer'>
                    { currentNews.map((item)=>(
                        <div className='news-card' key={item.id}>
                            <h3>{item.title}</h3>
                            <p>Visit site: {item.url}</p>
                        </div>
                    ))}
            </div>
            <Pagination 
                resultsPerPage = {resultsPerPage}
                setCurrentPage = {setCurrentPage}
                totalPages = {Math.ceil(cryptoNews.length / resultsPerPage)}
            />
        </div>
    );
}
export default News;