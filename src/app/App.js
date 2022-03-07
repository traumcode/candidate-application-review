import React, { useEffect, useState } from "react";
import "./App.scss";
import Candidates from "../components/Candidates";
import { getAllCandidates } from "../data/fetchData";


function App () {
	const [ candidates, setCandidates ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		getAllCandidates().then(data => setCandidates(data))
		setIsLoading(false)
	}, [])

	return (
		<div className="App">
			<h1 className='app-title'>Candidate Application</h1>
			{
				isLoading
					? <div>Loading..</div>
					: <Candidates candidates={candidates}/>
			}
			<footer className='footer'>
				Application made by Silviu Bocsa
			</footer>
		</div>
	);
}

export default App;
