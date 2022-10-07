import React from "react";
import "./Portfolio.css";
import Picture from "../Images/Stripe Clone.png";
import Picture2 from "../Images/RestaurantFinder.png";
import Picture3 from "../Images/WeatherApp.png";
import Picture4 from "../Images/LandingPage.png";
import Picture5 from "../Images/PigGame.png";

const Portfolio = () => {
	return (
		<section id="portfolio" className="portfolio">
			<h1>Projects</h1>
			<div className="card">
				<img src={Picture} alt="" />
				<p>
					I recreated the official Stripe homepage. This page is fully
					responsive. Coded using HTML, CSS and React.
				</p>
				<a
					href="https://osmanstripeclone.netlify.app"
					target="_blank"
					rel="noreferrer"
				>
					<button>View live website</button>
				</a>
				<a
					href="https://github.com/ohersi1/StripeClone"
					target="_blank"
					rel="noreferrer"
				>
					<button>View source code</button>
				</a>
			</div>
			<div className="card">
				<img src={Picture3} alt="" />
				<p>
					This is a simple weather application coded using React. Users can
					search for their favourite city anywhere in the world and see the
					weather conditions of that city.
				</p>
				<a href="/" target="_blank" rel="noreferrer">
					<button>View live website</button>
				</a>
				<a
					href="https://github.com/ohersi1/ReactWeatherApp"
					target="_blank"
					rel="noreferrer"
				>
					<button>View source code</button>
				</a>
			</div>
			<div className="card">
				<img src={Picture2} alt="" />
				<p>
					This is a restaurant finder app which uses the Geolocation API to
					determine the user's location, and then uses that to search for nearby
					restaurants that match the search. Coded using HTML, CSS and
					Javascript.
				</p>
				<a
					href="https://restaurantfinderapp.netlify.app"
					target="_blank"
					rel="noreferrer"
				>
					<button>View live website</button>
				</a>
				<a
					href="https://github.com/ohersi1/RestaurantFinderApp"
					target="_blank"
					rel="noreferrer"
				>
					<button>View source code</button>
				</a>
			</div>
			<div className="card">
				<img src={Picture4} alt="" />
				<p>
					This is a landing page with a form to help improve Nando's services.
					Coded using just HTML and CSS
				</p>
				<a
					href="https://osmannandossurveyform.netlify.app"
					target="_blank"
					rel="noreferrer"
				>
					<button>View live website</button>
				</a>
				<a
					href="https://github.com/ohersi1/Nandos-SurveyForm"
					target="_blank"
					rel="noreferrer"
				>
					<button>View source code</button>
				</a>
			</div>
			<div className="card">
				<img src={Picture5} alt="" />
				<p>
					Pig is a simple dice game. Players take turns to roll a single dice as
					many times as they wish, adding all roll results to a running total,
					but losing their gained score for the turn if they roll a 1. Whoever
					gets a total score of 16 or more first wins. Coded using just HTML,
					CSS and Javascript.
				</p>
				<a
					href="https://osmanpiggame.netlify.app"
					target="_blank"
					rel="noreferrer"
				>
					<button>View live website</button>
				</a>
				<a
					href="https://github.com/ohersi1/Pig-Game"
					target="_blank"
					rel="noreferrer"
				>
					<button>View source code</button>
				</a>
			</div>
		</section>
	);
};

export default Portfolio;
