import { Box } from "@mui/material";


export function Footer(){
    return(
        <Box sx={{ textAlign: 'center', p: 2, bgcolor: '#f5f5f5', mt: 4 }}>
            <footer className="text-center p-4" style={{backgroundColor: '#f8f9fa'}}>
            <p>&copy; 2024 Hari Ganesh. All rights reserved.</p>
           </footer>
        </Box>
    )
}