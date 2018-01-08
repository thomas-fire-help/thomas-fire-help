import React from 'react'
import Loader from 'react-loader'

const LoadingSpinner = ({ children, loading }) => (
  <Loader loaded={!loading} lines={13} length={10} width={2}>
    {children}
  </Loader>
);

export default LoadingSpinner;
