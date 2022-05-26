import React from 'react';
import {
	List,
	Divider,
	ListItem,
	ListItemText,
	ListSubheader,
	ListItemIcon,
} from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

export default function Insights({ insights }) {
	const getListItems = () => {
		const content = [];
		insights.forEach((insight) => {
			content.push(
				<div>
					<ListItem alignItems="flex-start">
						<ListItemIcon>
							{insight.insight_type === 'action_item' ? (
								<TipsAndUpdatesIcon />
							) : (
								<WarningAmberIcon />
							)}
						</ListItemIcon>
						<ListItemText primary={insight.insight_text} />
					</ListItem>
					<Divider variant="inset" component="li" />
				</div>,
			);
		});
		return content;
	};
	return (
		<List sx={{ margin: '20px' }}>
			<ListSubheader
				sx={{
					fontWeight: 700,
					lineHeight: '24px',
					fontSize: '1.25rem',
					color: 'black',
					marginBottom: '10px',
				}}
			>
				Insights
			</ListSubheader>
			{getListItems()}
		</List>
	);
}
