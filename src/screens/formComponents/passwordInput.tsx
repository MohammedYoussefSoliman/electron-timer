import { FC } from "react";
import clsx from "clsx";
import {
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { useField, FieldAttributes } from "formik";
import { VisibilityOn, VisibilityOff } from "../../assets/SVG";
import { useStyles } from "../../helpers/styles";

type InputPasswordProps = {
  label: string;
  showPassword: boolean;
  handleShowPassword: () => void;
  handleMouseDownPassword: () => void;
  resError?: string | undefined;
} & FieldAttributes<any>;

const PasswordInput: FC<InputPasswordProps> = ({
  label,
  showPassword,
  handleShowPassword,
  handleMouseDownPassword,
  resError,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const classes = useStyles();
  return (
    <div className="input--group">
      {errorText && !resError && (
        <span className="error--msg">{errorText}</span>
      )}
      {resError && <span className="error--msg">{resError}</span>}
      <InputLabel className={classes.label}>{label}</InputLabel>
      <OutlinedInput
        className={clsx(
          classes.root,
          errorText || resError ? classes.error : ""
        )}
        type={showPassword ? "text" : "password"}
        error={!!errorText}
        {...field}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? (
                <VisibilityOff size="16" />
              ) : (
                <VisibilityOn size="16" />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

export default PasswordInput;
