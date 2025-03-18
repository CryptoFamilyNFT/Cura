/* eslint-disable no-unused-vars */
import { useTheme } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const menuButton = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'About',
        link: '/about'
    },
    {
        title: 'Services',
        link: '/services'
    },
    {
        title: 'Contact',
        link: '/contact'
    }
]

export const Navbar = ({ handleTheme }) => {
    const theme = useTheme(); //aggiunto theme
 
    return (
        <div className={`fixed top-0 left-0 w-full h-12 ${theme.palette.mode === 'light' ? 'bg-transparent' : 'bg-gray-800'} z-10 flex flex-row`}>
            {/** left box side */}
            <div className="flex items-center p-2 flex-row flex-1 q">
                <img src="ss" alt="cura logo" className="h-8 w-8" />
                <div className="border-l border-primary h-full mx-2">
                    {menuButton.map((button) => (
                        <button className={`ml-2 ${theme.palette.mode === 'dark' ? 'bg-blue-500 text-white' : 'bg-blue-700 text-white'} py-1 px-3 rounded`} key={button.title}>
                            {button.title}
                        </button>
                    ))}
                </div>
            </div>

            {/** right box side */}
            <div className="flex items-center justify-center mr-2">
                <div className="flex items-center justify-center mr-2">
                    <LightModeIcon className={`${theme.palette.mode === "light" ? "text-green-500" : "text-orange-400"}`} />
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer"/>
                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"/>
                    </label>
                    <DarkModeIcon className={`${theme.palette.mode === "dark" ? "text-blue-500" : "text-gray-400"}`} />
                </div>
                <div className="flex items-center mr-2">
                    <img src="ss" alt="Mario Rossi" className="h-8 w-8 rounded-full bg-blue-200 mr-2" />
                    <button className="bg-blue-500 w-full text-white py-1 px-3 rounded">
                        Mario Rossi
                    </button>
                </div>
            </div>
        </div>
    );
}
