import { FC } from "react";
import clsx from "clsx";
import { Checkbox, withStyles, CheckboxProps } from "@material-ui/core";
import { useField, FieldAttributes } from "formik";
import {
  LogoIcon,
  VisibilityOn,
  VisibilityOff,
  UserIcons,
  Spinner,
  CheckIcon,
} from "../../assets/SVG";
import { useStyles } from "../../helpers/styles";

const CustomCheckbox = withStyles({
  root: {
    color: "#3c73c7",
    padding: 0,
    marginRight: 8,
    "&$checked": {
      color: "#C4C4C4",
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const CheckRemeber: FC<FieldAttributes<any>> = ({ ...props }) => {
  const [field, meta] = useField<{}>(props);
  return <CustomCheckbox {...field} checkedIcon={<CheckIcon />} />;
};

export default CheckRemeber;
