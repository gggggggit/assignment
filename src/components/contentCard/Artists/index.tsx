import { type FC } from "react";
import { IArtist } from "@/types/comicRankItemType";
import * as styles from "@/components/contentCard/Artists/styles.css";

interface IProps {
  artists: IArtist[];
}
const Artists: FC<IProps> = ({ artists }) => {
  const artistFilter = ["writer", "painter", "scripter"];
  return (
    <div className={styles.artistContainer}>
      {artists.length &&
        artists
          .filter((artist) => {
            return artistFilter.includes(artist.role);
          })
          .map((artist, index) => {
            return (
              <div className={styles.artist} key={`${artist.name}-${index}`}>
                {artist.name}
              </div>
            );
          })}
    </div>
  );
};

export default Artists;
