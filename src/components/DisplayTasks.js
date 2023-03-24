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
        {file && Object.entries(tasks).map((task) => (
            console.log(task)
        ))}
      {/* {file && Object.entries(tasks).map((task, index) => (
        <div key={index}>
          <h3>{task}</h3>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th scope="col">Incomplete</th>
                <th scope="col">Complete</th>
              </tr>
            </thead> */}
            {/* <tbody>
              {Object.keys(tasks[task]).map((subtask, subtaskIndex) => (
                <tr key={subtaskIndex}>
                  <td>{tasks[task][subtask]}</td>
                </tr>
              ))}
            </tbody> */}
          {/* </table>
        </div>
      ))} */}
    </div>
  );
};

export default DisplayTasks;
