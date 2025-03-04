import { AppBar } from "@mui/material";

const Navbar = () => {

    return (
        <AppBar
        sx={{
            display: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: 70,
            backgroundColor: 'rgba(74, 60, 60, 0.5)',
            zIndex: 3333,
        }}>

        </AppBar>
    );
}