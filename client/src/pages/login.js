import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

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
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  const handleSubmit = async () => {
    const res = await fetch("http://localhost/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify({
          id,
          username: name,
        }),
      },
    });

    if (res.status === 200 || res.status === 201) {
      history.push("/task");
    }
  };

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
            <TextField
              id="Id"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Id"
              margin="normal"
              fullWidth
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <TextField
              id="name"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="name"
              margin="normal"
              fullWidth
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              type="submit"
              onClick={handleSubmit}
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
