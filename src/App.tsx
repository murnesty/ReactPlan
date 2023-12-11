import { Task } from "gantt-task-react";
import "./App.css";
import Navbar from "./components/Navbar";
import GanttChartPlannerContent from "./components/GanttChartPlannerContent";
import Sidebar from "./components/Sidebar";
import {
  initDDDTasks,
  initHelmChartTasks,
  initJFrogTasks,
  initKubernetesTasks,
  initReactTasks,
} from "./TaskHelper";

function App() {
  let studyTasks: Task[] = [];
  studyTasks.push(...initReactTasks());
  studyTasks.push(...initDDDTasks());
  studyTasks.push(...initKubernetesTasks());
  studyTasks.push(...initJFrogTasks());
  studyTasks.push(...initHelmChartTasks());

  return (
    <div
      className="d-flex flex-column"
      style={{ height: "100vh", width: "100vw", boxSizing: "border-box" }}
    >
      <Navbar />
      <div className="d-flex" style={{ height: "100%" }}>
        <Sidebar />
        <GanttChartPlannerContent heading="Study Plan" tasks={studyTasks} />
      </div>
    </div>
  );
}

export default App;
