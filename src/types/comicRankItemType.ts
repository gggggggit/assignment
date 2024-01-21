//
export type TPeriod = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
export type TGenre = "drama" | "romance";
//
type TArtistRole =
  | "writer"
  | "painter"
  | "scripter"
  | "original"
  | "publisher"
  | "label";
export interface IArtist {
  name: string;
  role: TArtistRole;
  id: string;
  email: string | null;
}
export type TContentsState = "scheduled" | "completed";
export interface IComicRankItem {
  id: number;
  alias: string;
  title: string;
  artists: IArtist[];
  badges: string;
  schedule: {
    periods: TPeriod[];
    anchor: number;
  };
  genres: string[];
  freedEpisodeSize: number;
  contentsState: TContentsState;
  currentRank: number;
  previousRank: number;
  updatedAt: number;
  isPrint: boolean;
  thumbnailSrc: string;
}
export interface IComicRankApiSuccessResponse {
  data: IComicRankApi;
}
export interface IComicRankRequest {
  genre: TGenre;
  page: number;
}
export interface IComicRankApiFailResponse {
  error: string;
}

export interface IComicRankApi {
  count: number;
  hasNext: boolean;
  comicRankList: IComicRankItem[];
}
