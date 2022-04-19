import image1 from '../../assets/beers.png';
import image2 from '../../assets/new-beer.png';
import image3 from '../../assets/random-beer.png';
import {Link} from "react-router-dom";


function Home() {
	return (
		<div>
			<div>
				<img src={image1} alt=''></img>
				<Link to="/beers"><h1>All Beers</h1></Link>
				<p></p>
			</div>
			<div>
				<img src={image2} alt=''></img>
				<Link to="/randombeer"><h1>Random Beer</h1></Link>
				<p></p>
			</div>
			<div>
				<img src={image3} alt=''></img>
				<Link to="/newbeer"><h1>New Beer</h1></Link>
				<p></p>
			</div>
		</div>
	);
}

export default Home;
