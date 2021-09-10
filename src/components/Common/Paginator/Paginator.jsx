import React, {useState} from "react";
import styles from './Paginator.module.css'
import cn from 'classnames'

const Paginator=({totalItemsCount,pageSize,onPageChanged,currentPage,portionSize=10})=>{
    let totalPages = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    let portionCount=Math.ceil(totalPages/portionSize);
let [portionNumber,setPortionNumber]=useState(1);
    let leftPortionPageNumber=(portionNumber-1)*portionSize+1;
     let  rightPortionPageNumber =portionNumber*portionSize;

    return <div className={cn(styles.paginator)}>

        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

            {pages
                .filter(p=> p<=rightPortionPageNumber && p>=leftPortionPageNumber)
                .map(p => {
                return <span className={ cn({[styles.selectedPage]:currentPage === p},styles.pageNumber)}
                             onClick={() => onPageChanged(p)}
                             key={p}
                >{p}</span>
            })}

        { portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }

        </div>
    }

/*const Paginator=({totalUserCount,pageSize,onPageChanged,currentPage,...props})=>{
    let totalPages = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return <div>

        {pages.map(p => {
            return <span onClick={() => onPageChanged(p)}
                         className={currentPage === p && styles.selectedPage}>{p}</span>
        })}
    </div>
}*/


export default Paginator;