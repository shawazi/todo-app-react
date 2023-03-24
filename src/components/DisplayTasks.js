import React, { useState, useEffect } from "react";


// I need to 1. make draggable elements; 2. event handler that changes boolean value of dragged element to !currentBoolean onDragEnd; 3. display conditional that displays a visual indicator in "complete" or "incomplete" column depending on currentBoolean value of the dragged element


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

    const targetSubTaskValue = e.target.textContent;
    const updatedTasks = {...tasks}

    // console.log(bools);

    // console.log(Object.values(updatedTasks))
    for (const taskName of Object.values(updatedTasks)) {
      console.log(taskName);
      for (const subTask in taskName) {
        console.log(taskName[subTask]);
        for (const completion of subTask) {
          // console.log(taskName[subTask]);
          const subTaskName = Object.keys(taskName[subTask])
          const subTaskValue = Object.values(taskName[subTask])

          // console.log(completion)
          console.log(subTaskName[0], subTaskValue[0])
          if (true) {
            taskName[subTask][subTaskName] = !taskName[subTask][subTaskValue];
            // console.log(taskName[subTask][subTaskName])
          }
        }
      }
    }
    setTasks(updatedTasks);
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
												<td>
													{subtaskName}
												</td>
												{subtaskStatus ? (
													<td
                            id={Math.random()}
														draggable
														onDragStart={
															handleDragStart
														}
														onDrag={handleDrag}
														onDragEnd={
															handleDragEnd
														}
													>
														{/* {JSON.stringify(
															subtaskStatus
														)} */}
													</td>
												) : (
													<td
                            id={Math.random()}
														draggable
														onDragStart={
															handleDragStart
														}
														onDrag={handleDrag}
														onDragEnd={
															handleDragEnd
														}
													>X</td>
												)}
												{!subtaskStatus ? (
													<td
                            id={Math.random()}
														draggable
														onDragStart={
															handleDragStart
														}
														onDrag={handleDrag}
														onDragEnd={
															handleDragEnd
														}
													>
														{/* {JSON.stringify(
															subtaskStatus
														)} */}
													</td>
												) : (
													<td
                            id={Math.random()}
														draggable
														onDragStart={
															handleDragStart
														}
														onDrag={handleDrag}
														onDragEnd={
															handleDragEnd
														}
													>X</td>
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
