import  { useState, type Dispatch, type SetStateAction } from 'react';
import type { iTech } from '../../type';

interface TechCardProps{
    technology:iTech,
     selectedTech:iTech[],
    setSelectedTech:Dispatch<SetStateAction<iTech[]>>
}
const TechCard = ({technology,selectedTech,setSelectedTech}:TechCardProps) => {
    const [addToStack,setAddToStack]=useState(false)

    const handleAddtoStack=()=>{
        setAddToStack(true)
        setSelectedTech([...selectedTech,technology])
    }

    return (
        <div>
            <div
                   
                    className="border border-gray-200 rounded-xl p-4 bg-white"
                >
                    <div className="flex items-start justify-between">
                        <img
                            src={technology.icon}
                            alt={technology.name}
                            className="w-7 h-7"
                        />

                        <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-500">
                            {technology.badge}
                        </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mt-5">
                        {technology.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2 leading-5">
                        {technology.description}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {technology.category}
                        </span>

                        <span className="text-xs text-gray-500">
                            {technology.difficulty}
                        </span>

                        <span className="text-sm text-gray-700">
                            ⭐ {technology.rating}
                        </span>
                    </div>

                    <button onClick={handleAddtoStack} className={`w-full ${addToStack?"bg-pink-600":"bg-[#080d1d]"}  text-white text-sm py-2.5 rounded-md mt-4`}>
                        {addToStack?"Added to Stack":"Add to Stack"}
                    </button>
                </div>
        </div>
    );
};

export default TechCard;