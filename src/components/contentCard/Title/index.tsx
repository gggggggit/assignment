import { type FC } from "react";
import * as styles from "@/components/contentCard/Title/styles.css";

interface IProps {
  title: string;
}
const Title: FC<IProps> = ({ title }) => {
  return <div className={styles.title}>{title}</div>;
};

export default Title;
