import React, { useState, useEffect } from "react";

const DisplayTasks = ({ file }) => {
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    if (file) {
      setTasks(JSON.parse(file));
      // console.log(tasks);
    }
  }, [file]);

  return (
    <div>
      {file && Object.entries(tasks).map((task) => console.log(task))}
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
                        <td draggable>{subtaskName}</td>
                        {subtaskStatus ? (
                          <td draggable>{JSON.stringify(subtaskStatus)}</td>
                        ) : (
                          <td draggable></td>
                        )}
                        {!subtaskStatus ? (
                          <td draggable>{JSON.stringify(subtaskStatus)}</td>
                        ) : (
                          <td draggable></td>
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
