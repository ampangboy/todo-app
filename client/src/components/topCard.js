import { Card, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  card: {
    marginTop: "3rem",
    width: "100%",
    height: "250px",
    borderRadius: "25px",
  },
});

function TopCard({ children }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={0}>
      {children}
    </Card>
  );
}

TopCard.propTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]).isRequired;

export default TopCard;
