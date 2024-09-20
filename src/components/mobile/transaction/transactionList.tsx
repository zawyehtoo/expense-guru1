import React from 'react'
import {transactions} from '@/utils/data';
import InfiniteScroll from 'react-infinite-scroll-component';

const TransactionList = ({className}: {className?: string}) => {
  return (
    <div className={`${className} overflow-auto w-full p-4 h-full`}  id='scrollableDiv'>
      {/* <InfiniteScroll dataLength={transactions.length}/> */}
    </div>
  )
}

export default TransactionList