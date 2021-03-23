import { FC } from "react";
import clsx from "clsx";
import { OutlinedInput, InputLabel, InputAdornment } from "@material-ui/core";
import { useField, FieldAttributes } from "formik";
import { UserIcons } from "../../assets/SVG";
import { useStyles } from "../../helpers/styles";

type InputTextProps = {
  label: string;
  resError?: string | undefined;
} & FieldAttributes<any>;

const TextInput: FC<InputTextProps> = ({ label, resError, ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const classes = useStyles();

  return (
    <div className="input--group">
      {errorText && !resError && (
        <span className="error--msg">{errorText}</span>
      )}
      <InputLabel className={classes.label}>{label}</InputLabel>
      <OutlinedInput
        className={clsx(
          classes.root,
          errorText || resError ? classes.error : ""
        )}
        error={!!errorText}
        {...field}
        endAdornment={
          <InputAdornment position="end">
            <UserIcons size="16" />
          </InputAdornment>
        }
      />
    </div>
  );
};

export default TextInput;
