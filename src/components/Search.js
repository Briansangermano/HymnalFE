import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import {
  TextField,
  Button,
  Grid,
  Box,
  createTheme,
  ThemeProvider,
} from '@mui/material';

const Search = () => {
  const navigate = useNavigate();
  const [himnos, setHimnos] = useState([]);
  const [numeroBusqueda, setNumeroBusqueda] = useState('');

  useEffect(() => {
    axios
      .get('https://hymnal-app-be-node.onrender.com/himnos')
      .then((response) => {
        setHimnos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching himnos:', error);
      });
  }, []);

  const agregarNumero = (numero) => {
    setNumeroBusqueda(numeroBusqueda + numero);
  };

  const limpiarBusqueda = () => {
    setNumeroBusqueda('');
  };

  const buscarPorNumero = () => {
    const resultado = himnos.find((himno) => himno.numero === parseInt(numeroBusqueda));
    console.log('resultado', resultado)
    if (resultado) {
      navigate(`/himno/${resultado.numero}`);
    } else {
      navigate('/notFound');
    }
  };

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

  const stylesInputText = {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
      marginBottom: '10px'
    },
    '& input': {
      color: 'white',
      fontSize: '40px',
    },
    '& label': {
      color: 'white',
    },
    '& input::placeholder': {
      color: 'white',
    },
  }

  const stylesBackButton = {
    '& span': {
      marginRight: '0',
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        p={7}
        pt={15}
        display="flex"
        flexDirection="column"
        sx={{ background: '#4447ff'}}
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
        <TextField
          type="number"
          label="Número del himno"
          sx={stylesInputText}
          value={numeroBusqueda}
          onChange={(e) => setNumeroBusqueda(e.target.value)}
          margin="normal"
        />
        <Grid container spacing={2} justifyContent="center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((numero) => (
            <Grid item key={numero} xs={4}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                size="large"
                style={{ fontSize: '35px'}}
                onClick={() => agregarNumero(numero)}
              >
                {numero}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            size="large"
            style={{ margin: '40px 0 40px', height: '40px', width: '120px'}}
            onClick={limpiarBusqueda}
            startIcon={<ClearIcon />}
          >
            Limpiar
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            style={{ margin: '40px 0 40px', height: '40px', width: '120px'}}
            onClick={buscarPorNumero}
            startIcon={<SearchIcon />}
          >
            Buscar
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Search;
