import react from 'react'
import './pagination.css'
const Pagination=({rows,total,setPage}) =>
{
    const pages=[];
    for(let i=1;i<=Math.ceil(total/rows);i++)
    pages.push(i);
    return(
        <div className='page'>
            {pages.map((page,index)=>
            (
                <button key={index} className='pagination' onClick={()=>setPage(index+1)}
                >{page}</button>
            ))}
        </div>
    )
}
export default Pagination;