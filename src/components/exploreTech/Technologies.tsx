import type { iTech } from '../../type';
import TechCard from './TechCard';
interface technologiesProps{
    technologies:iTech[]
}
const Technologies = ({technologies}:technologiesProps) => {
   
    
    return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((technology:iTech) => (
                <TechCard  key={technology.id} technology={technology}></TechCard>
            ))}
        </div>
    );
};

export default Technologies;