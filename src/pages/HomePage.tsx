import React from 'react'
import CoinsList from './CoinsList'
import CoinBanner from './CoinBanner'

type Props = {}

function HomePage({}: Props) {
  return (
    <div className='w-full h-full'>
      <CoinBanner/>
      <CoinsList/>
    </div>
  )
}

export default HomePage