import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

function TaskCompleted() {
  const tasks = useSelector((state) => state.tasks);
  const totalTask = tasks.tasks.length;
  const completedTask = tasks.tasks.filter((t) => t.isDone === true).length;

  return (
    <>
      <Typography>Task Completed</Typography>
      <Typography display="inline">{completedTask}</Typography>
      <Typography display="inline">/</Typography>
      <Typography display="inline">{totalTask}</Typography>
    </>
  );
}

export default TaskCompleted;
