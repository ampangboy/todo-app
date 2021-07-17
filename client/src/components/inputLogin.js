import { FormControl, TextField } from "@material-ui/core";
import PropTypes from "prop-types";

function InputLogin({ id, inputLabel }) {
  return (
    <FormControl fullWidth margin="normal">
      <TextField
        id={id}
        variant="filled"
        InputProps={{ disableUnderline: true }}
        label={inputLabel}
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
