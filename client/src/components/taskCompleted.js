import { makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    margin: "2.5rem",
  },
  title: {
    fontSize: "2rem",
    color: "#8ea2a6",
  },
  completed: {
    fontSize: "6rem",
    color: "#5285ec",
  },
  total: {
    fontSize: "2.7rem",
    color: "#8ea2a6",
  },
});

function TaskCompleted() {
  const classes = useStyles();
  const tasks = useSelector((state) => state.tasks);
  const totalTask = tasks.tasks.length;
  const completedTask = tasks.tasks.filter((t) => t.isDone === true).length;

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Task Completed</Typography>
      <Typography display="inline" className={classes.completed}>
        {completedTask}
      </Typography>
      <Typography display="inline" className={classes.total}>
        /
      </Typography>
      <Typography display="inline" className={classes.total}>
        {totalTask}
      </Typography>
    </div>
  );
}

export default TaskCompleted;
