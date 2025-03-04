import { Box } from "@mui/material";

export default function TodoApp() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '30vh',
            width: '100%',
            bgcolor: 'background.default',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}>
                <h1 style={{
                    color: 'white',
                    textAlign: 'center',
                    lineHeight: '30vh'
                }}>Quantum</h1>
                <h6 style={{
                    color: 'white',
                    textAlign: 'center'
                }}>The future of task managment!</h6>
            </div>
        </Box>
    )
}