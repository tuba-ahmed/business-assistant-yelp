import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import RamenDiningIcon from '@mui/icons-material/RamenDining';

const pages = ['Home'];

const ResponsiveAppBar = () => {
	return (
		<AppBar
			position="static"
			sx={{
				backgroundColor: 'black',
			}}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<RamenDiningIcon
						sx={{ display: { xs: 'none', md: 'flex' }, mr: 0.5 }}
					/>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						B-Assist
					</Typography>
					{/* <Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box> */}
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
