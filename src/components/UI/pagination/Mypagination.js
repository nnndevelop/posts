import React from 'react'
import { getPageArray,} from './utilits/page';



const Mypagination = ({totalPage, page, changePage}) => {
  const pageArray = getPageArray(totalPage)
  return (
    <div>
         {pageArray.map(item => (
          <btn
          onClick={() => changePage(item)}
          key={item} 
          className={page === item ? ' btn btn-primary' : 'btn btn-outline-primary'}>{item}</btn>
        ))}
    </div>
  )
}

export default Mypagination