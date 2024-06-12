import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CampaignList = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        const fetchCampaigns = async () => {
            const response = await axios.get('/api/campaigns');
            setCampaigns(response.data);
        };

        fetchCampaigns();
    }, []);

    return (
        <div>
            <h2>Campaign List</h2>
            <ul>
                {campaigns.map((campaign) => (
                    <li key={campaign.id}>
                        {campaign.name}: {campaign.status} - {campaign.sent}/{campaign.failed} (Audience Size: {campaign.audienceSize})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CampaignList;
