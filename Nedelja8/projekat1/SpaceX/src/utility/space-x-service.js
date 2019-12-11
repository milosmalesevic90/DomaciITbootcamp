const SPACEX_API='https://api.spacexdata.com/v3';
const LAUNCHES_PAST='/launches/past'
const LAUNCHES_UPCOMING='/launches/upcoming'
const FOOTER_API='/roadster'
const INFO_API='/info'


export function getPastLaunches(){
    return fetch(`${SPACEX_API}${LAUNCHES_PAST}`).then(res=> res.json());
}

export function getUpcomingLaunches(){
    return fetch(`${SPACEX_API}${LAUNCHES_UPCOMING}`).then(res=> res.json());
}

export function getFooterInfo(){
    return fetch(`${SPACEX_API}${FOOTER_API}`).then(res=> res.json());
}

export function getInfo(){
    return fetch(`${SPACEX_API}${INFO_API}`).then(res=> res.json());
}