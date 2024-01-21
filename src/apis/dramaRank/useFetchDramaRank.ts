import { QUERY_KEYS } from "@/apis/apiKeys";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import type {
  IComicRankApiSuccessResponse,
  IComicRankRequest,
} from "@/types/comicRankItemType";

export const fetchContents = async ({ page, genre }: IComicRankRequest) => {
  console.log("genre : ", genre);
  const { data } = await axios.get<IComicRankApiSuccessResponse>(
    `/api/comics/${genre}?page=${page}`,
  );
  return data;
};

export const useFetchContents = (params: IComicRankRequest) => {
  console.log("params : ", params);
  const { data, fetchNextPage, hasNextPage } =
    useInfiniteQuery<IComicRankApiSuccessResponse>(
      [QUERY_KEYS.CONTENT_RANKING, { genre: params.genre }],
      ({ pageParam = 0 }) => fetchContents({ ...params, page: pageParam }),
      {
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length;
          return lastPage.data.hasNext ? nextPage : undefined;
        },
        enabled: params.page !== null,
        refetchOnMount: true,
      },
    );
  console.log("data : ", data);
  return {
    contentList: data ? data?.pages : undefined,
    fetchNextPage,
    hasNextPage,
  };
};
