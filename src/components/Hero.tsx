import hero from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="container mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                
                <div className="flex-1">
                    <h2 className="text-5xl font-extrabold leading-tight text-slate-900">
                        Build Your Ideal
                        <span className="block bg-linear-to-r from-orange-500 via-red-500  to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h2>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    <div className="mt-7 flex gap-3">
                        <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-xs font-medium text-white">
                            Explore Technologies
                        </button>

                        <button className="rounded-md border border-slate-200 px-7 py-2 text-xs font-medium text-slate-600">
                            Learn More
                        </button>
                       
                    </div>
                </div>

                <div className="flex-1 flex justify-center">
                    <img
                        src={hero}
                        alt="Development stack"
                        
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;