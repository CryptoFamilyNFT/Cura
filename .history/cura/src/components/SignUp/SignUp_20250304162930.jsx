import { Box, Button, FormControl, TextField } from "@mui/material"

export const SignUp = () => {
    return (
        <Box sx={{
            mt: 10,
            width: 300,
            backgroundImage: 'url(https://source.unsplash.com/random/800x600)',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 'auto',
                height: 'auto',
                backgroundColor: 'rgba(74, 60, 60, 0.9)',
                zIndex: 1,
                backdropFilter: 'blur(5px)',
                padding: 5,
                borderRadius: 10
            }}>
                <FormControl sx={{
                    gap: 2,
                }}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                    <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
                    <Button variant="contained" color="secondary">Sign Up</Button>
                </FormControl>
            </div>
        </Box>
    )
}