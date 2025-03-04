import { Box, FormControl, TextField } from "@mui/material"

export const SignUp = () => {
    return (
        <Box sx={{
            mt: 10
        }}>
            <div
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 1,
                backdropFilter: 'blur(5px)'
            }}>
                <FormControl sx={{
                    gap: 10
                }}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                </FormControl>
            </div>
        </Box>
    )
}