import React, { useEffect, useState } from "react";
import { getCandidateInfo } from "../data/fetchData";
import Question from "./Question";
import api from "../api/data";
import { Button } from "react-bootstrap";


function CandidateInfo ({ applicationId }) {
	const [ info, setInfo ] = useState("");
	const [ comment, setComment ] = useState("");


	useEffect(() => {
		getCandidateInfo().then(data => {
			let dataFiltered = data.find(dat => dat.id === applicationId)
			applicationId !== undefined ? setInfo(dataFiltered) : setInfo(dataFiltered)
		})
		return () => {console.log("cleaned up")};

	}, [ applicationId, comment ])

	const handleCommentUpdate = async (index, qid) => {
		setInfo(
			info?.videos.map((item) => {
				return item.questionId === qid ? item.comments = [ ...item.comments, comment ] : ""
			})
		)

		await api.put(`http://localhost:3000/applications/${applicationId}`, info)

	}

	return (
		<div>
			{applicationId ? info?.videos?.map((video, index) => (
				<div key={index}>
					<div className="video-container">
						<Question id={video.questionId}/>
						<video width="320" height="240" controls>
							<source src={video.src} type="video/mp4"/>
						</video>
					</div>
					<div className="comments-container">
						<p>Comments:</p>
						{video.comments ? video?.comments?.map((comment) => (<p>{comment}</p>)) : "No comments yet"}
						<form>
							<div className="form-group">
								<label htmlFor="comments">Write a comment</label>
								<textarea className="form-control" id="comments" rows="3" onChange={(e) => setComment(e.target.value)}/>
							</div>
							<Button type='submit' onClick={() => handleCommentUpdate(index, video.questionId)}>Add Comment</Button>
						</form>

					</div>
				</div>

			)) : (applicationId === 0 ? "" : <h1>No app yet</h1>)}
		</div>
	);
}

export default CandidateInfo;