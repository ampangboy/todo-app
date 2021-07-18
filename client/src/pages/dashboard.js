import { makeStyles, Container, Grid } from "@material-ui/core";
import Header from "../components/header";
import TopCard from "../components/topCard";
import TaskCompleted from "../components/taskCompleted";

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
  },
});

function Dashboard() {
  const classes = useStyles();
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  // grid-gap: 1rem;
  return (
    <>
      <Header />
      <Container maxWidth="xl" className={classes.container}>
        <Grid className={classes.topDashboardContainer}>
          <TopCard>
            <TaskCompleted />
          </TopCard>
          <TopCard>
            <div>test</div>
          </TopCard>
          <TopCard>
            <div>test</div>
          </TopCard>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;