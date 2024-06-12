import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';
import OrderForm from './components/OrderForm';
import AudienceForm from './components/AudienceForm';
import CampaignList from './components/CampaignList';

const AppRoutes = () => (
    <Routes>
        <Route path="/customers" element={<CustomerForm />} />
        <Route path="/orders" element={<OrderForm />} />
        <Route path="/audience" element={<AudienceForm />} />
        <Route path="/campaigns" element={<CampaignList />} />
    </Routes>
);

export default AppRoutes;
