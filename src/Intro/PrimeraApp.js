import React from 'react';
// import PropTypes from 'prop-types';

const PrimeraApp = ({personajes}) =>{

    return (
        <>
            <h1> Holandina, {personajes} </h1>
            Todo fine?
        </>
    );

}

PrimeraApp.defaultProps = {
    personajes : 'Mike Wazawski'
}

export default PrimeraApp;
