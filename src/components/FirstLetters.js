import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Box,
  createTheme,
  ThemeProvider,
  TextField,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

const FirstLetters = () => {
  const navigate = useNavigate();
  const [himnos, setHimnos] = useState([]);
  const [foundHymns, setFoundHymns] = useState("");

  useEffect(() => {
    axios
      .get("https://hymnal-app-be-node.onrender.com/himnos")
      .then((response) => {
        setHimnos(response.data);
        setFoundHymns(response.data);
      })
      .catch((error) => {
        console.error("Error fetching himnos:", error);
      });
  }, []);

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

  const renderRow = (props) => {
    const { index, style } = props;

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton
          onClick={() => navigate(`/himno/${foundHymns[index].numero}`)}
        >
          <ListItemText primary={`• ${foundHymns[index].titulo}.`} />
        </ListItemButton>
      </ListItem>
    );
  };

  const findHymn = (value) => {
    const resutl = himnos.filter(
      (i) => i.titulo.toUpperCase().includes(value.toUpperCase()) && i
    );
    setFoundHymns(resutl);
  };

  const stylesInputText = {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& input": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& input::placeholder": {
      color: "white",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        pl={4}
        pr={4}
        height={"100%"}
        display="flex"
        flexDirection="column"
        sx={{ background: "#4447ff" }}
        justifyContent="center"
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
        <TextField
          id="outlined-basic"
          label="Buscador"
          variant="outlined"
          sx={stylesInputText}
          InputProps={{
            startAdornment: (
              <SearchIcon
                sx={{ color: "white", paddingRight: "10px" }}
                position="start"
              />
            ),
          }}
          onChange={(e) => findHymn(e.target.value)}
        />
        <Box
          sx={{
            width: "100%",
            height: "70%",
            paddingTop: "10px",
            marginTop: "20px",
            borderRadius: "4px",
            bgcolor: "background.paper",
          }}
        >
          <FixedSizeList
            height={500}
            itemSize={40}
            itemCount={foundHymns.length}
            overscanCount={5}
          >
            {renderRow}
          </FixedSizeList>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default FirstLetters;
