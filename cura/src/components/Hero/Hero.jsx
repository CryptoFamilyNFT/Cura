/* eslint-disable no-unused-vars */
import { Container, Typography, Box, Button } from "@mui/material";
import WrappedTreeScene from "./3d/TreeScene";

export const Hero = ({ handleTheme }) => {
    return (

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            g: 2,
            width: '100%',
            height: '100%',
        }}>
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                lefto: 0
            }}>
            <WrappedTreeScene />
            </div>
            <Typography variant="h1" color="success" align="center">Cura</Typography>
        </Box>
    );
}