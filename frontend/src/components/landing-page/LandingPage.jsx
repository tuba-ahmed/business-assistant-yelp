import React, { useState } from 'react';
import {
	CardActionArea,
	Card,
	CardMedia,
	CardContent,
	Typography,
} from '@mui/material';
import sushiBarImage from '../../images/sushi-bar.jpeg';
import texasImage from '../../images/texas-roadhouse.jpeg';
import './LandingPage.css';

export default function LandingPage() {
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
	const renderBusinesses = () => {
		return (
			<div className="card-grid-container">
				<Card className="card">
					<CardActionArea
						onClick={() => {
							window.location.assign(
								`/business/${businesses[0].business_id}`,
							);
						}}
					>
						<CardMedia
							component="img"
							height="325"
							image={sushiBarImage}
							alt="Business Image"
						></CardMedia>
					</CardActionArea>
					<CardContent>
						<Typography variant="body1" nowWrap>
							{businesses[0].name}
						</Typography>
					</CardContent>
				</Card>
				<Card className="card">
					<CardActionArea
						onClick={() => {
							window.location.assign(
								`/business/${businesses[1].business_id}`,
							);
						}}
					>
						<CardMedia
							component="img"
							height="325"
							image={texasImage}
							alt="Business Image"
						></CardMedia>
					</CardActionArea>
					<CardContent>
						<Typography variant="body1" nowWrap>
							{businesses[1].name}
						</Typography>
					</CardContent>
				</Card>
			</div>
		);
	};
	return (
		<div className="landing-page-container">
			<div className="landing-page-header">
				<span> Welcome 'Joe Davis' </span>
			</div>
			{renderBusinesses()}
		</div>
	);
}
