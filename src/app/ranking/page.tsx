"use client";

import { type FC, useCallback, useState } from "react";
import { Virtuoso } from "react-virtuoso";
import Card from "@/components/contentCard/ContentCard";
import { useSearchParams } from "next/navigation";
import { useFetchContents } from "@/apis/dramaRank/useFetchDramaRank";
import * as styles from "@/app/ranking/styles.css";
import FilterToggleButton from "@/components/filter/FilterToggleButton";
import { IComicRankItem, TGenre } from "@/types/comicRankItemType";

const Ranking: FC = () => {
  const [filterList, setFilterList] = useState<string[]>([]);
  const params = useSearchParams();
  const genre = params.get("genre") || "romance";
  const { contentList, fetchNextPage, hasNextPage } = useFetchContents({
    genre: genre === "drama" ? "drama" : "romance",
    page: 0,
  });
  const filterItems = [
    { title: "연재중", label: "scheduled" },
    { title: "완결", label: "completed" },
    { title: "단행본", label: "isPrint" },
    { title: "무료 회차 3개 ↑", label: "freed" },
  ];
  const pageTitle: { drama: string; romance: string } = {
    romance: "로맨스",
    drama: "드라마",
  };
  const loadMore = () => {
    setTimeout(() => {
      fetchNextPage();
    }, 1000);
  };
  const filterToggle = (label: string) => {
    const list = [...filterList];
    if (list.includes(label)) {
      list.splice(
        list.findIndex((item) => item === label),
        1,
      );
    } else if (label === "completed" && list.includes("scheduled")) {
      list.splice(
        list.findIndex((item) => item === "scheduled"),
        1,
      );
      list.push(label);
    } else if (label === "scheduled" && list.includes("completed")) {
      list.splice(
        list.findIndex((item) => item === "completed"),
        1,
      );
      list.push(label);
    } else {
      list.push(label);
    }
    setFilterList(list);
  };
  const filtering = (item: IComicRankItem) => {
    if (
      filterList.includes("scheduled") &&
      item.contentsState === "completed"
    ) {
      return false;
    }
    if (
      filterList.includes("completed") &&
      item.contentsState === "scheduled"
    ) {
      return false;
    }
    if (filterList.includes("freed") && item.freedEpisodeSize < 3) {
      return false;
    }
    if (filterList.includes("isPrint") && !item.isPrint) {
      return false;
    }
    return true;
  };
  const Footer = () => {
    return hasNextPage ? (
      <div
        style={{
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Loading...
      </div>
    ) : (
      <></>
    );
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentBox}>
        <div className={styles.title}>
          {pageTitle[genre === "drama" ? genre : "romance"]}
        </div>
        <div className={styles.filterContainer}>
          {filterItems.map(({ label, title }, index) => (
            <FilterToggleButton
              key={`${label}-${index}`}
              label={label}
              title={title}
              filterList={filterList}
              clickEvent={filterToggle}
            />
          ))}
        </div>
        {contentList && contentList?.length && (
          <Virtuoso
            data={contentList}
            endReached={loadMore}
            overscan={100}
            itemContent={(index, item) =>
              item.data.comicRankList
                .filter((item) => filtering(item))
                .map((item, index) => {
                  return (
                    <Card comicRankItem={item} key={`${item.title}-${index}`} />
                  );
                })
            }
            components={{ Footer }}
          />
        )}
      </div>
    </div>
  );
};

export default Ranking;
