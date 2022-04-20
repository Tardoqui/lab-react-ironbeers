import { Link } from "react-router-dom";

function NewBeer() {
	return (
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid justify-content-center">
					<Link to="/">
						<p className="navbar-brand" href="#">
							Home
						</p>
					</Link>
				</div>
			</nav>
			<form>
				<div class="mb-3">
					<label for="beername" class="form-label">
						Beer name:
					</label>
					<input
						type="text"
						class="form-control"
						id="beername"
						aria-describedby="emailHelp"
					/>
				</div>
				<div class="mb-3">
					<label for="tagline" class="form-label">
						Tagline{" "}
					</label>
					<input
						type="text"
						class="form-control"
						id="tagline"
						aria-describedby="emailHelp"
					/>
				</div>
				<div class="mb-3">
					<label for="description" class="form-label">
						Description
					</label>
					<input
						type="text"
						class="form-control"
						id="description"
						aria-describedby="emailHelp"
					/>
				</div>
				<div class="mb-3">
					<label for="firstbrewed" class="form-label">
						First Brewed
					</label>
					<input
						type="text"
						class="form-control"
						id="firstbrewed"
						aria-describedby="emailHelp"
					/>
				</div>
				<div class="mb-3">
					<label for="brewertips" class="form-label">
						Brewer tips:
					</label>
					<input
						type="text"
						class="form-control"
						id="brewertips"
						aria-describedby="emailHelp"
					/>
				</div>
				<div class="mb-3">
					<label for="attenuationlevel" class="form-label">
						Attenuation level:
					</label>
					<input
						type="number"
						class="form-control"
						id="attenuationlevel"
						aria-describedby="emailHelp"
					/>
				</div>
				<div class="mb-3">
					<label for="contributedby" class="form-label">
						Made by:
					</label>
					<input
						type="text"
						class="form-control"
						id="contributedby"
						aria-describedby="emailHelp"
					/>
				</div>

				<button type="submit" class="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}

export default NewBeer;
