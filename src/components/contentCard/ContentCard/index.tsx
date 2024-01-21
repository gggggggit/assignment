import * as styles from "@/components/contentCard/ContentCard/styles.css";
import Rank from "@/components/contentCard/Rank";
import { type FC, type PropsWithChildren } from "react";
import Artists from "@/components/contentCard/Artists";
import Title from "@/components/contentCard/Title";
import FreedEpisode from "@/components/contentCard/FreedEpisode";
import ContentsState from "@/components/contentCard/ContentsState";
import UpdatedAt from "@/components/contentCard/UpdatedAt";
import { type IComicRankItem } from "@/types/comicRankItemType";

interface IProps {
  comicRankItem: IComicRankItem;
}
const ContentCard: FC<PropsWithChildren<IProps>> = ({
  children,
  comicRankItem,
}) => {
  return (
    <div className={styles.contentCard}>
      <div className={styles.thumbnail}>
        <img
          width={130}
          height={170}
          src={comicRankItem.thumbnailSrc}
          alt={`${comicRankItem.title}-thumbnail`}
          loading="lazy"
        />
      </div>
      <div className={styles.info}>
        <Rank
          currentRank={comicRankItem.currentRank}
          previousRank={comicRankItem.previousRank}
        />
        <div className={styles.description}>
          <Title title={comicRankItem.title} />
          <Artists artists={comicRankItem.artists} />
          <FreedEpisode freedEpisode={comicRankItem.freedEpisodeSize} />
          <ContentsState
            contentsState={comicRankItem.contentsState}
            schedule={comicRankItem.schedule}
          />
          {/*<UpdatedAt updatedAt={comicRankItem.updatedAt} />*/}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
