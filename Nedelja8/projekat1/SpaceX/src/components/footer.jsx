import React, { useState, useEffect } from 'react';
import { getFooterInfo } from '../utility/space-x-service';


const Footer = (props) => {
    const [displayData, setDisplayData] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        getFooterInfo().then(data => {
            setData(data);
            setDisplayData(data);
        })
    }, [])

    return (
        <footer>
            <p>{data.name}<br />{data.orbit_type}<br />{data.details}</p>
        </footer>
    );

}
export default Footer