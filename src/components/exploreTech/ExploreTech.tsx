import { use } from 'react';
import Technologies from './Technologies';
import YourStack from './YourStack';
import type { iTech } from '../../type';
interface techProps{
   technologiesPromise:Promise<iTech[]> 
}

const ExploreTech = ({technologiesPromise}:techProps) => {
    const technologies=use(technologiesPromise)
  
    
    
    return (
        <div className='grid md:grid-cols-12 lg:grid container mx-auto'>
            <div className='md:col-span-9 lg:col-span-9'>
                <Technologies technologies={technologies}></Technologies> 
            </div>
            <div className='md:col-span-3 lg:col-span-3'>
                <YourStack></YourStack>
            </div>
           
           
        </div>
    );
};

export default ExploreTech;