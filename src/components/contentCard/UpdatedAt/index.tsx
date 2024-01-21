import { type FC } from "react";
import { format } from "date-fns/format";
import { formatDistanceToNow } from "date-fns";

import { ko } from "date-fns/locale";
import * as styles from "@/components/contentCard/UpdatedAt/styles.css";

interface IProps {
  updatedAt: number;
}
const UpdatedAt: FC<IProps> = ({ updatedAt }) => {
  const date = formatDistanceToNow(updatedAt, { locale: ko });
  return <div className={styles.updateDate}>{date}</div>;
};

export default UpdatedAt;
