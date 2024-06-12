import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';
import OrderForm from './components/OrderForm';
import AudienceForm from './components/AudienceForm';
import CampaignList from './components/CampaignList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/customers" component={CustomerForm} />
                <Route path="/orders" component={OrderForm} />
                <Route path="/audience" component={AudienceForm} />
                <Route path="/campaigns" component={CampaignList} />
            </Routes>
        </Router>
    );
};

export default App;
