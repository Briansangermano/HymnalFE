import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HymnLetter from './HymnLetter';
import {
  Typography,
  Box,
  Button,
  createTheme,
  ThemeProvider,
} from '@mui/material';

const HymnContainer = () => {
  const navigate = useNavigate();
  const { numero } = useParams();
  const [himno, setHimno] = useState(null);

  useEffect(() => {
    axios
      .get(`https://hymnal-app-be-node.onrender.com/himnos/${numero}`)
      .then((response) => {
        setHimno(response.data);
      })
      .catch((error) => {
        console.error('Error fetching himno:', error);
      });
  }, [numero]);

  const goBack = () => {
    navigate(-1);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFF',
      },
    },
  });

  const stylesBackButton = {
    '& span': {
      marginRight: '0',
    },
  }

  return (
    <ThemeProvider theme={theme}>
        {himno ? (
          <Box sx={{
            margin: '60px 13px 20px 13px',
            padding: '15px 0 15px',
            borderRadius: '10px',
            background: 'white',
            boxShadow: '4px 6px 16px darkslategray'
          }}>
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
            <HymnLetter himno={himno} />
          </ Box>

        ) : (
          <Typography variant="h6" sx={{ textAlign: 'center', paddingTop: '20rem', color: 'white' }}>Cargando himno...</Typography>
        )}
    </ThemeProvider>
  );
};

export default HymnContainer;
