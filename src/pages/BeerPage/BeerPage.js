import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BeerPage() {
	const params = useParams();

	const [beer, setBeer] = useState({});

	useEffect(() => {
		async function fetchBeer() {
			const response = await axios.get(
				`https://ih-beers-api2.herokuapp.com/beers/${params.beersId}`
			);
			setBeer(response.data);
		}
		fetchBeer();
	}, [params.beersId]);

	return (
		<>
			<div className="card mb-3" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src={beer.image_url}
							className="img-fluid rounded-start"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{beer.name}</h5>
							<p className="card-text">
								<span className="text-muted">{beer.tagline}</span>
							</p>
							<p className="card-text">{beer.description}</p>

							<p className="card-text">
								<span className="text-muted">
									<strong>First Brewed: </strong> {beer.first_brewed}
								</span>
							</p>
							<p className="card-text">
								<span className="text-muted">
									<strong>Attenuation level: </strong>
									{beer.attenuation_level}
								</span>
							</p>
							<p className="card-text">
								<span className="text-muted">
									<strong>
										Created by: <br></br>
									</strong>
									{beer.contributed_by}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default BeerPage;
