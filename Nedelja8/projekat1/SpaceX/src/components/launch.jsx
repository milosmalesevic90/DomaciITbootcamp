import React from 'react';
import getSerbianDate from '../utility/date-utility'

///Has atribute launch,which has info about one launch
const Launch = (props) => {
    let { launch } = props;
    let { mission_name: m_name,
        launch_year: l_year,
        launch_date_utc: l_date,
        rocket:
        { rocket_name: r_name },
        links: { mission_patch: m_patch }

    } = launch;

    let date = new Date(l_date);

    return (
        <li>
             <img src={m_patch} className={'mission_logo'} />
            <label>{m_name}</label>
            
            <label>{getSerbianDate(date)}</label>
            <label>{r_name}</label>
        </li>

    );
}

export default Launch