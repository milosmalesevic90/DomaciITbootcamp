import React, { useState, useEffect } from 'react'
import { getInfo } from '../utility/space-x-service'


const Header =(props)=>{
    const[displayData,setDisplayData]=useState([])
    const[data,setData]=useState([])
    useEffect(()=>{
        getInfo().then(data=>{
            setData(data);
            setDisplayData(data);
        })

    },[]
    )
    return (
        <header>
            <h1>{data.name}<br/>{data.ceo}</h1>
        </header>
    )

}

export default Header