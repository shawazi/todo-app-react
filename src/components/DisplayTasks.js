import React, { useState, useEffect } from "react";

const DisplayTasks = ({ file }) => {
	const [tasks, setTasks] = useState({});

	useEffect(() => {
		if (file) {
			setTasks(JSON.parse(file));
		}
	}, [file]);

	const bools = Object.entries(tasks).map(([taskName, taskData], index) =>
		Object.entries(tasks[taskName]).map(
			([subtask, status], subtaskIndex) => [subtask, status]
		)
	);
	// console.log(bools[0][0][1]);
	// console.log(Object.values(bools[0][0][1]));

	//   console.log(Object.values(bools[0][0][1]));

	const handleDragStart = (e) => {
		// This method runs when the dragging starts
		console.log("Started");
	};

	const handleDrag = (e) => {
		// This method runs when the component is being dragged
		console.log("Dragging...");
	};

	const handleDragEnd = (e) => {
		// This method runs when the dragging stops
		console.log(e.target.textContent);
		console.log("Ended");
    
    console.log(bools)
    
		

		const targetSubTaskValue = e.target.textContent;

    // console.log(bools);

		// setTasks((prev) => {
		// 	const newTasks = { ...prev };
		// 	Object.entries(newTasks).forEach(([taskName, taskData]) => {
    //     Object.entries(taskData).forEach(([subtaskName, something]) => {
    //       const [subtaskProp, subtaskVal] = Object.entries(something)[0];
    //       console.log(subtaskProp, subtaskVal, subtaskName, something, taskName, taskData)
    //     })
    //   })
		// });
	};

	return (
		<div>
			{/* {file && Object.entries(tasks).map((task) => console.log(task))} */}
			{file &&
				Object.entries(tasks).map(([taskName, taskData], index) => (
					<div
						className="border border-dark d-flex flex-column gap-2"
						key={index}
					>
						<h3>{taskName}</h3>
						<table className="table">
							<thead className="table-dark">
								<tr>
									<th className="w-75" scope="col">
										Subtask
									</th>
									<th scope="col">Incomplete</th>
									<th scope="col">Complete</th>
								</tr>
							</thead>
							<tbody>
								{Object.entries(tasks[taskName]).map(
									([subtask, status], subtaskIndex) => {
										const [subtaskName, subtaskStatus] =
											Object.entries(status)[0];
										return (
											<tr key={subtaskIndex}>
												<td
													draggable
													onDragStart={
														handleDragStart
													}
													onDrag={handleDrag}
													onDragEnd={handleDragEnd}
												>
													{subtaskName}
												</td>
												{subtaskStatus ? (
													<td
														draggable
														onDragStart={
															handleDragStart
														}
														onDrag={handleDrag}
														onDragEnd={
															handleDragEnd
														}
													>
														{JSON.stringify(
															subtaskStatus
														)}
													</td>
												) : (
													<td
														draggable
														onDragStart={
															handleDragStart
														}
														onDrag={handleDrag}
														onDragEnd={
															handleDragEnd
														}
													></td>
												)}
												{!subtaskStatus ? (
													<td
														draggable
														onDragStart={
															handleDragStart
														}
														onDrag={handleDrag}
														onDragEnd={
															handleDragEnd
														}
													>
														{JSON.stringify(
															subtaskStatus
														)}
													</td>
												) : (
													<td
														draggable
														onDragStart={
															handleDragStart
														}
														onDrag={handleDrag}
														onDragEnd={
															handleDragEnd
														}
													></td>
												)}
											</tr>
										);
									}
								)}
							</tbody>
						</table>
					</div>
				))}
		</div>
	);
};

export default DisplayTasks;
