import React from 'react'
import useLocalStroge from './useLocalStroge'
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa'


const LightDark = () => {
    const [theme, settheme] = useLocalStroge('theme' , 'light');

    const handleToggleTheme =()=>{
        settheme(theme === 'light' ? 'dark' : 'light' );
    }
    console.log(theme)

    return (
        <div className={`min-h-screen transition-colors duration-300 ${theme === 'light' ? 'bg-white text-gray-950' : 'bg-gray-950 text-white'}`} data-theme={theme}>
        <div className='flex flex-col justify-center items-center w-full h-screen '>
            <div className='text-center'>
                <p className="text-2xl font-bold mb-4">Hello World!</p>
                <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center" 
                    onClick={handleToggleTheme}
                >
                    {theme === 'light' ? <FaMoon className="mr-2" /> : <FaSun className="mr-2" />}
                    Change Theme
                </button>
                
            </div>
            <div className="flex justify-center mt-10">
                    <a href="https://github.com/developer-khadim" target="_blank" rel="noopener noreferrer" className="mr-4">
                        <FaGithub className={`text-2xl ${theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`} />
                    </a>
                    <a href="https://www.linkedin.com/in/khadim-ali12/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={`text-2xl ${theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`} />
                    </a>
                </div>
                <p className={`text-center mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                    Please like and follow on GitHub & Linkedin.
                </p>
        </div>
    </div>
  )
}

export default LightDark