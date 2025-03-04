/* eslint-disable no-unused-vars */
import { AppBar, Avatar, Box, Button, Divider, Menu, MenuItem, Switch, useTheme } from "@mui/material";
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

export const Navbar = ({handleTheme}) => {
    const theme = useTheme();

    return (
        <AppBar
            sx={{
                display: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: 50,
                backgroundColor: theme.palette.mode === 'light' ? 'white' : 'rgba(74, 60, 60, 0.9)',
                zIndex: 1,
                flexDirection: 'row',
            }}>
            {/** left box side */}
            <Box sx={{
                alignItems: 'center',
                padding: 2,
                display: 'flex',
                flexDirection: 'row',
                flexGrow: 1,
            }}>
                <img src="ss" alt="cura logo" />
                <Divider backgroundColor="primary" orientation="vertical" flexItem />
                {menuButton.map((button) => (
                    <Button sx={{ ml: 2 }} variant={theme.palette.mode === 'light' ? 'contained' : 'contained'} key={button.title} color="primary">{button.title}</Button>
                ))}
            </Box>

            {/** right box side */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'auto',
                mr: 2
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center', 
                    mr: 2
                }}>
                <LightModeIcon color={theme.palette.mode === "light" ? "primary" : "secondary"}/>
                <Switch slotProps={{
                    input: {
                        sx: {
                            color: theme.palette.mode === "dark" ? "primary" : "secondary"
                        }
                    }
                }} 
                color={theme.palette.mode === "dark" ? "primary" : "secondary"} 
                onClick={(e) => handleTheme(e)}
                />
                <DarkModeIcon color={theme.palette.mode === "dark" ? "primary" : "secondary"}/>
                </Box>
                <Avatar sx={{ mr: 2, backgroundColor: theme.palette.primary.light }} alt="Mario Rossi" src="ss" />
                <Button variant="contained" color="primary">
                    Mario Rossi
                </Button>
            </Box>
        </AppBar>
    );
}