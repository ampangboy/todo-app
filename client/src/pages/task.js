import {
  AppBar,
  Toolbar,
  Container,
  Avatar,
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

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
  userName: {
    paddingLeft: "1.1rem",
    fontSize: "1.2rem",
    flexGrow: 1,
  },
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
    dispatch(rootActions.userAction.setUserInfo(taskReducer));

  const handleOpenNewTask = () => {
    setOpenNewTask(true);
  };

  const handleCloseNewTask = () => {
    setOpenNewTask(false);
  };

  const handleClick = async () => {
    const res = await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify({
          userId: currentUser.id,
          username: currentUser.name,
          todoName: task,
          isDone: false,
        }),
      },
    });

    if (res.status === 201) {
      setOpenNewTask(false);
      setTaskReducer(task);
      setTask("");
      history.push("/dashboard");
    }
  };

  return (
    <>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Container maxWidth="xl" className={classes.container}>
            <Avatar>{currentUser.name[0]}</Avatar>
            <Typography className={classes.userName}>
              {currentUser.name}
            </Typography>
            <Typography className={classes.logOut}>Logout</Typography>
          </Container>
        </Toolbar>
      </AppBar>
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
