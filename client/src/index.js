import React from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';

import history from './history';

// Ascyn Await get or post requests
import 'regenerator-runtime/runtime'

// Bootstrap-css and local index.css
// import './hd.css';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTS
import App from './components/App';
import Login from './components/Login';
import Terms from './components/Terms';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import SignIn from './components/SignIn';
import AddTask from './components/AddTask';
import ViewTask from './components/ViewTask';
import Home from './components/Home';
import updateName from './components/updateName';
import updatePassword from './components/updatePassword';
import ClinicDetails from './components/ClinicDetails';
import Booking from './components/Booking';
import HomeDoctor from './components/HomeDoctor';
import PreviousBooking from './components/PreviousBooking';
import AdminPanel from './components/AdminPanel';
import DeveloperInfo from './components/DeveloperInfo';
import Faq from './components/Faq';
import ContactUs from './components/ContactUs';

render(
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/Login' component={Login} />
            <Route path='/ContactUs' component={ContactUs} />
            <Route exact path='/PrivacyPolicy' component={PrivacyPolicy} />
            <Route exact path='/AboutUs' component={AboutUs} />
            <Route path='/Terms' component={Terms} />
            <Route path='/SignIn' component={SignIn} />
            <Route path='/AddTask' component={AddTask} />
            <Route path='/ViewTask' component={ViewTask} />
            <Route path='/home' component={Home} />
            <Route path='/updateName' component={updateName} />
            <Route path='/updatePassword' component={updatePassword} />
            <Route path='/ClinicDetails' component={ClinicDetails} />
            <Route path='/Booking' component={Booking} />
            <Route path='/HomeDoctor' component={HomeDoctor} />
            <Route path='/PreviousBooking' component={PreviousBooking} />
            <Route path='/AdminPanel' component={AdminPanel} />
            <Route path='/DeveloperInfo' component={DeveloperInfo} />
            <Route path='/Faq' component={Faq} />
            <Route path='/ContactUs' component={ContactUs} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
