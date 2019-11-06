import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCoinDetails, fetchPairs, changeOrderMode } from 'Actions';
import Hero from './Hero/Hero';
import Articles from './Articles/Articles';
import PriceChart from './PriceChartNext';
import RecentOrders from './RecentOrders/RecentOrders';

const Pair = (props) => {

  const { fetchCoinDetails, fetchPairs, match } = props
  const { tradingSymbolPair: pair } = match.params

  useEffect(() => {
    fetchCoinDetails()
    fetchPairs()
  }, [pair])
  
  return (
    <div>
      <Hero {...props} />
      <PriceChart pair={pair}/>
      <RecentOrders {...props} />
      <Articles {...props} />
      {/* TODO Referral Program Widget */}
      {/* TODO API Access Widget */}
    </div>
  );
}


const mapStateToProps = ({ orderMode, coinsInfo, selectedCoin }) => ({ orderMode, coinsInfo, selectedCoin });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchCoinDetails, fetchPairs, changeOrderMode }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pair);
