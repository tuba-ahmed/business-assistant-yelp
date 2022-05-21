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

export default function Insights() {
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
			<ListItem alignItems="flex-start">
				<ListItemIcon>
					<TipsAndUpdatesIcon />
				</ListItemIcon>
				<ListItemText
					primary="Summer BBQ"
					// secondary={
					// 	<React.Fragment>
					// 		<Typography
					// 			sx={{ display: 'inline' }}
					// 			component="span"
					// 			variant="body2"
					// 			color="text.primary"
					// 		>
					// 			to Scott, Alex, Jennifer
					// 		</Typography>
					// 		{" — Wish I could come, but I'm out of town this…"}
					// 	</React.Fragment>
					// }
				/>
			</ListItem>
			<Divider variant="inset" component="li" />
			<ListItem alignItems="flex-start">
				<ListItemIcon>
					<WarningAmberIcon />
				</ListItemIcon>
				<ListItemText
					primary="Summer BBQ"
					// secondary={
					// 	<React.Fragment>
					// 		<Typography
					// 			sx={{ display: 'inline' }}
					// 			component="span"
					// 			variant="body2"
					// 			color="text.primary"
					// 		>
					// 			to Scott, Alex, Jennifer
					// 		</Typography>
					// 		{" — Wish I could come, but I'm out of town this…"}
					// 	</React.Fragment>
					// }
				/>
			</ListItem>
		</List>
	);
}
