import React from 'react';
import './skillelement.css';

const SkillElement = ({ title, color }) => {
    return (
        <div className = 'skillelement' style = {{ background: color }}>
            <h3>{ title }</h3>         
        </div>
    );
};

export default SkillElement;