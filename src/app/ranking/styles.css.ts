import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const pageContainer = style({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
});
export const contentBox = style({
  maxWidth: 600,
  width: "100%",
  display: "flex",
  flexFlow: "column",
  padding: "12px 0",
});
export const title = style({
  fontSize: 28,
});

export const filterContainer = style({
  width: "100%",
  overflowX: "scroll",
  display: "flex",
  margin: "8px 0",
  gap: 8,
});
export const filterButton = recipe({
  base: {
    height: 40,
    backgroundColor: "rgba(255,255,255, .5)",
  },
  variants: {
    filtered: {
      true: {
        backgroundColor: "rgba(255,255,255, 1)",
      },
    },
  },
});
