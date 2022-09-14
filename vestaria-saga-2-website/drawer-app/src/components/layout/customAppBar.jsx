import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CustomAppBar = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Typography variant="h6" color="inherit" component="div">
              Vestaria Saga 2 Walkthrough
            </Typography>
        </AppBar>
      </Box>
    );
};

export default CustomAppBar;