/* eslint-disable no-unused-vars */
import { Avatar, useTheme } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import logo from "../../assets/Images/mascotte_2.png";
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
        <div className={`fixed top-0 left-0 w-full h-12 bg-gradient-to-b from-emerald-80 to-transparent bg-opacity-70 backdrop-blur-lg z-10 flex flex-row`}>
            {/** left box side */}
            <div className="flex items-center p-2 flex-row flex-1">
                <img src={logo} alt="cura logo" className="h-8 w-8" />
                <div className="border-l border-emerald-500 h-full mx-2">
                    {menuButton.map((button) => (
                        <button className={`ml-2 hover:bg-emerald-900 hover:text-emerald-50 border-emerald-500 border-1 text-emerald-600 font-semibold py-1 px-3 rounded`} key={button.title}>
                            {button.title}
                        </button>
                    ))}
                </div>
            </div>

            {/** right box side */}
            <div className="flex items-center justify-center mr-2">
                <div className="flex items-center justify-center mr-2">
                    <LightModeIcon className={`${theme.palette.mode === "light" ? "text-emerald-500" : "text-orange-400"}`} />
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"/>
                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600 dark:peer-checked:bg-emerald-600"/>
                    </label>
                    <DarkModeIcon className={`${theme.palette.mode === "dark" ? "text-emerald-500" : "text-gray-400"}`} />
                </div>
                <div className="flex items-center mr-2">
                    <Avatar alt="Mario" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30, mr: 1 }} />
                    <button className=" bg-emerald-900  hover:bg-transparent hover:text-emerald-900 border-emerald-900 border-1 w-full text-white py-1 px-3 rounded">
                        Mario Rossi
                    </button>
                </div>
            </div>
        </div>
    );
}
