import React from 'react';
import type { iTech } from '../../type';
import TechCard from './TechCard';

const Technologies = ({technologies}) => {
   
    
    return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((technology:iTech) => (
                <TechCard  key={technology.id} technology={technology}></TechCard>
            ))}
        </div>
    );
};

export default Technologies;