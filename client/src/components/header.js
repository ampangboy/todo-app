import {
  AppBar,
  Toolbar,
  Container,
  Avatar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useSelector } from "react-redux";

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
});

function Header() {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.currentUser);

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
    </>
  );
}

export default Header;
