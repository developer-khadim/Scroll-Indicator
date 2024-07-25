import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const ScrollIndicator = ({ url }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const fetchData = async (getUrl) => {
        setLoading(true);
        try {
            const response = await fetch(getUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data && data.products && data.products.length > 0) {
                setData(data.products);
            }
        } catch (error) {
            console.error(error);
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleScrollPercentage = () => {
        const scrolled = window.scrollY;
        const viewportHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        
        const percentage = (scrolled / (fullHeight - viewportHeight)) * 100;
        setScrollPercentage(Math.min(percentage, 100));
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);
        return () => {
            window.removeEventListener('scroll', handleScrollPercentage);
        }
    }, []) 

    return (
        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 min-h-screen">
            <div className="fixed top-0 left-0 w-full h-2 bg-gray-300 rounded-full">
                <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${scrollPercentage}%` }}
                ></div>
            </div>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-indigo-800">Custom Scroll Indicator <span className='text-sm' >(Khadim Ali)</span> </h1>
                {loading && <p className="text-center text-indigo-600 font-semibold">Loading...</p>}
                {errorMessage && <p className="text-center text-red-500 font-semibold">{errorMessage}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data && data.length > 0 ? 
                        data.map((dataItem) => (
                            <div key={dataItem.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                                <p className="text-lg font-semibold text-indigo-700">{dataItem.title}</p>
                                <p className="text-sm text-gray-600 mt-2">{dataItem.description.substring(0, 100)}...</p>
                                <p className="text-indigo-500 font-bold mt-4">${dataItem.price}</p>
                            </div>
                        ))
                    : null}
                </div>
                
                {/* Social links and message */}
                <div className="mt-16 pb-8">
                    <div className="flex justify-center">
                        <a href="https://github.com/developer-khadim" target="_blank" rel="noopener noreferrer" className="mr-4">
                            <FaGithub className="text-3xl text-indigo-700 hover:text-indigo-900 transition duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/khadim-ali12/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-3xl text-indigo-700 hover:text-indigo-900 transition duration-300" />
                        </a>
                    </div>
                    <p className="text-center mt-4 text-indigo-600 font-medium">
                        Please like and follow on GitHub & LinkedIn.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ScrollIndicator