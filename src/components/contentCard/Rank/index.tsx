import { type FC } from "react";
import * as styles from "@/components/contentCard/Rank/styles.css";

interface IProps {
  currentRank: number;
  previousRank: number;
}
const Rank: FC<IProps> = ({ currentRank, previousRank }) => {
  const rankChange = previousRank - currentRank;

  return (
    <div className={styles.rankWrap}>
      <div className={styles.currentRank}>{currentRank}</div>
      <div
        className={styles.rankDiff({
          upper: rankChange > 0,
          lower: rankChange < 0,
        })}
      >
        {rankChange > 0 ? "▲" : rankChange < 0 ? "▼" : "-"}
        {rankChange !== 0 ? Math.abs(rankChange) : ""}
      </div>
    </div>
  );
};

export default Rank;
