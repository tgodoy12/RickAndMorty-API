import React, {useState, useEffect} from "react";
import CharacterCard from "./characterCard";

//create your first component
const Home = () => {

	//definición de los estados que se usarán para guardar los datos recuperados
	const [allCharacters, setAllCharacters] = useState([]);
	const [singleCharacter, setSingleCharacter] = useState({});

	//fetch : solicitud GET de todos los personajes y guardados en AllCharacters
	const getAllCharacters = () => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => {
				if (!response.ok) throw Error(response.statusText);
				return response.json();})
			.then((data) => setAllCharacters(data.results))
			.catch((error) => console.log(error));
	}

	//Se ejecuta la solicitud cada vez que se carga la página
	useEffect(() => {
		getAllCharacters();
	},[]);

	//se ejecuta el console.log solo si el largo de allCharacters es mayor a 0,
	//y cada vez que allCharacters cambia
	// useEffect(() => {
    //     if (allCharacters.length > 0) {
    //         console.log(allCharacters[0]["name"]);
    //     }
    // }, [allCharacters]);

	return (
		<div className="container">
			
			{allCharacters.length > 0 && (
				allCharacters.map((element, index) => (
					<CharacterCard key={index} name={element.name} image={element.image} />)
				))
			}
                
		</div>
	);
};

export default Home;
