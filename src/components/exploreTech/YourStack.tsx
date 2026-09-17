import type { Dispatch, SetStateAction } from "react";
import type { iTech } from "../../type";

interface iStackProps {
    selectedTech: iTech[],
    setSelectedTech: Dispatch<SetStateAction<iTech[]>>
}

const YourStack = ({ selectedTech, setSelectedTech }: iStackProps) => {

    const handleRemove=(tech:iTech)=>{
        const restTech=selectedTech.filter(singleTech=>singleTech.id!==tech.id)
       
        setSelectedTech(restTech)
        
    }
    const handleRemoveAll=()=>{
        setSelectedTech([])
    }

    return (
        <div className="border border-gray-200 rounded-2xl p-6 bg-white">

            <h2 className="text-xl font-bold text-gray-900">
                Your Stack
            </h2>

            <p className="text-sm text-gray-400 mt-1 mb-5">
                {selectedTech.length} Technology Selected
            </p>

            <div className="space-y-2">
                {selectedTech.map((tech) => (
                    <div
                        key={tech.id}
                        className="border border-gray-200 rounded-xl p-3 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">

                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-9 h-9 object-contain"
                            />

                            <div>
                                <h3 className="text-sm font-semibold">
                                    {tech.name}
                                </h3>

                                <p className="text-xs text-gray-400">
                                    {tech.category}
                                </p>
                            </div>

                        </div>

                        {/* Remove functionality later */}
                        <span
                        onClick={()=>handleRemove(tech)}
                        className="text-gray-400 text-xl">
                            ×
                        </span>

                    </div>
                ))}
            </div>

            <button
            onClick={handleRemoveAll}
                className="w-full mt-8 border border-red-300 text-red-500 rounded-xl py-2.5 font-semibold"
            >
                Remove All
            </button>

        </div>
    );
};

export default YourStack;