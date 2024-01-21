import { type FC } from "react";
import type { TContentsState, TPeriod } from "@/types/comicRankItemType";
import { periodTranslate } from "@/components/contentCard/constants";

interface IProps {
  contentsState: TContentsState;
  schedule: {
    periods: TPeriod[];
    anchor: number;
  };
}
const ContentsState: FC<IProps> = ({ contentsState, schedule }) => {
  const states =
    contentsState === "completed"
      ? "완결"
      : contentsState === "scheduled"
        ? schedule
          ? `매주 ${schedule.periods.map((item) => periodTranslate[item])} 연재`
          : "연재"
        : "unknown";
  return <div>{states}</div>;
};

export default ContentsState;
