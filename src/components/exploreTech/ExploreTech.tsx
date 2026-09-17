import { use, useState } from "react";
import Technologies from "./Technologies";
import YourStack from "./YourStack";
import type { iTech } from "../../type";
interface techProps {
  technologiesPromise: Promise<iTech[]>;
}

const ExploreTech = ({ technologiesPromise }: techProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTech, setSelectedTech] = useState<iTech[]>([]);


  return (
    <div className="container mx-auto">
      <div className="mb-7">
        <h2 className="text-3xl font-bold mb-1.5">
          Explore the <span className="text-pink-700"> Technologies</span>
        </h2>
        <p className="text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid md:grid-cols-12 lg:grid gap-10">
        <div className="md:col-span-9 lg:col-span-9">
          <Technologies
            technologies={technologies}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
           
          ></Technologies>
        </div>
        <div className="md:col-span-3 lg:col-span-3">
          <YourStack
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
         
          ></YourStack>
        </div>
      </div>
    </div>
  );
};

export default ExploreTech;
