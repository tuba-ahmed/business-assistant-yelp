import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

export default function ReviewSummary() {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<Box sx={{ bgcolor: 'background.paper' }}>
			<AppBar position="static">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="secondary"
					textColor="inherit"
					variant="fullWidth"
					aria-label="full width tabs example"
					sx={{
						backgroundColor: '#222222',
					}}
				>
					<Tab label="Summary" {...a11yProps(0)} />
					<Tab label="Positive" {...a11yProps(1)} />
					<Tab label="Negative" {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				Summary
			</TabPanel>
			<TabPanel value={value} index={1}>
				Positive
			</TabPanel>
			<TabPanel value={value} index={2}>
				Negative
			</TabPanel>
		</Box>
	);
}
