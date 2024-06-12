import React, { useState } from 'react';
import axios from 'axios';

const AudienceForm = () => {
    const [rules, setRules] = useState([]);
    const [currentRule, setCurrentRule] = useState({
        field: '',
        condition: '',
        value: ''
    });

    const handleChange = (e) => {
        setCurrentRule({
            ...currentRule,
            [e.target.name]: e.target.value,
        });
    };

    const addRule = () => {
        setRules([...rules, currentRule]);
        setCurrentRule({ field: '', condition: '', value: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/audience', { rules });
        alert('Audience created successfully.');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="field"
                value={currentRule.field}
                onChange={handleChange}
                placeholder="Field"
            />
            <input
                type="text"
                name="condition"
                value={currentRule.condition}
                onChange={handleChange}
                placeholder="Condition"
            />
            <input
                type="text"
                name="value"
                value={currentRule.value}
                onChange={handleChange}
                placeholder="Value"
            />
            <button type="button" onClick={addRule}>Add Rule</button>
            <button type="submit">Submit</button>
            <div>
                <h3>Current Rules:</h3>
                <ul>
                    {rules.map((rule, index) => (
                        <li key={index}>{rule.field} {rule.condition} {rule.value}</li>
                    ))}
                </ul>
            </div>
        </form>
    );
};

export default AudienceForm;
