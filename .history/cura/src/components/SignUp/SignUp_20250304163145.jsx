import { Box, Button, FormControl, TextField } from "@mui/material"

export const SignUp = () => {
    return (
        <Box sx={{
            mt: 10,
            width: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 'auto',
                height: 'auto',
                backgroundColor: 'rgba(74, 60, 60, 0.5)',
                zIndex: 1,
                backdropFilter: 'blur(5px)',
                padding: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
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