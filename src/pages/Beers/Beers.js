import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Beers() {
	const [allBeers, setAllBeers] = useState([]);

  
     




	useEffect(() => {
		async function fetchBeers() {
			const response = await axios.get(
				"https://ih-beers-api2.herokuapp.com/beers"
			);
			setAllBeers(response.data);
		}
		fetchBeers();
	}, []);

	return (
		<div>
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid justify-content-center">
						<Link to="/">
							<p className="navbar-brand " href="#">
								Navbar
							</p>
						</Link>
					</div>
				</nav>
			</div>
			<div >
				{allBeers.map((currentBeer) => {
					return (
						<div className="d-flex p-2">
							<div>
								<img
									style={{ height: "200px", width:"100px" }}
									src={currentBeer.image_url}
									alt=""
								/>
							</div>
                            <div  className="p-4">
							<Link to={`/beers/${currentBeer._id}`}><h2>{currentBeer.name}</h2></Link>
							<h5>{currentBeer.tagline}</h5>
							<span>
								<strong> Created by: </strong>
								{currentBeer.contributed_by}
							</span>
                            </div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Beers;
