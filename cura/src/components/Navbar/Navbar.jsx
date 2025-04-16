/* eslint-disable no-unused-vars */
import { Avatar, IconButton, useTheme } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import logo from "../../assets/Images/mascotte_2.png";
import { Link, useNavigate } from "react-router";
import { LogoutOutlined } from "@mui/icons-material";
import { logout } from "../../redux/User/userSlice";
import { useDispatch } from "react-redux";

const menuButton = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Quiz',
        link: '/quiz'
    },
    {
        title: 'Team',
        link: '/team'
    },
    {
        title: 'Profile',
        link: '/profile'
    }
]

const Navbar = ({ userState }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className={`fixed top-0 left-0 w-full h-12 bg-gradient-to-b from-emerald-80 to-transparent bg-opacity-70 backdrop-blur-lg flex flex-row z-[9999]`}>
            {/** left box side */}
            <div className="flex items-center p-2 flex-row flex-1">
                <img src={logo} alt="cura logo" className="h-10 w-10" onClick={() => navigate("/")}/>
                <div className={`${userState.isAuthenticated ? "border-l border-emerald-500" : "border-0"} h-full mx-2`}>
                    {userState.isAuthenticated && menuButton.map((button) => (
                        <Link to={button.link} key={button.title}>
                            <button className={`bg-[rgba(255,255,255,0.3)] ml-2 hover:bg-emerald-900 hover:text-emerald-50 border-emerald-500 border-1 text-emerald-600 font-semibold py-1 px-3 rounded`} key={button.title}>
                                {button.title}
                            </button>
                        </ Link>
                    ))}
                </div>
            </div>

            {/** right box side */}
            <div className="flex items-center justify-center mr-2">
                {/*<div className="flex items-center justify-center mr-2">
                    <LightModeIcon className={`${theme.palette.mode === "light" ? "text-emerald-500" : "text-orange-400"}`} />
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"/>
                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600 dark:peer-checked:bg-emerald-600"/>
                    </label>
                    <DarkModeIcon className={`${theme.palette.mode === "dark" ? "text-emerald-500" : "text-gray-400"}`} />
                </div>*/}
                <div className="flex items-center mr-2">
                    {userState.isAuthenticated ?
                        <div className="flex items-center gap-4">
                            <IconButton onClick={() => dispatch(logout())}>
                                <LogoutOutlined />
                            </IconButton>
                            <Link to="/profile">
                                <button className="bg-[rgba(255,255,255,0.3)]  hover:bg-emerald-900 hover:text-white hover:border-emerald-900 border-1 w-full text-emerald-900 py-1 px-3 rounded">
                                    {userState.user.email.slice("@")}
                                </button>
                            </Link>
                        </div>
                        : (
                            <div className="flex items-center gap-4">
                                <Link to="/login">
                                    <button className="bg-[rgba(255,255,255,0.5)] w-30 hover: cursor-pointer hover:bg-gray-100 text-emerald-900 font-medium py-1 px-4 rounded transition-all duration-200">
                                        Sign In
                                    </button>
                                </Link>
                                <Link to="/signup">
                                    <button className="bg-emerald-800 w-30 hover: cursor-pointer hover:bg-emerald-900 text-white font-medium py-1 px-4 rounded transition-all duration-200">
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
