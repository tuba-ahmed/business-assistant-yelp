import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailTwoTone';
import Typography from '@mui/material/Typography';
import { ListItemIcon, IconButton } from '@mui/material';

export default function Alerts({ alerts }) {
	const getListItems = () => {
		const content = [];
		alerts.forEach((alert) => {
			content.push(
				<div>
					<ListItem alignItems="flex-start">
						<ListItemIcon>
							<IconButton href="mailto:test@gmail.com">
								<ContactMailTwoToneIcon />
							</IconButton>
						</ListItemIcon>
						<ListItemText
							primary={alert.review}
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: 'inline' }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										{alert.customer_name}
									</Typography>
									{`  - Gave rating as ${alert.rating}`}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
				</div>,
			);
		});
		return content;
	};

	return (
		<List
			subheader={
				<ListSubheader component="div">
					<Typography
						sx={{ display: 'inline', fontWeight: '700' }}
						component="span"
						variant="h6"
						color="text.primary"
					>
						Reviews that need your attention.
					</Typography>
				</ListSubheader>
			}
			sx={{ width: '100%', bgcolor: 'background.paper' }}
		>
			{getListItems()}
		</List>
	);
}
