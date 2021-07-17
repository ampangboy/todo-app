import { Grid, Card, CardContent, Box, makeStyles } from "@material-ui/core";
import { PropTypes } from "prop-types";

const useStyles = makeStyles({
  content: {
    minHeight: "90vh",
  },
  TaskCard: {
    borderRadius: "15px",
    width: 320,
  },
});

function CenteredCard({ children }) {
  const classes = useStyles();

  return (
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
              {children}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

CenteredCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CenteredCard;
