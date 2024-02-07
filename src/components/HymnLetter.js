import React from "react";
import { Typography } from "@mui/material";

const HymnLetter = ({ himno }) => {
  let countEstrofas = 1;

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      {himno && (
        <>
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginLeft: "38px", marginTop: "10px" }}
          >
            {himno.titulo}
          </Typography>
          <Typography variant="subtitle1">
            <ul>
              {himno.estrofas.map((estrofa, index) => {
                const palabras = estrofa.split(" ");
                const indexCoro = palabras.findIndex(
                  (palabra) => palabra.toLowerCase() === "coro:"
                );
                palabras.splice(indexCoro, 1);
                return indexCoro !== -1 ? (
                  <Typography key={index} variant="body1" component="pre">
                    {palabras
                      .join(" ")
                      .split("\n")
                      .map((line, i) => (
                        <React.Fragment key={i}>
                          <strong>{line}</strong>
                          <br />
                        </React.Fragment>
                      ))}
                  </Typography>
                ) : (
                  <div style={{ display: "flex" }}>
                    {countEstrofas++}
                    <Typography
                      key={index}
                      variant="body1"
                      component="pre"
                      style={{ marginLeft: "10px", marginTop: "3px" }}
                    >
                      {estrofa.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </Typography>
                  </div>
                );
              })}
            </ul>
          </Typography>
        </>
      )}
    </div>
  );
};

export default HymnLetter;
