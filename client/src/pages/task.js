import {
  Typography,
  makeStyles,
  Button,
  Modal,
  Paper,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CenteredCard from "../components/centeredCard";
import rootActions from "../redux/rootActions";
import Header from "../components/header";
import Todo from "../class/todo";

const useStyles = makeStyles({
  logOut: {
    fontSize: "1.2rem",
  },
  taskHeader: {
    fontSize: "2rem",
    textAlign: "center",
    color: "#7e949a",
  },
  addTask: {
    backgroundColor: "#5285ec",
    color: "white",
    margin: "10px 50px",
    borderRadius: "15px",
    padding: "10px 0",
  },
  newTaskContainer: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  newTask: {
    top: "-50%",
    left: "-50%",
    position: "relative",
    width: 320,
    padding: "2rem",
  },
  button: {
    marginTop: "1rem",
  },
});

function Task() {
  const classes = useStyles();
  const [openNewTask, setOpenNewTask] = useState(false);
  const [task, setTask] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const setTaskReducer = (taskReducer) =>
    dispatch(rootActions.taskAction.addNewTask(taskReducer));

  const handleOpenNewTask = () => {
    setOpenNewTask(true);
  };

  const handleCloseNewTask = () => {
    setOpenNewTask(false);
  };

  const handleClick = async () => {
    const res = await fetch("http://localhost/api/todo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: currentUser.id,
        username: currentUser.name,
        todoName: task,
        isDone: false,
      }),
    });

    const resObj = await res.json();

    const todo = new Todo(
      resObj.id,
      currentUser.id,
      currentUser.name,
      task,
      false
    );

    if (res.status === 201) {
      setOpenNewTask(false);
      setTaskReducer(todo);
      setTask("");
      history.push("/dashboard");
    }
  };

  return (
    <>
      <Header />
      <CenteredCard>
        <Typography className={classes.taskHeader}>You have no task</Typography>
        <Button
          className={classes.addTask}
          variant="contained"
          color="primary"
          onClick={handleOpenNewTask}
        >
          + New Task
        </Button>
      </CenteredCard>
      <Modal open={openNewTask} onClose={handleCloseNewTask}>
        <div className={classes.newTaskContainer}>
          <Paper className={classes.newTask} elevation={3}>
            <Typography className={classes.taskHeader}>+ New Task</Typography>
            <TextField
              id="new-task"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Task Name"
              margin="normal"
              fullWidth
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              type="submit"
              onClick={handleClick}
            >
              + New Task
            </Button>
          </Paper>
        </div>
      </Modal>
    </>
  );
}

export default Task;
