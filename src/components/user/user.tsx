import { Dispatch } from "react";
import { useHistory } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";
import { SettingIcon, LogoutIcon, DashboardIcon } from "../../assets/SVG";
import { thanos } from "../../assets/Images";
import { useDispatch } from "react-redux";
import { setLogin } from "../../states/action/actions";
import useHTTP from "../../hooks/useHTTP";
import { UserActionTypes } from "../../states/types/types";
import "./user.scss";

type IuserProps = {
  fullName: string;
  role: string[] | null;
  imageUrl?: string;
};

const User = ({ fullName, role, imageUrl }: IuserProps) => {
  const dispatch = useDispatch<Dispatch<UserActionTypes>>();
  const history = useHistory();
  const { call } = useHTTP<any>({ endPoint: "logout", method: "POST" });

  const logout = () => {
    dispatch(setLogin({ token: undefined }));
    localStorage.removeItem("token");
    call();
    history.push("/login");
  };

  return (
    <div className="user">
      <Avatar alt={fullName} src={imageUrl ? imageUrl : thanos} />
      <div className="user--info">
        <h2 className="user--info__name">{fullName}</h2>
        {role && <h4 className="user--info__title">{role.join(", ")}</h4>}
      </div>
      <div className="user--actions">
        <IconButton className="user--actions__btn">
          <DashboardIcon size="18" />
        </IconButton>
        <IconButton className="user--actions__btn">
          <SettingIcon size="21" />
        </IconButton>
        <IconButton className="user--actions__btn" onClick={() => logout()}>
          <LogoutIcon size="21" />
        </IconButton>
      </div>
    </div>
  );
};

export default User;
