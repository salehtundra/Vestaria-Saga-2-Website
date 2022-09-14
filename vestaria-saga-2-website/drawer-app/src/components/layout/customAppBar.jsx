import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { indigo } from '@mui/material/colors';

const CustomAppBar = () => {
    
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: indigo[900] }}>
            <Typography variant="h6" color="inherit" component="div">
              Vestaria Saga 2 Walkthrough
            </Typography>
        </AppBar>
      </Box>
    );
};

export default CustomAppBar;