import styles from './paginator.module.css';

import React, { useState } from 'react';
import cn from "classnames";
type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pages: number) => void
    portionSize?: number
}
let Paginatir: React.FC<PropsType> = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNamber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNamber - 1) * portionSize + 1;
    let righPortionPageNumber = portionNamber * portionSize;
    debugger;
    return (<div className={styles.paginator}>
        ---
        {portionNamber > 1 &&
            <button onClick={() => { setPortionNumber(portionNamber - 1) }}>PREV</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= righPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p);
                    }}>{p}</span>
            })}
        {portionCount > portionNamber &&
            <button onClick={() => { setPortionNumber(portionNamber + 1) }}>NEXT</button>}
        ---
    </div>)

}
export default Paginatir;