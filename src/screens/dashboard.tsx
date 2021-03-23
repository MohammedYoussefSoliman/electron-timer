import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../states";
import { LogoIcon } from "../assets/SVG";
import { User, Timer, TimeStatistcs } from "../components";
import { handleUserFullName } from "../helpers";
import "./layout.scss";

const Dashboard: FC = () => {
  const { user } = useSelector((store: RootState) => store);
  return (
    <div className="layout">
      <header className="layout--header">
        <div className="layout--header__logoContainer">
          <LogoIcon width={120} />
        </div>
        <User
          fullName={handleUserFullName(
            user.first_name ? user.first_name : "",
            user.middle_name ? user.middle_name : "",
            user.last_name ? user.last_name : ""
          )}
          role={user.role ? user.role : null}
        />
      </header>
      <main className="layout--main">
        <div className="layout--main__content">
          <Timer />
          <TimeStatistcs yesterday="05:14" weekly="19:23" monthly="80:17" />
        </div>
        <div className="layout--main__navigation">
          <ul className="organization--list">
            <li className="organization--list__item">
              <button className="organization--btn active">
                organization 1
              </button>
            </li>
            <li className="organization--list__item">
              <button className="organization--btn">organization 2</button>
            </li>
            <li className="organization--list__item">
              <button className="organization--btn">organization 3</button>
            </li>
            <li className="organization--list__item">
              <button className="organization--btn">organization 4</button>
            </li>
          </ul>
        </div>
        {console.log(user)}
      </main>
    </div>
  );
};

export default Dashboard;
