import { style } from "@vanilla-extract/css";

export const artist = style({
  fontSize: 12,
  color: "rgba(255,255,255,.8)",
  fontWeight: "bold",
});
export const artistContainer = style({
  display: "flex",
  gap: 8,
  marginLeft: 4,
  marginBottom: 4,
});
