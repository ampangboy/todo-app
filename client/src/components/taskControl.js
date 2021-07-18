import {
  Box,
  makeStyles,
  Checkbox,
  Typography,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";
import sortArrayOfObject from "../utils/sortArrayOfObject";

const useStyles = makeStyles({
  boxContainer: {
    borderBottom: "0.2rem solid #e8e8e8",
  },
  taskText: {
    fontSize: "1.7rem",
    color: "#6290ee",
    flexGrow: 1,
  },
  doneTodoList: {
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
    fontSize: "1.7rem",
    color: "#6290ee",
    flexGrow: 1,
  },
});

function TaskControl() {
  const classes = useStyles();

  let tasks = useSelector((state) => state.tasks);
  tasks = sortArrayOfObject(tasks.tasks, "id");

  return (
    <>
      {tasks.map((t) => {
        return (
          <Box
            className={classes.boxContainer}
            display="flex"
            flexWrap="no-wrap"
            key={t.id}
          >
            <Checkbox
              checked={t.isDone}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            {t.isDone ? (
              <del className={classes.doneTodoList}>{t.todoName}</del>
            ) : (
              <Typography className={classes.taskText}>{t.todoName}</Typography>
            )}
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      })}
    </>
  );
}

export default TaskControl;
