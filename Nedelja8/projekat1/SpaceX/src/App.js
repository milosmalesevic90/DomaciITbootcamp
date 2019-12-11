import React, { useState } from 'react';
import './App.css';
import PastLList from './components/past-l-list';
//import { getPastLaunches, getUpcomingLaunches } from './utility/space-x-service';
import UpcomingLList from './components/upcoming-l-list';
import Content from './layout/content';
import Footer from './components/footer'
import Header from './layout/header';

function App() {
  
  //const [pastData,setPastData]=useState([])
  //const [upcomingData, setUpcomingData] = useState([])



  // getPastLaunches().then(data=>{
  //   setPastData(data);
  // })
  // getUpcomingLaunches().then(data=>{
  //   setUpcomingData(data);
  // })

  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
