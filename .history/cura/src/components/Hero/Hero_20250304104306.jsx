/* eslint-disable no-unused-vars */
import { Container, Typography, Box, Button, useTheme } from "@mui/material";

export const Hero = ({handleTheme}) => {
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    return (
        <Container>
            <Box>
                <Typography variant="h1" align="center">Cura</Typography>
                <Typography variant="h4" align="center">Your health, your way.</Typography>
                <Button variant="contained" sx={{color: isLight ? 'primary' : 'secondary' }} onClick={(e) => handleTheme(e)}>Change Theme</Button>
            </Box>
        </Container>
    );
}