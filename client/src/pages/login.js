import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLogin from "../components/inputLogin";

const useStyles = makeStyles(() => ({
  root: {
    width: 320,
  },
  cardContent: {
    padding: 30,
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#537178",
    marginBottom: "1rem",
  },
  button: {
    marginTop: "1rem",
  },
  fullPage: {
    minHeight: "95vh",
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignContent="center"
      className={classes.fullPage}
    >
      <Grid item>
        <Card className={classes.root}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardTitle}>Login</Typography>
            <InputLogin id="id" inputLabel="Id" />
            <InputLogin id="name" inputLabel="Name" />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              role="button"
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Login;
