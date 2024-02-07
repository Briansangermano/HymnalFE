import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Box,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';

const Home = () => {
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
				maxWidth="600px"
				mx="auto"
				p={3}
				minHeight="80vh"
				display="flex"
				flexDirection="column"
				justifyContent="center"
			>
				<Box
					sx={{
						height: '150px',
						backgroundSize: '400px',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' standalone='no'?%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='400.000000pt' height='300.000000pt' viewBox='0 0 400.000000 300.000000' preserveAspectRatio='xMidYMid meet'%3e%3cmetadata%3e Created by potrace 1.16, written by Peter Selinger 2001-2019 %3c/metadata%3e%3cg transform='translate(0.000000,300.000000) scale(0.048900,-0.047619)' fill='white' stroke='none'%3e%3cpath d='M1380 3100 l0 -400 130 0 130 0 0 150 0 150 140 0 140 0 0 -150 0 -150 125 0 125 0 0 400 0 400 -125 0 -125 0 0 -145 0 -145 -140 0 -139 0 -3 143 -3 142 -127 3 -128 3 0 -401z'/%3e%3cpath d='M2290 3491 c0 -5 70 -117 155 -248 l155 -240 0 -151 0 -152 125 0 125 0 0 153 0 152 155 243 c85 133 155 245 155 247 0 3 -62 4 -137 3 l-138 -3 -73 -125 c-40 -69 -77 -125 -82 -125 -5 0 -43 56 -83 125 l-72 125 -143 3 c-85 1 -142 -1 -142 -7z'/%3e%3cpath d='M3257 3493 c-4 -3 -7 -183 -7 -400 l0 -393 120 0 120 0 0 178 c0 97 -5 215 -10 261 -5 47 -8 86 -7 88 3 2 56 -187 139 -495 l9 -33 101 3 101 3 71 261 71 262 -3 -264 -4 -264 126 0 126 0 0 400 0 400 -175 0 -174 0 -10 -37 c-5 -21 -31 -121 -57 -223 -26 -102 -50 -188 -53 -192 -4 -4 -30 86 -60 200 -29 114 -57 217 -62 230 -8 22 -11 22 -182 22 -96 0 -177 -3 -180 -7z'/%3e%3cpath d='M4377 3493 c-4 -3 -7 -183 -7 -400 l0 -393 120 0 120 0 2 190 3 189 164 -189 164 -190 113 0 114 0 -2 398 -3 397 -117 3 -118 3 -2 -195 -3 -194 -165 194 -165 194 -106 0 c-58 0 -109 -3 -112 -7z'/%3e%3cpath d='M5559 3473 c-29 -77 -279 -764 -279 -768 0 -3 58 -5 129 -5 l130 0 16 55 16 56 142 -3 142 -3 14 -52 14 -53 133 0 c101 0 134 3 133 13 0 6 -64 185 -142 397 l-142 385 -148 3 -147 3 -11 -28z m200 -350 l39 -133 -84 0 c-46 0 -84 3 -84 8 0 9 67 240 76 262 8 18 5 25 53 -137z'/%3e%3cpath d='M6267 3493 c-4 -3 -7 -183 -7 -400 l0 -393 335 0 335 0 0 100 0 100 -205 0 -205 0 0 300 0 300 -123 0 c-68 0 -127 -3 -130 -7z'/%3e%3c/g%3e%3c/svg%3e ");`
					}}
				></Box>
				<Link to={'/himno-list'}>
					<Button
						variant="outlined"
						color="primary"
						fullWidth
						startIcon={<SearchIcon />}
						size="large"
						style={{ 
							margin: '20px 0 20px',
							borderRadius: '13px',
							height: '60px',
							fontSize: '20px',
    					border: 'solid',
							fontWeight: 'bold',
						}}
					>
						Buscador
					</Button>
				</Link>
				<Link to={'/primeras-letras'}>
					<Button
						variant="outlined"
						color="primary"
						fullWidth
						size="large"
						startIcon={<SortByAlphaIcon />}
						style={{ 
							margin: '20px 0 20px',
							borderRadius: '13px',
							height: '60px',
							fontSize: '20px',
    					border: 'solid',
							fontWeight: 'bold',
						}}
					>
						Primeras letras
					</Button>
				</Link>
				<Link to={'/acordes'}>
					<Button
						variant="outlined"
						color="primary"
						fullWidth
						size="large"
						startIcon={<MusicVideoIcon />}
						style={{ 
							margin: '20px 0 20px',
							borderRadius: '13px',
							height: '60px',
							fontSize: '20px',
    					border: 'solid',
							fontWeight: 'bold',
						}}
					>
						Acordes
					</Button>
				</Link>
			</Box>
		</ThemeProvider>
  );
};

export default Home;