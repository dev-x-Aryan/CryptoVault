import millify from 'millify';

const Card = ({cryptoCurrency}) => {
    return (  
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
    );
}
 
export default Card;