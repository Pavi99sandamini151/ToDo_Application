import React from 'react';
// @ts-ignore
import PropTypes from "prop-types;"

// @ts-ignore
function Greeter(props) {
    return (
        <>

            <h1>Greeter, {props.name}</h1>

        </>
    );
}

Greeter.propTypes = {
    name: PropTypes.string.isRequired,
};
export default Greeter;
