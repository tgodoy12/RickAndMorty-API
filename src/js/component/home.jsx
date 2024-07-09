import React, {useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [allCharacters, setAllCharacters] = useState({});
	const [singleCharacter, setSingleCharacter] = useState({});

	const getAllCharacters = () => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => {
				if (!response.ok) throw Error(response.statusText);
				return response.json();})
			.then((data) => setAllCharacters(data.results))
			.catch((error) => console.log(error));
	}

	console.log(allCharacters[0]);

	useEffect(() => {
		getAllCharacters();
	},[]);

	return (
		<div className="container">
			{/* <ul>
				<li>{singleCharacter.name}</li>
			</ul> */}
		</div>
	);
};

export default Home;
