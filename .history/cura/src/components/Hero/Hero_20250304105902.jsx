/* eslint-disable no-unused-vars */
import { Container, Typography, Box, Button, useTheme } from "@mui/material";

export const Hero = ({ handleTheme }) => {
    return (
        <Container>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                g: 2
            }}>
                <Typography variant="h1" color="info" align="center">Cura</Typography>
                <Typography variant="h4" color="secondary" align="center">Your health, your way.</Typography>
                <Button variant="contained" color="secondary" onClick={(e) => handleTheme(e)}>Change Theme</Button>
            </Box>
        </Container>
    );
}