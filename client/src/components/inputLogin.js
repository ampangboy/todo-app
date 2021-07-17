import {
  FormControl,
  InputLabel,
  makeStyles,
  TextField,
} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  inputLabel: {
    paddingLeft: "1rem",
  },
});

function InputLogin({ id, inputLabel }) {
  const classes = useStyles();

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel htmlFor="userid" className={classes.inputLabel}>
        {inputLabel}
      </InputLabel>
      <TextField
        id={id}
        variant="filled"
        InputProps={{ disableUnderline: true }}
      />
    </FormControl>
  );
}

InputLogin.propTypes = { id: PropTypes.string, inputLabel: PropTypes.string };

InputLogin.defaultProps = {
  id: null,
  inputLabel: "",
};

export default InputLogin;
