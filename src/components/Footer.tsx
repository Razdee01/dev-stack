
import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="border-t border-gray-100 mt-20">
            <div className="container mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    
                    <div className="lg:col-span-2">
                        <img
                            src={logo}
                            alt="Dev Stack"
                            className="w-36"
                        />

                        <p className="text-sm text-gray-500 max-w-md mt-5 leading-6">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        <div className="flex gap-6 mt-6">
                            <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-black"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-black"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-black"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold tracking-wide text-gray-900 uppercase">
                            Product
                        </h3>

                        <div className="flex flex-col gap-3 mt-5">
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                                Home
                            </a>

                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                                Technologies
                            </a>

                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                                Projects
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold tracking-wide text-gray-900 uppercase">
                            Company
                        </h3>

                        <div className="flex flex-col gap-3 mt-5">
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                                About
                            </a>

                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                                Contact
                            </a>

                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                                Careers
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold tracking-wide text-gray-900 uppercase">
                            Legal
                        </h3>

                        <div className="flex flex-col gap-3 mt-5">
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                                Privacy Policy
                            </a>

                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-gray-400 hover:text-gray-700">
                            Privacy
                        </a>

                        <a href="#" className="text-xs text-gray-400 hover:text-gray-700">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;