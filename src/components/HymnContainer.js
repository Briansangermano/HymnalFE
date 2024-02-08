import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import HymnLetter from "./HymnLetter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Typography,
  Box,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";

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
        console.error("Error fetching himno:", error);
      });
  }, [numero]);

  const goBack = () => {
    navigate(-1);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFF",
      },
    },
  });

  const stylesBackButton = {
    "& span": {
      marginRight: "0",
    },
  };

  const copiarAlPortapapeles = () => {
    const content = document.querySelector(".himno-content")?.innerText;

    navigator.clipboard
      .writeText(content)
      .then(() => {
        notifySuccess();
      })
      .catch(() => {
        notifyError();
      });
  };

  const notifySuccess = () =>
    toast.success("El himno fue copiado exitosamente", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = () =>
    toast.error("Tuvimos un error al copiar le himno", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <ThemeProvider theme={theme}>
      {himno ? (
        <>
          <ToastContainer />
          <Box
            sx={{
              margin: "60px 13px 20px 13px",
              padding: "15px 0 15px",
              borderRadius: "10px",
              background: "white",
              boxShadow: "4px 6px 16px darkslategray",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              startIcon={<ArrowBackIosIcon />}
              sx={stylesBackButton}
              style={{
                position: "absolute",
                top: "15px",
                left: "10px",
                zIndex: "1000",
                border: "0",
              }}
              onClick={goBack}
            >
              Back
            </Button>
            <Button
              endIcon={<ContentCopyIcon />}
              style={{
                position: "absolute",
                top: "15px",
                right: "10px",
                zIndex: "1000",
                border: "0",
              }}
              onClick={copiarAlPortapapeles}
            >
              Copy
            </Button>
            <HymnLetter himno={himno} />
          </Box>
        </>
      ) : (
        <Typography
          variant="h6"
          sx={{ textAlign: "center", paddingTop: "20rem", color: "white" }}
        >
          Cargando himno...
        </Typography>
      )}
    </ThemeProvider>
  );
};

export default HymnContainer;
