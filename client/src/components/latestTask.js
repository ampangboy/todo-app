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
  doneTodoList: {
    color: "#8ea2a6",
    fontSize: "1rem",
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
  },
});

function LatestTask() {
  const classes = useStyles();
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
            {t.isdone ? (
              <Typography>{t.todoName}</Typography>
            ) : (
              <del className={classes.doneTodoList}>{t.todoName}</del>
            )}
          </ListItem>
        );
      })}
    </div>
  );
}

export default LatestTask;
