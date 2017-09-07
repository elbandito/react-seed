import React from 'react'
import PropTypes from 'prop-types'

import '../stylesheets/style.scss';

class Simple extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className=''>
                <h1>Simple Component</h1>
            </div>
        );
    }
}

Simple.propTypes = {
    //markerLat: PropTypes.number.isRequired,
    //markerLng: PropTypes.number.isRequired
};

export { Simple };
export default Simple;
