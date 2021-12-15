import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';

const ProgressBar = ( { isLoading } ) => {

    return isLoading ? <CircularProgress disableShrink/> : <></>
}

export default ProgressBar;

ProgressBar.propType = {
    isLoading: PropTypes.bool,
}

ProgressBar.defaultProps = {
    isLoading: false
}