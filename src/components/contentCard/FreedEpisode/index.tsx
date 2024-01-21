import { type FC } from "react";

interface IProps {
  freedEpisode: number;
}
const FreedEpisode: FC<IProps> = ({ freedEpisode = 0 }) => {
  return <>{freedEpisode > 0 && <div>{freedEpisode}화 무료</div>}</>;
};

export default FreedEpisode;
