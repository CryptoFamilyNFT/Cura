/* eslint-disable no-unused-vars */
import { Container, Typography, Box, Button, useTheme } from "@mui/material";

export const Hero = ({ handleTheme }) => {
    return (
        <Container sx={(theme) => ({
            background: theme.palette.mode === 'light' ? '#f4f7e1' : 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            height: '100vh',
            width: '100vw',
        })}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                g: 2
            }}>
                <Typography variant="h1" color="info" align="center">Cura</Typography>
                <Typography variant="h4" color="secondary" align="center">Your health, your way.</Typography>
                <Button sx={{mt: 10}} variant="contained" color="secondary" onClick={(e) => handleTheme(e)}>Change Theme</Button>
            </Box>
        </Container>
    );
}