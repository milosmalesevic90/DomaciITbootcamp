import React from 'react';
import PastLList from '../components/past-l-list';
import UpcomingLList from '../components/upcoming-l-list';
import { BrowserRouter as Router, Switch, Link ,Route} from 'react-router-dom';


const Content = () => {

    
        return (
            <Router>
        <ul>
            <li><Link to={'/'}>Past Launches</Link></li>
            <li><Link to={'/future'}>Upcoming Launches</Link></li>
        </ul>
        <Switch>
            <Route exact path='/'component={PastLList}/>
            <Route exact path='/future'component={UpcomingLList}/>
        
        </Switch>
    </Router>
    );
}
export default Content;