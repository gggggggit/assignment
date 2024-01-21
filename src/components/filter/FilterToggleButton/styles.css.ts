import { recipe } from "@vanilla-extract/recipes";

export const filterButton = recipe({
  base: {
    display: "flex",
    cursor: "pointer",
    borderRadius: 4,
    border: "1px solid rgba(255,255,255, .5)",
    // backgroundColor: "rgba(255,255,255, .5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    ":hover": {
      backgroundColor: "rgba(255,255,255, .1)",
    },
  },
  variants: {
    filtered: {
      true: {
        backgroundColor: "rgba(255,255,255, .3)",
        ":hover": {
          backgroundColor: "rgba(255,255,255, .5)",
        },
      },
    },
  },
});
