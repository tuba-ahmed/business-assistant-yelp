import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './ReviewSummary.css';
import SummarySection from '../summary-section/SummarySection';
import positive from '../../images/positive.png';
import negative from '../../images/negative.png';
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

export default function ReviewSummary({ summary }) {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
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
				<SummarySection summary={summary}></SummarySection>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<div className="image-container">
					<img src={positive} />
				</div>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<div className="image-container">
					<img src={negative} />
				</div>
			</TabPanel>
		</Box>
	);
}
