import { Box, FormControl, TextField } from "@mui/material"

export const SignUp = () => {
    return (
        <Box sx={{
            mt: 10,
            width: 300,
            backgroundImage: 'url(https://source.unsplash.com/random/800x600)',
            backgroundSize: 'cover',
        }}>
            <div
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.9)',
                zIndex: 1,
                backdropFilter: 'blur(5px)'
            }}>
                <FormControl sx={{
                    gap: 2
                }}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                </FormControl>
            </div>
        </Box>
    )
}