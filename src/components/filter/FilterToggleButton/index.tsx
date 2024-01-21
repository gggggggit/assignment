import { FC } from "react";
import * as styles from "@/components/filter/FilterToggleButton/styles.css";

interface IProps {
  title: string;
  label: string;
  filterList: string[];
  clickEvent: (label: string) => void;
}
const FilterToggleButton: FC<IProps> = ({
  label,
  title,
  filterList,
  clickEvent,
}) => {
  return (
    <div
      className={styles.filterButton({
        filtered: filterList.includes(label),
      })}
      onClick={() => clickEvent(label)}
    >
      {title}
    </div>
  );
};

export default FilterToggleButton;
