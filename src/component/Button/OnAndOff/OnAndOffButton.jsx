import React from 'react';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';

const OnAndOffButton = ( {title, selected, handlerClick } ) => {
    return (
        <>
            <Chip label={title} onClick={handlerClick} color={selected ? "primary" : "default"} clickable />
        </>
    )
}

OnAndOffButton.propType = {
    title: PropTypes.string,
    selected: PropTypes.bool,
    handlerClick: PropTypes.func
}

OnAndOffButton.defaultProps = {
    title: '',
    selected: false
}

export default OnAndOffButton