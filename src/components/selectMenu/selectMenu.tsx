import { FC, useState, useEffect } from "react";
import clsx from "clsx";
import { MenuArrow } from "../../assets/SVG";
import "./select.scss";

type listType = {
  id: string;
  name: string;
}[];
type itemType = {
  id: string;
  name: string;
};

export type selectMenuProps = {
  header: string;
  value: string | undefined;
  options: any[];
  onChangeHandler?: <T>(item: T) => void;
  disabled?: boolean;
};

const SelectMenu: FC<selectMenuProps> = ({
  header,
  value,
  options,
  onChangeHandler,
  disabled,
}) => {
  const [showList, setShowList] = useState<boolean>(false);
  const [list, setList] = useState<listType>([]);
  const [listItem, setListItem] = useState<itemType | undefined>(undefined);

  useEffect(() => {
    let optArr: listType = [];
    options.map((item) => {
      optArr.push({ id: item.id, name: item.name });
    });
    setList(optArr);
  }, [options]);

  return (
    <div className="select">
      {list?.length ? (
        <button
          className={clsx({
            "select--header": true,
            "list--open": showList,
            "disabled--menu": disabled,
          })}
          onClick={() => setShowList(!showList)}
          disabled={disabled}
        >
          <h3>{value && options.length !== 0 ? value : header}</h3>
          <span className="select--header__icon">
            <MenuArrow />
          </span>
        </button>
      ) : (
        <button
          className={clsx({
            "select--header": true,
            "list--open": showList,
            "disabled--menu": true,
          })}
          onClick={() => setShowList(!showList)}
          disabled={true}
        >
          <h3>{value && options.length !== 0 ? value : header}</h3>
          <span className="select--header__icon">
            <MenuArrow color="#9f9f9f" />
          </span>
        </button>
      )}
      {showList && list?.length && (
        <ul
          className={clsx({
            "select--list": true,
            "select--list--open": showList,
          })}
        >
          {list.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                if (onChangeHandler) onChangeHandler(item);
                setListItem(item);
                setShowList(false);
              }}
              className="select--list__item"
            >
              <p className="select--opt">{item.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectMenu;
