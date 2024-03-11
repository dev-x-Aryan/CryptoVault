const Pagination = ({resultsPerPage, setCurrentPage, totalPages}) => {
    
    let pages = [];
    for (let i=1;i<=totalPages;i++){
        pages.push(i);
    }

    return (  
        <div>
            {pages.map((page, index)=>{
                return <button key={index} onClick={()=> setCurrentPage({page})}>{page}</button>
            })}
        </div>
    );
}
 
export default Pagination;