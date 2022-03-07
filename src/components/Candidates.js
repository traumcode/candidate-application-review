import React, { useState } from "react";
import CandidateInfo from "./CandidateInfo";
import { Button, Modal } from "react-bootstrap";


function Candidates ({ candidates }) {
	const [ applicationId, setApplicationId ] = useState(0);
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<div data-testid='candidates-1'>
			<div className="title-container">
				<h1>CANDIDATES</h1>
			</div>
			{candidates?.map((candidate, index) => (
				<div key={candidate.id}>
					<h3 onClick={() => setApplicationId(candidate.applicationId)}>{candidate.name}</h3>
					<Button variant='primary' onClick={() => {handleShow(); setApplicationId(candidate.applicationId)}}>
						Open Application
					</Button>
				</div>

			))}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body><CandidateInfo applicationId={applicationId}/></Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Candidates;