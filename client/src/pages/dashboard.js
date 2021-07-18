import {
  makeStyles,
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Modal,
  Paper,
  TextField,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Header from "../components/header";
import TopCard from "../components/topCard";
import TaskCompleted from "../components/taskCompleted";
import LatestTask from "../components/latestTask";
import PieChartCard from "../components/pieChartCard";
import Todo from "../class/todo";
import rootActions from "../redux/rootActions";
import TaskControl from "../components/taskControl";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
  topDashboardContainer: {
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
    display: "grid",
    width: "100%",
    justifyItems: "center",
    marginBottom: "3rem",
  },
  middleDashboardContainer: {
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
    display: "grid",
    width: "100%",
    marginBottom: "3rem",
  },
  taskTitle: {
    fontSize: "2rem",
    lineHeight: "3rem",
    color: "#8ea2a6",
    marginLeft: "2rem",
  },
  button: {
    marginTop: "1rem",
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
  taskHeader: {
    fontSize: "2rem",
    textAlign: "center",
    color: "#7e949a",
  },
  seachText: {
    margin: "0 2rem",
    marginTop: "1rem",
  },
  paper: {
    width: "100%",
    borderRadius: "25px",
  },
  taskListContainer: {
    margin: "2rem",
  },
});

function Dashboard() {
  const classes = useStyles();
  const [openNewTask, setOpenNewTask] = useState(false);
  const [task, setTask] = useState("");
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
    const res = await fetch("http://localhost:3000/api/todo", {
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
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="xl" className={classes.container}>
        <Grid className={classes.topDashboardContainer}>
          <TopCard>
            <TaskCompleted />
          </TopCard>
          <TopCard>
            <LatestTask />
          </TopCard>
          <TopCard>
            <PieChartCard />
          </TopCard>
        </Grid>
      </Container>
      <Container maxWidth="xl" className={classes.container}>
        <Grid className={classes.middleDashboardContainer}>
          <Typography className={classes.taskTitle}>Task</Typography>
          <Box display="flex" flexDirection="row-reverse" flexWrap="wrap">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              onClick={handleOpenNewTask}
            >
              + New Task
            </Button>
            <TextField
              disabled
              id="filled-disabled"
              defaultValue="Search By Task Name"
              variant="filled"
              className={classes.seachText}
              InputProps={{ disableUnderline: true }}
            />
          </Box>
        </Grid>
      </Container>
      <Container maxWidth="xl" className={classes.container}>
        <Paper elevation={0} className={classes.paper}>
          <div className={classes.taskListContainer}>
            <TaskControl />
          </div>
        </Paper>
      </Container>

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

export default Dashboard;
