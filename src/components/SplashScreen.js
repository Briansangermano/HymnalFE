import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box } from "@mui/material";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Grid container alignItems="center" justifyContent="center">
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' standalone='no'?%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='300.000000pt' height='300.000000pt' viewBox='0 0 300.000000 300.000000' preserveAspectRatio='xMidYMid meet'%3e%3cmetadata%3e Created by potrace 1.16, written by Peter Selinger 2001-2019 %3c/metadata%3e%3cg transform='translate(0.000000,300.000000) scale(0.035545,-0.032967)' fill='white' stroke='none'%3e%3cpath d='M2473 7772 c-141 -42 -245 -136 -318 -287 -86 -177 -80 -14 -80 -2145 0 -1779 1 -1890 18 -1970 23 -109 91 -249 155 -320 158 -175 419 -209 693 -91 87 38 3067 1750 3209 1844 41 28 113 89 160 136 249 251 249 551 0 802 -107 108 -151 137 -615 404 -209 120 -534 308 -723 417 -189 109 -345 198 -348 198 -2 0 -4 -339 -4 -754 0 -444 -4 -796 -10 -857 -28 -280 -108 -450 -297 -630 -129 -122 -250 -188 -441 -242 -113 -31 -341 -31 -467 1 -176 44 -369 161 -486 293 -113 129 -175 240 -227 409 -24 78 -26 100 -26 260 -1 185 3 208 60 360 78 210 244 388 447 479 144 65 351 117 509 128 l88 6 0 -278 0 -277 -22 6 c-102 27 -233 11 -329 -41 -165 -89 -250 -293 -205 -494 41 -184 179 -313 366 -342 129 -20 251 20 354 114 65 59 100 119 127 214 18 67 19 110 19 1016 l0 946 -517 298 c-549 316 -619 353 -728 386 -101 30 -279 35 -362 11z'/%3e%3cpath d='M1570 2040 l0 -400 130 0 130 0 0 150 0 150 140 0 140 0 0 -150 0 -150 125 0 125 0 0 400 0 400 -125 0 -125 0 0 -145 0 -145 -140 0 -139 0 -3 143 -3 142 -127 3 -128 3 0 -401z'/%3e%3cpath d='M2480 2431 c0 -5 70 -117 155 -248 l155 -240 0 -151 0 -152 125 0 125 0 0 153 0 152 155 243 c85 133 155 245 155 247 0 3 -62 4 -137 3 l-138 -3 -73 -125 c-40 -69 -77 -125 -82 -125 -5 0 -43 56 -83 125 l-72 125 -143 3 c-85 1 -142 -1 -142 -7z'/%3e%3cpath d='M3447 2433 c-4 -3 -7 -183 -7 -400 l0 -393 120 0 120 0 0 178 c0 97 -5 215 -10 261 -5 47 -8 86 -7 88 3 2 56 -187 139 -495 l9 -33 101 3 101 3 71 261 71 262 -3 -264 -4 -264 126 0 126 0 0 400 0 400 -175 0 -174 0 -10 -37 c-5 -21 -31 -121 -57 -223 -26 -102 -50 -188 -53 -192 -4 -4 -30 86 -60 200 -29 114 -57 217 -62 230 -8 22 -11 22 -182 22 -96 0 -177 -3 -180 -7z'/%3e%3cpath d='M4567 2433 c-4 -3 -7 -183 -7 -400 l0 -393 120 0 120 0 2 190 3 189 164 -189 164 -190 113 0 114 0 -2 398 -3 397 -117 3 -118 3 -2 -195 -3 -194 -165 194 -165 194 -106 0 c-58 0 -109 -3 -112 -7z'/%3e%3cpath d='M5749 2413 c-29 -77 -279 -764 -279 -768 0 -3 58 -5 129 -5 l130 0 16 55 16 56 142 -3 142 -3 14 -52 14 -53 133 0 c101 0 134 3 133 13 0 6 -64 185 -142 397 l-142 385 -148 3 -147 3 -11 -28z m200 -350 l39 -133 -84 0 c-46 0 -84 3 -84 8 0 9 67 240 76 262 8 18 5 25 53 -137z'/%3e%3cpath d='M6457 2433 c-4 -3 -7 -183 -7 -400 l0 -393 335 0 335 0 0 100 0 100 -205 0 -205 0 0 300 0 300 -123 0 c-68 0 -127 -3 -130 -7z'/%3e%3c/g%3e%3c/svg%3e ");`,
            backgroundSize: "400px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Box>
      )}
    </Grid>
  );
};

export default SplashScreen;
