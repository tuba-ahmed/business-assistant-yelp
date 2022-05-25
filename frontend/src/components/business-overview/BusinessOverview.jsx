import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import {
	Box,
	Paper,
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Rating,
	Button,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import MenuBar from '../menubar/MenuBar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CategoryIcon from '@mui/icons-material/Category';
import sushiBarImage from '../../images/sushi-bar.jpeg';
import oskarImage from '../../images/oskar-brewery.jpeg';

import ReviewSummary from '../reviews-summary/ReviewSummary';
import Insights from '../insights/Insights';
import './BusinessOverview.css';
import RatingsTrendline from '../ratings-trendline/RatingsTrendline';
import Alerts from '../alerts/Alerts';

const StyledRating = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#ff6d75',
	},
});

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export default function BusinessOverview(props) {
	const [business, setBusiness] = useState();
	const { id } = useParams();
	useEffect(() => {
		(async () => {
			try {
				const request = await fetch(
					`http://localhost:3000/business/get-business-overview/${id}`,
					{
						method: 'GET',
						mode: 'cors',
						cache: 'no-cache',
						credentials: 'same-origin',
						headers: {
							'Content-Type': 'application/json',
						},
						redirect: 'follow',
						referrerPolicy: 'no-referrer',
					},
				);
				const resp = await request.json();
				setBusiness(resp.data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);
	const businesses = [
		{
			business_id: 'NRPemqVb4qpWFF0Avq_6OQ',
			name: 'Eurasia Sushi Bar & Seafood',
			address: '7101 W Hwy 71, Ste C-13',
			city: 'Austin',
			state: 'TX',
			postal_code: '78735',
			latitude: 30.2345329,
			longitude: -97.8772622,
			stars: 4.5,
			review_count: 395,
			is_open: 1,
			attributes: {
				Ambience:
					"{'touristy': False, 'hipster': False, 'romantic': True, 'divey': False, 'intimate': False, 'trendy': True, 'upscale': False, 'classy': True, 'casual': True}",
				CoatCheck: 'False',
				GoodForDancing: 'False',
				RestaurantsDelivery: 'True',
				RestaurantsPriceRange2: '2',
				Caters: 'True',
				RestaurantsTableService: 'True',
				RestaurantsReservations: 'True',
				HappyHour: 'True',
				Music: "{'dj': False, 'background_music': False, 'no_music': False, 'jukebox': False, 'live': True, 'video': False, 'karaoke': False}",
				WheelchairAccessible: 'True',
				RestaurantsGoodForGroups: 'True',
				RestaurantsAttire: "'casual'",
				BusinessAcceptsCreditCards: 'True',
				BikeParking: 'False',
				RestaurantsTakeOut: 'True',
				Alcohol: "u'full_bar'",
				DogsAllowed: 'False',
				GoodForMeal:
					"{'dessert': None, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': None, 'breakfast': False}",
				HasTV: 'True',
				WiFi: "u'free'",
				ByAppointmentOnly: 'False',
				GoodForKids: 'True',
				Smoking: "u'no'",
				NoiseLevel: "u'average'",
				OutdoorSeating: 'None',
				BestNights:
					"{'monday': False, 'tuesday': False, 'friday': True, 'wednesday': True, 'thursday': False, 'sunday': False, 'saturday': True}",
				BusinessParking:
					"{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
			},
			categories:
				'Bars, Nightlife, Cocktail Bars, Seafood, Restaurants, Sushi Bars',
			hours: {
				Monday: '0:0-0:0',
				Tuesday: '11:0-22:0',
				Wednesday: '11:0-22:0',
				Thursday: '16:30-22:0',
				Friday: '11:0-22:0',
				Saturday: '11:0-22:0',
				Sunday: '11:0-22:0',
			},
		},
		{
			business_id: 'TRToVIbaVtu1KOE8DR9gCw',
			name: 'Texas Roadhouse',
			address: '2457 S Highway 27',
			city: 'Clermont',
			state: 'FL',
			postal_code: '34711',
			latitude: 28.538452,
			longitude: -81.737625,
			stars: 3.5,
			review_count: 102,
			is_open: 1,
			attributes: {
				RestaurantsTakeOut: 'True',
				BusinessAcceptsCreditCards: 'True',
				RestaurantsAttire: "'casual'",
				RestaurantsPriceRange2: '2',
				RestaurantsReservations: 'False',
				NoiseLevel: "'loud'",
				HasTV: 'True',
				BikeParking: 'True',
				RestaurantsDelivery: 'False',
				GoodForKids: 'True',
				OutdoorSeating: 'False',
				RestaurantsTableService: 'True',
				RestaurantsGoodForGroups: 'True',
				WiFi: "'no'",
				Ambience:
					"{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': True}",
				DogsAllowed: 'False',
				BusinessAcceptsBitcoin: 'False',
				Alcohol: "'full_bar'",
				WheelchairAccessible: 'True',
				Caters: 'True',
				GoodForMeal:
					"{'dessert': True, 'latenight': None, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}",
				BusinessParking:
					"{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
			},
			categories:
				'Steakhouses, Restaurants, Salad, Barbeque, American (Traditional), Food',
			hours: {
				Monday: '0:0-0:0',
				Tuesday: '11:0-22:0',
				Wednesday: '11:0-22:0',
				Thursday: '11:0-22:0',
				Friday: '11:0-23:0',
				Saturday: '11:0-23:0',
				Sunday: '11:0-22:0',
			},
		},
	];
	return (
		<div>
			<MenuBar></MenuBar>
			{business && (
				<div className="business-overview-container">
					<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={2}>
							<Grid
								item
								sx={{
									display: 'flex',
									justifyContent: 'center',
								}}
								xs={6}
							>
								<Card
									sx={{
										maxWidth: 700,
										maxHeight: 500,
									}}
								>
									<CardMedia
										component="img"
										height="325"
										image={oskarImage}
										alt="Business Image"
									></CardMedia>
									<CardContent className="card-content-container">
										<div>
											<Typography variant="body1" nowWrap>
												{business.name}
											</Typography>
										</div>
										<div className="card-content-ratings">
											<StyledRating
												name="customized-color"
												defaultValue={2.5}
												getLabelText={(value) =>
													`${value} Heart${
														value !== 1 ? 's' : ''
													}`
												}
												precision={0.5}
												icon={
													<FavoriteIcon fontSize="inherit" />
												}
												emptyIcon={
													<FavoriteBorderIcon fontSize="inherit" />
												}
												readOnly
											/>
											{(business.review_count || 86) +
												' Reviews'}
										</div>
										<div className="card-content-ratings">
											<LocationOnIcon></LocationOnIcon>
											<Typography variant="body1" nowWrap>
												{business.city}
											</Typography>
										</div>

										<div className="card-content-ratings">
											<CategoryIcon></CategoryIcon>
											<Typography variant="body1" nowWrap>
												{business.categories}
											</Typography>
										</div>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={6}>
								<Card
									sx={{
										maxWidth: 700,
										height: 500,
									}}
								>
									<CardContent>
										<ReviewSummary
											summary={business.summary}
										/>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={6}>
								<Card
									sx={{
										maxWidth: 700,
									}}
								>
									<CardContent>
										<RatingsTrendline
											competitorTrend={
												business.competitor_trend
											}
											reviewTrend={business.review_trend}
										/>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={6}>
								<Card
									sx={{
										maxWidth: 700,
									}}
								>
									<CardContent>
										<Insights
											insights={business.insights}
										/>
									</CardContent>
								</Card>
							</Grid>

							<Grid item container spacing={2}>
								<Grid item xs={2} />
								<Grid item xs={8}>
									<Card
										sx={
											{
												//maxWidth: 700,
											}
										}
									>
										<CardContent>
											<Alerts alerts={business.alerts} />
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</div>
			)}

			<div className="print-button-container">
				<Button
					onClick={() => {
						window.print();
					}}
					sx={{
						backgroundColor: '#222222',
						borderRadius: '24px',
						fontSize: '14px',
						fontWeight: 'bold',
						lineHeight: 1.6,
						fontFamily:
							'"Graphik Webfont",-apple-system,"Helvetica Neue","Droid Sans",Arial,sans-serif',
					}}
					variant="contained"
					startIcon={<PrintOutlinedIcon />}
				>
					Print
				</Button>
			</div>
		</div>
	);
}
