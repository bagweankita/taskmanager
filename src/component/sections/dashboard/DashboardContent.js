import React, { useEffect, useLayoutEffect, useState } from "react";
import Select from "react-select";
import Tasklist from "./Tasklist";
import "./Dashboard.css";

const statusoption = [
  { label: "Active", value: "Active" },
  { label: "Completed", value: "Completed" },
];
const DashboardContent = () => {
  const [taskname, setTaskname] = useState("");
  const [discription, setDiscription] = useState("");
  const [status, setStatus] = useState([]);
  const [data, setData] = useState([]);
  const validation = () => {
    if (taskname === "") {
      alert("Task name is required");
      return false;
    }
    if (discription === "") {
      alert("Discription is required");
      return false;
    }
    if (status.length === 0) {
      alert("Status is required");
      return false;
    }
    return true;
  };
  useLayoutEffect(()=>{
  let tasklistdetails = localStorage.getItem("tasklist");
  if(tasklistdetails !== undefined){
    setData(JSON.parse(tasklistdetails))
  }
  },[])
 
  const handleAddTask = () => {
    if (!validation()) return;
    let details = [...data];
    details.push({
          taskname: taskname,
          discription: discription,
          status: status.value,
        })
    setData(details);
    Setdatalocalstorage(details);
    setTaskname("");
    setDiscription("");
    setStatus([]);
  };
  const deleteTask = (index) => {
    let details = [...data];
    details.splice(index, 1);
    setData(details);
    Setdatalocalstorage(details);
  };
  const Setdatalocalstorage = (details) => {
    localStorage.setItem("tasklist",JSON.stringify(details));

  }
  return (
    <>
    <div className="task-form">
      <h2>Add Task</h2>
      <input
        type="text"
        value={taskname}
        onChange={(e) => setTaskname(e.target.value)}
        className="todo-input"
      />
      <h2>Add Description</h2>
      <input
        type="text"
        value={discription}
        onChange={(e) => setDiscription(e.target.value)}
        className="todo-input"
      />
      <h2>Status</h2>

        <Select
          options={statusoption}
          value={status}
          onChange={(data) => setStatus(data)}
        />
      <br />

      <button onClick={() => handleAddTask()}>Add</button>

      <div className="tasklist" >Task List</div>
    </div>
      <Tasklist list={data} deleteTask={deleteTask} />
      </>
  );
};

export default DashboardContent;
