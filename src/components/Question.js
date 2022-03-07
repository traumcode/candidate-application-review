import React, { useEffect, useState } from "react";
import { getQuestion } from "../data/fetchData";


function Question ({ id }) {
	const [ question, setQuestion ] = useState([]);

	useEffect(() => {
		getQuestion(id).then(data => {
			setQuestion(data)
		})
		return () => {
			console.log("cleaned up");
		};
	}, [ id ])


	return (
		<div>
			{question.question}
		</div>
	);
}

export default Question;
