import classNames from "classnames";
import history from "../../../history";
import { RoutePath } from "../../routes/route-paths";
import { Text8 } from "../shared/typography";
import "./style.scss";

export const Header = () => {
  return (
    <div className="header">
      <HeaderTab name="TODO" navigate={'/'}/>
      <HeaderTab name="Counter" navigate={RoutePath.Counter} />
      <HeaderTab name="Radio" navigate={RoutePath.Radio} />
    </div>
  );
};

interface HeaderTabProps {
    name: string;
    navigate: string
}

const HeaderTab = ({name, navigate}: HeaderTabProps) => {
  return (
    <div className={classNames("header-tab")} onClick={() => history.push(navigate)} >
      <Text8>{name}</Text8>
    </div>
  );
};
