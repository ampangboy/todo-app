import {
  AppBar,
  Toolbar,
  Container,
  Avatar,
  Typography,
  makeStyles,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Modal,
} from "@material-ui/core";
import { useState } from "react";

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
  content: {
    minHeight: "90vh",
  },
  TaskCard: {
    borderRadius: "15px",
    width: 320,
  },
  noTaskText: {
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
});

function Task() {
  const classes = useStyles();
  const [openNewTask, setOpenNewTask] = useState(false);

  const handleOpenNewTask = () => {
    setOpenNewTask(true);
  };

  const handleCloseNewTask = () => {
    setOpenNewTask(false);
  };

  return (
    <>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Container maxWidth="xl" className={classes.container}>
            <Avatar>P</Avatar>
            <Typography className={classes.userName}>Pally</Typography>
            <Typography className={classes.logOut}>Logout</Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignContent="center"
        className={classes.content}
      >
        <Grid item>
          <Card className={classes.TaskCard} elevation={0}>
            <CardContent>
              <Box display="flex" flexDirection="column">
                <Typography className={classes.noTaskText}>
                  You have no task
                </Typography>
                <Button
                  className={classes.addTask}
                  variant="contained"
                  color="primary"
                  onClick={handleOpenNewTask}
                >
                  + New Task
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Modal open={openNewTask} onClose={handleCloseNewTask}>
        <div>test</div>
      </Modal>
    </>
  );
}

export default Task;
