const Pagination = ({resultsPerPage, setCurrentPage, totalPages,currentPage}) => {
    
    let pages = [];
    for (let i=1;i<=totalPages;i++){
        pages.push(i);
    }

    return (  
        <div className="pagination-container">
            {pages.map((page, index)=>{
                return <button 
                        key={index} 
                        onClick={()=> setCurrentPage(page)}
                        className={currentPage === page ? "active" : ""}>{page}</button>
            })}
        </div>
    );
}
 
export default Pagination;