import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeer() {
	const [randomBeer, setRandomBeer] = useState([]);

	useEffect(() => {
		async function fetchRandom() {
			const response = await axios.get(
				"https://ih-beers-api2.herokuapp.com/beers/random"
			);
			setRandomBeer(response.data);
		}
		fetchRandom();
	}, []);


	return (
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid justify-content-center">
					<Link to="/">
						<p className="navbar-brand" href="#">
							Navbar
						</p>
					</Link>
				</div>
			</nav>
            <>
			<div className="card mb-3" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src={randomBeer.image_url}
							className="img-fluid rounded-start"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{randomBeer.name}</h5>
							<p className="card-text">
								<span className="text-muted">{randomBeer.tagline}</span>
							</p>
							<p className="card-text">{randomBeer.description}</p>

							<p className="card-text">
								<span className="text-muted">
									<strong>First Brewed: </strong> {randomBeer.first_brewed}
								</span>
							</p>
							<p className="card-text">
								<span className="text-muted">
									<strong>Attenuation level: </strong>
									{randomBeer.attenuation_level}
								</span>
							</p>
							<p className="card-text">
								<span className="text-muted">
									<strong>
										Created by: <br></br>
									</strong>
									{randomBeer.contributed_by}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
		</div>
	);
}

export default RandomBeer;
