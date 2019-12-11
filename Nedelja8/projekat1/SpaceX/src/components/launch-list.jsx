import React from 'react';
import Launch from './launch';


//Has atribute data, which is array that uses for display
const LaunchList = (props) => {
    let {data} = props;
    return (
        <ul>
        {data.map(x=>{return <Launch launch={x} key={x.flight_number}/>})}
        </ul>
    );
}

export default LaunchList;