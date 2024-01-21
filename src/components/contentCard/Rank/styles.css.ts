import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";

export const rankWrap = style({
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
});
export const currentRank = style({
  fontSize: 20,
});
export const rankDiff = recipe({
  base: {
    fontSize: 12,
    fontWeight: "bold",
  },
  variants: {
    upper: {
      true: {
        color: "#F32A2A",
      },
    },
    lower: {
      true: {
        color: "#1260F8",
      },
    },
  },
});
