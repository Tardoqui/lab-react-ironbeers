import {Link} from "react-router-dom";

function NewBeer() {
    return (  
        <div className="container">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link to="/"><p className="navbar-brand" href="#">
						Navbar
					</p>
                    </Link>
				</div>
			</nav>
		</div>
    );
}

export default NewBeer;
