import api from "../api/data"

export const getAllCandidates = async () => {
	const response = await api.get("http://localhost:3000/candidates");
	return response.data;
}

export const getCandidateInfo = async () => {
	const URL = "http://localhost:3000/applications"
	const response = await fetch(URL)
	return await response.json()
}

export const getQuestion = async (id) => {
	const URL = `http://localhost:3000/questions/${id}`;

	const response = await fetch(URL)

	return await response.json()
}