import React from 'react'
import Navigation from '../Home/Navigation'
import AvgWatchTimePerCountry from './AvgWatchTimePerCountry'
import Bandwidth from './Bandwidth'
import Requests from './Request'
import Views from './Views'
import ViewsPerCountry from './ViewsPerCountry'
import WatchTime from './WatchTime'

const Statistics = () => {
  return (
    <div>
      <Navigation />
      <Views />
      <WatchTime />
      <ViewsPerCountry />
      <AvgWatchTimePerCountry />
      <Bandwidth />
      <Requests />
    </div>
  )
}

export default Statistics