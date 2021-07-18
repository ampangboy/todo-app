import {
  makeStyles,
  Typography,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
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
  todoList: {
    color: "#8ea2a6",
  },
});

function LatestTask() {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Latest Created Task</Typography>
      {tasks.tasks.map((t) => {
        return (
          <ListItem button>
            <ListItemIcon>
              <RadioButtonUncheckedIcon />
            </ListItemIcon>
            <Typography>{t.todoName}</Typography>
          </ListItem>
        );
      })}
    </div>
  );
}

export default LatestTask;
