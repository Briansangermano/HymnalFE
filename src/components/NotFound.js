import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  Box,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const stylesBackButton = {
      '& span': {
        marginRight: '0',
      },
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFF',
      },
    },
  });

    return (
        <ThemeProvider theme={theme}>
            <Box
            p={3}
            pt={15}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            >
            <Button
                variant="outlined"
                color="primary"
                startIcon={<ArrowBackIosIcon />}
                sx={stylesBackButton}
                style={{
                    position: 'absolute',
                    top: '15px',
                    left: '10px',
                    zIndex: '1000',
                    border: '0'
                }}
                onClick={goBack}
                >
                Back
                </Button>
                <Typography variant="h6"  style={{ display: 'flex', textAlign: 'center', marginTop: '10rem', color: 'white'}}>
                    No se encontro ningun himno con ese numero...
                </Typography>
            </Box>
        </ThemeProvider>
    );
};

export default NotFound;
